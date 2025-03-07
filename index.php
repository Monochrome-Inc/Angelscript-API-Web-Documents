<?php
session_start();
// Default language
if ( !isset( $_SESSION["lang"] ) )
	$_SESSION["lang"] = "english";
// If we have a post, override.
if ( isset( $_POST['lang'] ) )
    $_SESSION["lang"] = $_POST['lang']; 
?>
<!-- Written by Johan Ehrendahl -->
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		
		<title>Angelscript API</title>
		<meta name="description" content="API Documentation for Angelscript">
		<meta name="keywords" content="zps, zp!s, zombie panic, zombiepanic, zombie panic!, zombie panic! source, angelscript, api, documentation">
		
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
		<link rel="stylesheet" href="css/site.css">
		<link rel="stylesheet" href="css/sidebar-menu.css">
		
		<link rel="stylesheet" href="css/perfect-scrollbar.css">
		
		<link rel="icon" type="image/png" href="favicon.png">
		
		<link rel="stylesheet" href="highlight/css/angelscript.css">
		<script src="highlight/highlight.pack.js"></script>
		
		<script src="js/jquery-3.7.1.min.js"></script>
		<script src="js/asapi.js"></script>
		
		<script src="js/sidebar-menu.js"></script>
		<script src="js/perfect-scrollbar.min.js"></script>
		
	</head>
	<body class="index" data-languages="[]">
		<div class="sidebar">
			<img src="images/logo.png" id="logo" class="logo" alt="Logo" />
			<div class="fa fa-globe lang">
				<span id="lang_btn">Loading...</span>
				<ul id="submenu"></ul>
			</div>
			<div class="fa fa-search search">
				<input type="text" class="search" id="input-search" placeholder="Search">
			</div>
			<div class="search-results-base">
				<ul class="search-results"></ul>
			</div>
			<ul id="navbar" class="sidebar-menu">
			</ul>
			<script src="js/sidebar-menu.js"></script>
			<script>
				$.sidebarMenu($('.sidebar-menu'))
			</script>
			<div style="color: whitesmoke;padding-top: 10px;text-align: center;" id="dateloc" ></div>
		</div>
		<div class="basecontent">
		</div>
		<script>
			$('#input-search').keyup(function(){
				var searchField = $(this).val();
				if(searchField === '')  {
					$('.search-results').html('');
					$('.search-results').css('height', '0px');
					return;
				}
				
				var regex = new RegExp(searchField, "i");
				var output = '<div class="row">';
				var count = 0;
				var foundvalue = false;
				
				for ( i = 0; i < json_data.length; i++ ) {
					var val = json_data[i];
					if ((val['name'].search(regex) != -1) || (val['desc'].search(regex) != -1) || (val['eventtype'].search(regex) != -1) || (val['namespace'].search(regex) != -1) || (val['base'].search(regex) != -1)) {
						var desctext = val.desc;
						var descstring_length = 50;
						if ( val.desc.length > descstring_length )
							desctext = desctext.substring(0, descstring_length) + '...';
						
						var functionname = val.name;
						if ( val.namefake != '' )
							functionname = val.namefake;
						
						output += '<div style="margin-left: 25px;">';
						output += '<a href="#cat=' + val.category + '&amp;page=' + val.base + '&amp;function=' + val.name + '" onclick="LoadPageDelay()"><h5 style="color: lightblue;"><i class="fa fa-code"></i> <span class="value">' + val.eventtype + "</span>" + functionname + ' (<span class="function">' + val.base +'</span>)</h5>';
						output += '<p style="color: white;margin-top: -8px;margin-left: 20px;font-size: 12px;">' + desctext + '</p>'
						output += '</a></div>';
						count++;
						foundvalue = true;
					}
				};
				output += '</div>';
				if ( foundvalue )
					$('.search-results').html(output);
				else
					$('.search-results').html('<div style="color: whitesmoke;width: 100%;text-align: center;">No results found for "' + searchField + '"</div>');
				
				var height = 0;
				
				if ( count > 10 )
					count = 10;
				
				for ( var itemp = 0; itemp <= count ; itemp++ )
					height += 45.4;
				
				$('.search-results').css('height', height + 'px');
			});
			
			$(document).ready(function() {
				LoadASAPIFromLang(<?php echo '\'' . $_SESSION["lang"] . '\''; ?>, true);
				LoadPage();
				updateSize();
			});

			$('a[rel="page"]').on('click', function(e) {
				setTimeout(function(){
					LoadPage();
				}, 50);
			});

			$('#lang_btn').on('click', function(e) {
				$('#submenu').toggle('fast');
			});

			function LoadPageDelay() {
				setTimeout(function(){
					LoadPage();
				}, 50);
			}
			
			function SetTitleFromFunc( category_txt, cat_txt )
			{
				var page_txt = cat_txt.split('&function=')[0];
				var func_split = cat_txt.split('&function=')[1];
				var output = category_txt;
				if ( func_split )
					output = func_split;
				
				$('meta[name=title]').remove();
				if ( category_txt && page_txt )
					$('head').append( '<meta name="title" content="' + category_txt + ' - ' + func_split + '">' );
				else
					$('head').append( '<meta name="title" content="' + category_txt + '">' );
				
				return output;
			}
			
			function LoadPage() {
				var path = $(location).attr('hash');
				var location1 = path.split('#')[1];
				var descfind = null;
				if ( location1 )
				{
					var cat_txt = location1.split('cat=')[1];
					if ( cat_txt )
					{
						$('meta[name=description]').remove();
						var category_txt = cat_txt.split('&page=')[0];
						if ( category_txt )
							descfind = SetTitleFromFunc( category_txt, cat_txt );
						
						if ( descfind )
							$('head').append( '<meta name="description" content="API Documentation for ' + descfind + '">' );
						else
							$('head').append( '<meta name="description" content="API Documentation for Angelscript">' );
					}
					else
					{
						$('meta[name=title]').remove();
						$('meta[name=description]').remove();
						$('head').append( '<meta name="title" content="' + asapi_title + '>' );
						$('head').append( '<meta name="description" content="API Documentation for Angelscript">' );
					}
				}
				
				if ( window.location.hash === '#home' || window.location.hash === '' )
					$('.basecontent').load("pages/home.php");
				else
					$('.basecontent').load('pages/reader.php?' + location1);
			}
			
			const ps = new PerfectScrollbar('.sidebar', {
				wheelSpeed: 1,
				wheelPropagation: true,
				minScrollbarLength: 20
			});
			
			function updateSize() {
				ps.update();
				setTimeout(function(){
					updateSize();
				}, 5);
			}
		</script>
	</body>
</html>