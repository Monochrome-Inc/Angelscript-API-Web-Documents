使用举例  
```cpp
CEntityData@ inputdata = EntityCreator::EntityData();
inputdata.Add( "targetname", "foobar" );
inputdata.Add( "spawnflags", "8192" );
inputdata.Add( "skin", "2" );
inputdata.Add( "model", "models/props_doors/door_metal.mdl" );

// 生成后，让我们调用一些输入值
inputdata.Add( "SetBreakable", "1", true );
inputdata.Add( "SetHealth", "100", true, "1.0" );

// 生成我们的实体
CBaseEntity @pEntity = EntityCreator::Create( "prop_door_rotating", Vector( 0, 0, 0 ), QAngle( 0, 0, 0 ), inputdata );
```

