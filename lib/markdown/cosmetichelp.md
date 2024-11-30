Cosmetics works both on players and Infected AI.

Example of usage:
```cpp
Utils.CosmeticWear( pTerror, "models/christmas/w_head_santahat.mdl" );
Utils.CosmeticWear( pInfected, "models/halloween/w_zombie_christmas_hat/w_zombie_christmas_hat.mdl" );

if ( Utils.CosmeticRemove( pTerror, "models/christmas/w_zombie_christmas_hat/w_zombie_christmas_hat.mdl" ) )
{
	// If true, we do something here
}
```

