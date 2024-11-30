The function `Utils.EnvExplosion` can also be used for [CBaseEntity@][CBaseEntity] instead of a Vector `vecOrigin`.

Example of usage:  
```cpp
Utils.EnvExplosion( pEntity, 450 );
Utils.EnvExplosion( pEntity, 450, 600 ); // New range
Utils.EnvExplosion( pEntity, 450, 600, "ValveBiped.Bip01_Pelvis" ); // New range and new origin explosion point
```

