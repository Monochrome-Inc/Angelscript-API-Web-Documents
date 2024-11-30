Example:
```cpp
void GetWeaponInformation( WeaponInfo& out info )
{
	info.szResFile				= "weapon_glock";											// Our weapon resource file
	info.szPrintName			= "GLOCK 18C";												// Our weapon name
	info.szIconName				= "glock18c";												// Our weapon icon (read from the res file)
	info.szIconNameSB			= "glock18c_sb";											// Our weapon icon for Scoreboard (read from the res file)
	info.szWeaponModel_V		= "models/weapons/v_glock18c/v_glock18c.mdl";				// Our weapon model (view)
	info.szWeaponModel_W		= "models/weapons/w_models/w_glock18c/w_glock18c.mdl";		// Our weapon model (world)
	// Particles
	info.szMuzzleFlash_V		= "weapon_muzzle_flash_pistol_FP";
	info.szMuzzleFlash_W		= "weapon_muzzle_flash_pistol";
	info.szEjectBrass			= "weapon_shell_casing_9mm";
	// Melee sound events
	info.szSndMelee				= "Weapon_M1911_MeleeMiss";
	info.szSndMeleeHit			= "Weapon_M1911_MeleeHit";
	info.szSndMeleeHitWorld		= "Weapon_M1911_MeleeHitWorld";
}
```
