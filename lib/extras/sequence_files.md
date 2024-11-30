Introduction
============

This is a simple scripting language that allows some events to be scripted and triggered using the `logic_scene` entity. It uses the file format of `.seq`, which is based on Condition Zero: Deleted Scenes `.seq`.

The sequence files must be placed under the `data/sequences/` folder for the entity to read and call the functions.


## Syntax
- - -

### Function Blocks

Sequence file syntax revolves around function blocks. A function block contains a list of commands to execute.

Function block syntax depends slightly on the type of block, but it generally looks like this:
```
%ExampleFunction
{
	#dlc_only	= true
	#target		= "c4_1"
	#character	= !target
	#voice		= k_eVoiceBombsOnATrain
}
```

A function block can also contain arguments, which is used by `#include` and the corresponding function call. Here is an example for how a function block with arguments can look like.
```
%VoiceComText( args )
{
	// First argument
	#ccRange	= $0
	// Second Argument
	#ccLocation	= $1
	#ccColor	= "0 255 255"
}
```



### Available Commands

All commands starts with `#`. When calling a function, make sure it contains a `=` before we set the value of command. If a certain command is not working, make sure to have `sv_sequence_debug` enabled.

Command                | Type     | Description
----------------------- | ---------------------------------------------------------------------------------
dlc_only | `BOOL` | If true, it will only check for the latest DLC characters, starting from Mike.
type | `STRING` | Selects which kind of character should speak. Check below for the available types.
character | `STRING` | Same as `#type`. Just a fallback command for older .seq versions
voice | `STRING` | Uses the same [Voice Table][VoiceEnumTable] as Angelscript.
playanim | `STRING` | Plays a gesture animation.
pause | `FLOAT` | How long we should delay in seconds until we fire the next line in our sequence function.
playback | `FLOAT` | The playback rate for the gesture animation.
respond | `BOOL` | Respond to this character. This will pick a random character closest to the talker.
target | `STRING` | If `#type` is set to `!target`, then this function will be read. It reads the `targetname` of the entity. Classnames are not supported.
ascall | `STRING` | Angelscript function call. It will fire a global function called [void OnSequenceFired( const string &in szValue )][OnSequenceFired].
ccColor | `STRING` | The color of our Closed Captions. If set to `0 255 0`, the text will become green.
ccText | `STRING` | The Closed Captions text that will be sent to the players (if in in range).
ccLocation | `STRING` | Location of the Closed Captions origin, `targetname` is also possible.
ccRange | `FLOAT` | Range of the Closed Captions from the origin point. If set to `-1` or less, the range will be ignored.
include | `STRING` | Will include a sequence from `data/sequences/` folder.



### Available Variables

All sequence variable starts with `&`. When calling a function, make sure it contains a `=` before we set the variable.

Input                | Type     | Description
----------------------- | ---------------------------------------------------------------------------------
audio_target | `STRING` | Where we want the audio to play
audio_play | `STRING` | The audio we are going to play at the destination
hud.channel | `INT` | Channel to display our HUD parameter on
hud.effect | `INT` | Sets the effect type
hud.fadein | `FLOAT` | Fade in time, in seconds
hud.fadeout | `FLOAT` | Fade out time, in seconds
hud.holdTime | `FLOAT` | Text hold time, in seconds
hud.fxTime | `FLOAT` | Effect hold time, in seconds
hud.x | `FLOAT` | X Position on screen
hud.y | `FLOAT` | Y Position on screen
hud.r1 | `INT` | Text Red color range
hud.g1 | `INT` | Text Green color range
hud.b1 | `INT` | Text Blue color range
hud.a1 | `INT` | Text Alpha color range 
hud.r2 | `INT` | Effect Red color range
hud.g2 | `INT` | Effect Green color range
hud.b2 | `INT` | Effect Blue color range
hud.a2 | `INT` | Effect Alpha color range
hud.text | `STRING` | The text we want to draw from our HUD parameter



### Console Variable

Console Variable starts with `$`, and only executes console commands.
```
// Enables cheats
$sv_cheats 1
```



### Function Calls

All function calls starts with `@`. You cannot call a function within the same script, you can however call any function from `global.seq` and any function from a `#include` file.

Here is an example of how to call a function with arguments, and one without:
```
// These 2 functions are from global.seq
// VoiceComText with arguments
@VoiceComText( 1000, "-497.997 -9518 59.6777" )

// VoiceComText with no arguments
@VoiceComText()
```



### Available Types

Type                | Description
----------------------- | ---------------------------------------------------------------------------------
`!target` | Picks the entity from the `#target` command.
`!activator` | Picks the entity that activated the `logic_scene`.
`!caller` | Picks the entity that called the `logic_scene`.
`!picker` | Picks the character that `logic_scene` wants to use.
`random` | Grabs a random survivor. Will check if `#dlc_only` was applied before hand.
`eugene` | Grabs any player with `Eugene` character.
`marcus` | Grabs any player with `Marcus` character.
`nick` | Grabs any player with `Nick` character.
`tony` | Grabs any player with `Tony` character.
`jessica` | Grabs any player with `Jessica` character.
`nicole` | Grabs any player with `Nicole` character.
`ryan` | Grabs any player with `Ryan` character.
`lawrence` | Grabs any player with `Lawrence` character.
`mia` | Grabs any player with `Mia` character.
`manuel` | Grabs any player with `Manuel` character.
`curtis` | Grabs any player with `Curtis` character.
`yumi` | Grabs any player with `Yumi` character.
`mike` | Grabs any player with `Mike` character.
`diego` | Grabs any player with `Diego` character.
`elijah` | Grabs any player with `Elijah` character.
