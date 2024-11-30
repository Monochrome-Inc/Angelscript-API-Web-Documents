Example:
```cpp
// 永久封禁玩家
Ban( pPlayer, 0, "永久禁令！" );

// 封禁玩家 3 分钟
Ban( pPlayer, 3, "临时禁令。" );

// SteamID 封禁
Ban( "STEAM_0:1:1", 3, "通过 SteamID 被禁用。" );
Ban( "[U:1:3]", 3, "通过 SteamID3 被禁用。" );
Ban( "76561197960265731", 3, "通过 SteamID64 被禁用。" );
```
