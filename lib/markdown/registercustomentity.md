Example of usage:
```cpp
// Register an entity using class: ScriptBase_Weapon
EntityCreator::RegisterCustomEntity( k_eCustomWeapon, "weapon_glock", "CScriptWeaponGlock" );

// Register an entity using class: ScriptBase_PointEntity
EntityCreator::RegisterCustomEntity( k_eCustomPointClass, "custom_as_ent_point", "CScriptCustomPointEntity" );

// Register an entity using class: ScriptBase_Entity
EntityCreator::RegisterCustomEntity( k_eCustomEntity, "custom_as_ent", "CScriptCustomEntity" );

// Register an entity using class: ScriptBase_NextBot
EntityCreator::RegisterCustomEntity( k_eCustomNextBot, "custom_as_npc", "CScriptCustomNextBotEntity" );
```

