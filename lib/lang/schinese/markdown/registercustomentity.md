Example of usage:
```cpp
// 使用类注册一个实体： ScriptBase_Weapon
EntityCreator::RegisterCustomEntity( k_eCustomWeapon, "weapon_glock", "CScriptWeaponGlock" );

// 使用类注册一个实体： ScriptBase_PointEntity
EntityCreator::RegisterCustomEntity( k_eCustomPointClass, "custom_as_ent_point", "CScriptCustomPointEntity" );

// 使用类注册一个实体： ScriptBase_Entity
EntityCreator::RegisterCustomEntity( k_eCustomEntity, "custom_as_ent", "CScriptCustomEntity" );

// 使用类注册一个实体： ScriptBase_NextBot
EntityCreator::RegisterCustomEntity( k_eCustomNextBot, "custom_as_npc", "CScriptCustomNextBotEntity" );
```

