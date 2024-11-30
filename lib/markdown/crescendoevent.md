Example:
```
void ThePresident_OnMapStart()
{
	// Create our crescendo event.
	CrescendoEventType event;
	event.ID = 0;										// Event ID
	event.CurrentWave = 0;								// The current wave (automatically gets set to 0 on start)
	event.ZombieTrigger = "zspawn_wave";				// The trigger should we spawn the zombies at
	event.ZombiesToSpawn = 5;							// The amount of zombies to spawn
	event.DelayTime = Globals.GetCurrentTime() + 10.0f;	// When the event should start
	event.NextWave = 60.0f;								// The next wave time
	event.MaxWaves = -1;								// Maximum amount of waves. Infinite waves is 0 or -1
	event.Silent = true;								// If true, when the event starts, we will not send the UserMessage
	event.NoBGM = false;								// If true, we will use "CrescendoNoBGM" instead of "Crescendo" UserMessage
	event.NoRunners = false;							// If true, we will not spawn any runners
	Utils.CrescendoEvent( event );
}

void OnCrescendoWaveStart( CrescendoEventType &out event )
{
	if ( event.CurrentWave == 2 )
	{
		// ...
	}
	// ...
}
```

- - -

## CrescendoEvent Types

Function                | Name | Description
----------------------- | ---- |---------------------------------------------------------------------------------
`float` | `DelayTime` | When the event should start
`float` | `NextWave` | The next wave time
`int` | `ID` | Event ID
`int` | `CurrentWave` | The current wave
`int` | `MaxWaves` | Maximum amount of waves. Infinite waves is 0 or -1
`int` | `ZombiesToSpawn` | The amount of zombies to spawn
`bool` | `Silent` | If true, when the event starts, we will not send the UserMessage
`bool` | `NoBGM` | If true, we will use "CrescendoNoBGM" instead of "Crescendo" UserMessage
`bool` | `NoRunners` | If true, we will not spawn any runners
`string` | `ZombieTrigger` | The trigger should we spawn the zombies at

