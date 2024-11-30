Introduction
============

Welcome to the Contagion Angelscript API documentation!

This will help you creating Angelscript plugins for Contagion for use in servers as well as maps.

We provide some code examples in the dark area to the right whenever we feel it's needed.

Keep in mind that this is an **API documentation, not an Angelscript scripting manual/tutorial**. If you are not familiar with Angelscript and/or you need to brush up your knowledge, please consult it's [scripting manual](http://www.angelcode.com/angelscript/sdk/docs/manual/doc_script.html) first before proceeding.

Like always, we are open to comments, suggestions and potential fixes we can make to this API documentation. The best place to do this would be on our `#contagion-modding` channel on our [Discord server](https://discord.gg/monochrome).

Have fun scripting!

- - -

## Available Angelscript commands

To access these commands, make sure the player has the admin access rights of [LEVEL_ADMIN][AdminAccessLevel_t] or higher.
Command                 | Description                                                                      | Dedicated Server Only
----------------------- | ---------------------------------------------------------------------------------|-----------------------------
cg_angelscript_debug    | Enable angelscript debug?                                                        | **Yes**
as_log                  | Logs angelscript related errors an issues (will save the logs to logs/angelscript.log)       | **No**
as_listplugins          | List all server side Angelscript plugins.                                        | **No**
as_reloadplugin         | Reload a specific server side Angelscript plugin.                                | **No**
as_loadplugin           | Load a specific server side Angelscript plugin.                                  | **No**
as_unloadplugin         | Unload a specific server side Angelscript plugin.                                | **No**
as_reloadallplugins     | Reload all server side Angelscript plugins.                                      | **No**
as_unloadallplugins     | Unload all server side Angelscript plugins.                                      | **No**
as_processpluginevents  | Processes server side Angelscript plugins's events.                              | **No**

- - -

## Global Properties
```cpp
int TEAM_ANY;
int TEAM_INVALID;				// Same as TEAM_ANY
int TEAM_SPECTATOR;
int TEAM_SURVIVOR;
int TEAM_ZOMBIE;
int TEAM_L4D1_SURVIVOR;			// Unused

int HITGROUP_GENERIC;
int HITGROUP_HEAD;
int HITGROUP_CHEST;
int HITGROUP_STOMACH;
int HITGROUP_LEFTARM;
int HITGROUP_RIGHTARM;
int HITGROUP_LEFTLEG;
int HITGROUP_RIGHTLEG;
int HITGROUP_LEFTARML;
int HITGROUP_RIGHTARML;
int HITGROUP_LEFTLEGL;
int HITGROUP_RIGHTLEGL;

// Button inputs.
int IN_ATTACK;
int IN_JUMP;
int IN_DUCK;
int IN_FORWARD;
int IN_BACK;
int IN_USE;
int IN_CANCEL;
int IN_LEFT;
int IN_RIGHT;
int IN_MOVELEFT;
int IN_MOVERIGHT;
int IN_ATTACK2;					// Secondary attack + ironsights press.
int IN_RUN;
int IN_RELOAD;
int IN_ALT1;
int IN_ALT2;
int IN_SCORE;					// Used by client.dll for when scoreboard is held down
int IN_SPEED;					// Player is holding the speed key
int IN_WALK;					// Player holding walk key
int IN_UNLOAD;					// Unloads the weapon
int IN_WEAPON1;					// weapon defines these bits
int IN_WEAPON2;					// weapon defines these bits
int IN_VOICECMDS;
int IN_VALIDVGUIINPUT;			//bitflag for vgui fix
int IN_ATTACHMENT;
int IN_LOOKSPIN;
int IN_MELEE;					// Melee attack!
int IN_IRONSIGHTS;				// Ironsights hold toggle.
int IN_SHOWCONTROLS;			// Show the quick conrols menu.

int SURVIVOR_EUGENE;			// Survivor ID: 0
int SURVIVOR_MARCUS;			// Survivor ID: 1
int SURVIVOR_NICK;				// Survivor ID: 2
int SURVIVOR_TONY;				// Survivor ID: 3
int SURVIVOR_JESSICA;			// Survivor ID: 4
int SURVIVOR_NICOLE;			// Survivor ID: 5
int SURVIVOR_RYAN;				// Survivor ID: 6
int SURVIVOR_LAWRENCE;			// Survivor ID: 7
int SURVIVOR_MIA;				// Survivor ID: 8
int SURVIVOR_MANUEL;			// Survivor ID: 9
int SURVIVOR_CURTIS;			// Survivor ID: 10
int SURVIVOR_YUMI;				// Survivor ID: 11
int SURVIVOR_MIKE;				// Survivor ID: 12
int SURVIVOR_DIEGO;				// Survivor ID: 13

int FCAP_IMPULSE_USE;			// can be used by the player
int FCAP_CONTINUOUS_USE;		// can be used by the player
int FCAP_ONOFF_USE;				// can be used by the player
int FCAP_DIRECTIONAL_USE;		// Player sends +/- 1 when using (currently only tracktrains)
int FCAP_USE_ONGROUND;			// NOTE: Normally +USE only works in direct line of sight.  Add these caps for additional searches
int FCAP_USE_IN_RADIUS;			// NOTE: Normally +USE only works in direct line of sight.  Add these caps for additional searches
int FCAP_USE_HELPING_HAND;		// L4D helping hand
int FCAP_USEABLE_BY_INFECTED;	// can be used by infected
int FCAP_ENABLE_GLOW;			// Object can show the +use glow effect

int EF_BONEMERGE;				// Performs bone merge on client side
int EF_BRIGHTLIGHT;				// DLIGHT centered at entity origin
int EF_DIMLIGHT;				// player flashlight
int EF_NOINTERP;				// don't interpolate the next frame
int EF_NOSHADOW;				// Don't cast no shadow
int EF_NODRAW;					// don't draw entity
int EF_NORECEIVESHADOW;			// Don't receive no shadow
int EF_BONEMERGE_FASTCULL;		// For use with EF_BONEMERGE. If this is set, then it places this ent's origin at its
								// parent and uses the parent's bbox + the max extents of the aiment.
								// Otherwise, it sets up the parent's bones every frame to figure out where to place
								// the aiment, which is inefficient because it'll setup the parent's bones even if
								// the parent is not in the PVS.
int EF_ITEM_BLINK;				// blink an item so that the user notices it.
int EF_PARENT_ANIMATES;			// always assume that the parent entity is animating
```

- - -

## Available Angelscript Addons

Addon                   | Description
----------------------- | ---------------------------------------------------------------------------------
[string](manual/doc_script_stdlib_string.html)                  | The string object supports a number of operators, and has several class methods and supporting global functions to facilitate the manipulation of strings.
[array](manual/doc_datatypes_arrays.html)                   | The array object supports a number of operators and has several class methods to facilitate the manipulation of strings.
[dictionary](manual/doc_datatypes_dictionary.html)              | The dictionary object is a reference type, so it's possible to use handles to the dictionary object when passing it around to avoid costly copies.
[datetime](manual/doc_script_stdlib_datetime.html)                | The datetime type represents a calendar date and time. It can be used to do math operations with dates, such as comparing two dates, determining the difference between dates, and addition/substraction on dates to form new dates.

