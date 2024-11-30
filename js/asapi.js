/* Angelscript API Documentation -- v1.1 | Written by Johan Ehrendahl */

var json_data = [];		// Our json object
var asapi_title = "";

// Available languages
var current_lang = "english";
var current_lang_txt = "English";
var langs = {
	'english': 'English',
	'schinese': '简体中文 (Simplified Chinese)',
	'tchinese': '繁體中文 (Traditional Chinese)'
};
// TODO: Change these to local hosted flags instead.
var lang_flag = {
	'english': '//upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
	'schinese': '//upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
	'tchinese': '//upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg'
};
function LoadAvailableLanguages()
{
	// Our language buttons
	var lang_buttons = [];
	$.each( langs, function( key, value ) {
		var active_lang = " ";
		if ( current_lang == key )
		{
			active_lang = ' id="active" ';
			current_lang_txt = value;
		}
		lang_buttons.push( '<li' + active_lang + 'rel="lang" lang="' + key + '" onclick="LoadASAPIFromLang(\'' + key + '\', false)"><span><img class="flag" src="' + lang_flag[key] + '">' + value + '</span></li>' );
	});
	
	var list = document.getElementById( "submenu" );
	list.innerHTML = lang_buttons.join( "" );
	
	// Replace the string
	var list = document.getElementById( "lang_btn" );
	list.innerHTML = '<img class="flag" src="' + lang_flag[current_lang] + '">' + current_lang_txt;
}

function LoadASAPI(lang_to_read) {
	var datafile = "lib/lang/" + lang_to_read + "/data.json";
	if ( lang_to_read == "english" )
		datafile = "lib/data.json";
	// Load our data.json
	$.getJSON( datafile, function( data ) {
		// Reset
		json_data = [];
		
		// Set our current language
		current_lang = lang_to_read;
		
		// Set our title
		asapi_title = data['doc_name'];
		document.title = asapi_title;
		
		// Override the logo, if we use a custom one
		var image = document.getElementById( "logo" );
		image.src = data['doc_logo'];
		
		// Create our navbar
		var navbar = [];
		navbar.push( "<li class=\"sidebar-header\">MAIN NAVIGATION</li>" );
		navbar.push( "<li><a href=\"#home\" rel=\"page\"><span>Home</span></a></li>" );
		
		// Add our categories
		$.each( data['categories'], function( categories, category_val ) {
				navbar.push( '<li><a href="#' + categories + '"><span>' + categories + '</span><i class="fa fa-angle-left pull-right"></i></a>' );
				navbar.push( '<ul class="sidebar-submenu">' );
				$.each( data['categories'][categories], function( category_data, category_data_val ) {
					navbar.push( '<li><a href="#cat=' + categories + '&amp;page=' + category_data + '" rel="page"><span>' + category_data + '</span><i class="fa fa-angle-left pull-right"></i></a>' );
					navbar.push( '<ul class="sidebar-submenu">' );
					$.each( data['categories'][categories][category_data]['functions'], function( item_data, item_data_val ) {
						var ItemKey = data['categories'][categories][category_data]['functions'][item_data];
						var PageNameSpace = '<span class="class">' + ItemKey['type'] + '</span> ';
						var eventtype = "";
						if ( ItemKey['eventtype'] )
						{
							eventtype = ItemKey['eventtype'] + "::";
							PageNameSpace = '<span class="class">' + ItemKey['eventtype'] + '::</span>';
						}
						else
						{
							if ( ItemKey['object'] )
							{
								PageNameSpace = '<span class="class">' + ItemKey['object'] + '@</span> ';
								if ( ItemKey['child'] )
									PageNameSpace = PageNameSpace + '<span class="class">' + ItemKey['child'] + '</span>.';
							}
							else if ( ItemKey['namespace'] || ItemKey['type'] && ItemKey['type'] == "namespace" )
							{
								var namespace = ItemKey['type'];
								if ( ItemKey['namespace'] )
									namespace = ItemKey['namespace'];
								PageNameSpace = '<span class="class">' + namespace + '</span>::';
							}
							else if ( ItemKey['child'] )
								PageNameSpace = PageNameSpace + '<span class="class">' + ItemKey['child'] + '</span>.';
						}
						
						var DisplayName = FunctionName = ItemKey['name'];
						var FunctionNameFake = '';
						var FunctionNameSpace = '';
						if ( ItemKey['namefake'] )
							DisplayName = FunctionNameFake = ItemKey['namefake'];
						if ( ItemKey['namespace'] )
							FunctionNameSpace = ItemKey['namespace'];
						
						navbar.push( '<li><a href="#cat=' + categories + '&amp;page=' + category_data + '&amp;function=' + ItemKey['name'] + '" rel="page"><span>' + PageNameSpace + DisplayName + '</span></a></li>' );
						
						// Add to our search
						json_data.push({
							"category": categories,
							"base": category_data,
							"name": FunctionName,
							"namefake": FunctionNameFake,
							"namespace": FunctionNameSpace,
							"desc": ItemKey['desc'],
							"type": ItemKey['type'],
							"eventtype": eventtype
						});
					});
					
					navbar.push( "</ul></li>" );
				});
				navbar.push( "</ul></li>" );
		});
		
		// Add our extra documentations
		if ( data['doc_extras'] )
		{
			navbar.push( '<li class="sidebar-header">OTHER DOCUMENTATION</li>' );
			$.each( data['doc_extras'], function( categories, category_val ) {
				navbar.push( '<li><a target="_blank" href="' + categories + '"><i class="fa fa-book"></i><span>' + data['doc_extras'][categories] + '</span></a></li>' );
			});
		}
		
		// Add it to our navigation
		var list = document.getElementById( "navbar" );
		list.innerHTML = navbar.join("");
		
		// Update our generation date
		var dateloc = document.getElementById( "dateloc" );
		dateloc.innerHTML = "";
		var gen_date = data['doc_gen'];
		var date = new Date( gen_date * 1000 );
		
		// Grab our date info
		var month = date.getMonth();
		var day = date.getDate();
		var year = date.getFullYear();
		
		// Grab our month name
		const monthNames = ["January", "February", "March", "April", "May", "June",
		  "July", "August", "September", "October", "November", "December"
		];
		
		// Format our time
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var ampm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0'+minutes : minutes;
		var strTime = hours + ':' + minutes + ampm;
		
		// Print when we generated our API
		var txt = "Generated on " + monthNames[month] + " " + day + ", " + year + " | " + strTime;
		dateloc.appendChild( document.createTextNode( txt ) );
		
		$('head').append( '<meta name="type" content="article">' );
		$('head').append( '<meta name="url" content="http://contagion-game.com/api/">' );
		$('head').append( '<meta name="image" content="http://contagion-game.com/api/' + data['doc_logo'] + '">' );
		
		// Refresh our available languages
		LoadAvailableLanguages();
		
		// Do ajax update
		$.ajax({
		  type: 'POST',
		  url: 'index.php',
		  data: { lang: current_lang },
		  success: function(data) {
			//success code
		  }
		});
	});
}

function LoadASAPIFromLang(lang_to_read, forced)
{
	console.log("LoadASAPIFromLang:" + lang_to_read);
	if ( !forced )
	{
		if ( lang_to_read == current_lang ) return;
	}
	setTimeout(function(){
		LoadASAPI(lang_to_read);
		// Reload the page
		if ( !forced )
		{
			setTimeout(function(){
				LoadPage();
			}, 45);
		}
	}, 45);
}
