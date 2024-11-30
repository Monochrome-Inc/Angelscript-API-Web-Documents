Example:
```cpp
// Permanently bans the player
Ban( pPlayer, 0, "Permanent Ban!" );

// Bans the player for 3 minutes
Ban( pPlayer, 3, "Temporary Ban." );

// SteamID bans
Ban( "STEAM_0:1:1", 3, "Banned trough SteamID." );
Ban( "[U:1:3]", 3, "Banned trough SteamID3." );
Ban( "76561197960265731", 3, "Banned trough SteamID64." );
```
