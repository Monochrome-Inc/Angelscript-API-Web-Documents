Example:
```cpp
void GetWeaponInformation( WeaponInfo& out info )
{
	info.szResFile				= "weapon_glock";											// 我们的武器资源文件
	info.szPrintName			= "GLOCK 18C";												// 我们的武器名称
	info.szIconName				= "glock18c";												// 我们的武器图标（从 res 文件读取）
	info.szIconNameSB			= "glock18c_sb";											// 我们的记分板武器图标（从 res 文件读取）
	info.szWeaponModel_V		= "models/weapons/v_glock18c/v_glock18c.mdl";				// 我们的武器模型（视图）
	info.szWeaponModel_W		= "models/weapons/w_models/w_glock18c/w_glock18c.mdl";		// 我们的武器模型（世界）
	// 粒子
	info.szMuzzleFlash_V		= "weapon_muzzle_flash_pistol_FP";
	info.szMuzzleFlash_W		= "weapon_muzzle_flash_pistol";
	info.szEjectBrass			= "weapon_shell_casing_9mm";
	// 近战声音事件
	info.szSndMelee				= "Weapon_M1911_MeleeMiss";
	info.szSndMeleeHit			= "Weapon_M1911_MeleeHit";
	info.szSndMeleeHitWorld		= "Weapon_M1911_MeleeHitWorld";
}
```
