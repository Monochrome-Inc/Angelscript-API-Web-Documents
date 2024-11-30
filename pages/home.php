<?php
session_start();
// Functions
require_once 'lib/functions.php';

require_once 'Michelf/MarkdownExtra.inc.php';

// Get Markdown class
use Michelf\Markdown;
use Michelf\MarkdownExtra;

$file = "homepage";

// Read file and pass content through the Markdown parser
if ( $_SESSION["lang"] == "english" )
	$text = file_get_contents('../lib/markdown/'. $file . '.md');
else
	$text = file_get_contents('../lib/lang/' . $_SESSION["lang"] . '/markdown/'. $file . '.md');
echo MarkdownExtra::defaultTransform($text);

LoadScripts();
?>