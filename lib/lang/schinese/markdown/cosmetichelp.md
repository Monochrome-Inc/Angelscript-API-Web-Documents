化妆品对玩家和受感染的人工智能都有效。

使用举例
```cpp
Utils.CosmeticWear( pTerror, "models/christmas/w_head_santahat.mdl" );
Utils.CosmeticWear( pInfected, "models/halloween/w_zombie_christmas_hat/w_zombie_christmas_hat.mdl" );

if ( Utils.CosmeticRemove( pTerror, "models/christmas/w_zombie_christmas_hat/w_zombie_christmas_hat.mdl" ) )
{
	// 如果为真，我们在这里做一些事情
}
```

