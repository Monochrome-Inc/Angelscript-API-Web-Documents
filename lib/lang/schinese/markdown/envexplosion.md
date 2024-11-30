函数 `Utils.EnvExplosion` 也可用于 [CBaseEntity@][CBaseEntity]，而不是向量 `vecOrigin`。

使用示例  
```cpp
Utils.EnvExplosion( pEntity, 450 );
Utils.EnvExplosion( pEntity, 450, 600 ); // 新范围
Utils.EnvExplosion( pEntity, 450, 600, "ValveBiped.Bip01_Pelvis" ); // 新范围和新原点爆炸点
```

