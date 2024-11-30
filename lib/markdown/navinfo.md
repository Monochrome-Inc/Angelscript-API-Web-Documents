Example:
```cpp
// Grab player index 1
CTerrorPlayer @pTerror = ToTerrorPlayer( 1 );
if ( pTerror is null ) return;
// If the player exist, grab their current navigation information, if it's valid.
NavInfo nav = pTerror.GetNavInformation();
Chat.PrintToChat( all, "{limegreen}ID: {gold}" + nav.id );	// Our navigation ID. If it's -1, then its an invalid one.
Chat.PrintToChat( all, "{limegreen}NAME: {gold}" + nav.name );	// The name of the nav. Used by population data.
Chat.PrintToChat( all, "{limegreen}Has Elevator: {gold}" + nav.has_elevator );	// Returns true if this nav is on a func_elevator
Chat.PrintToChat( all, "{limegreen}Elevator Index: {gold}" + nav.elevator_entindex );	// The entity index of the elevator, if valid. Returns -1 if invalid.
```
