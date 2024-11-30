例如
```
void ThePresident_OnMapStart()
{
	// 创建渐强事件。
	CrescendoEventType event;
	event.ID = 0;										// 事件 ID
	event.CurrentWave = 0;								// 当前波形（启动时自动设置为 0）
	event.ZombieTrigger = "zspawn_wave";				// 我们应该在哪个触发点催生僵尸？
	event.ZombiesToSpawn = 5;							// 僵尸的数量
	event.DelayTime = Globals.GetCurrentTime() + 10.0f;	// 活动何时开始
	event.NextWave = 60.0f;								// 下一波时间
	event.MaxWaves = -1;								// 最大波数。无限波为 0 或 -1
	event.Silent = true;								// 如果为 true，当事件开始时，我们将不发送 “用户消息”。
	event.NoBGM = false;								// 如果为 true，我们将使用 “CrescendoNoBGM”，而不是 “Crescendo” UserMessage
	event.NoRunners = false;							// 如果为 true，我们将不产生任何跑步者
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

## CrescendoEvent 类型

功能                | 名称 | 说明
----------------------- | ---- |---------------------------------------------------------------------------------
`float` | `DelayTime` | 活动何时开始
`float` | `NextWave` | 下一波时间
`int` | `ID` | 事件 ID
`int` | `CurrentWave` | 当前的浪潮
`int` | `MaxWaves` | 最大波数。无限波为 0 或 -1
`int` | `ZombiesToSpawn` | 僵尸的数量
`bool` | `Silent` | 如果为 “true”，当事件开始时，我们将不发送 “用户消息”。
`bool` | `NoBGM` | 如果为 true，我们将使用 “CrescendoNoBGM”，而不是 “Crescendo” UserMessage
`bool` | `NoRunners` | 如果为 “true”，我们将不产生任何跑步者
`string` | `ZombieTrigger` | 我们应该在哪个触发点催生僵尸？

