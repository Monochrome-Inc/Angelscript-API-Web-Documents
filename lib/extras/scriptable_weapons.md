Introduction
============

Map and Plugins scripts can both use scriptable weapons. There are no restrictions, so feel free to make interesting to absurd weapons.

When it comes to custom weapons, make sure to at least include the base class **ScriptBase_Weapon**, else it won't register it as an actual weapon.

Scriptable weapons use **weapon_script** as a base. By default, it's using 1911 weapon script information, that is of course if it failed to read the [Weapon Information][GetWeaponInformation] class. For the default weapon script file, it can be found here: `data/weapons/weapon_script.txt`.


- - -

## Available function overrides

Function                | Description
----------------------- | ---------------------------------------------------------------------------------
[void GetWeaponInformation( WeaponInfo &out info )][GetWeaponInformation] | Applies the weapon information for the scriptable weapon
[void PrimaryAttack()][PrimaryAttack] | When the player tries to attack (Left Mouse button by default, +attack)
[void SecondaryAttack()][SecondaryAttack] | When the player tries to aim down the sights (Right Mouse button by default, +attack2)
[void MeleeAttack()][MeleeAttack] | When the player tries to melee attack
[void Precache()][Precache] | When we want to precache anything before we spawn the weapon
[void Spawn()][Spawn] | When the weapon gets created and spawned
[CTerrorPlayer@ GetPlayerOwner()][GetPlayerOwner] | Grabs the owner of the weapon, if there is any
[float GetFireRate()][GetFireRate] | Grabs the firerate of the weapon
[bool Reload( bool &in bEmpty )][Reload] | When the player tries to reload (New method, if it returns false, then the weapon won't execute default reload function)
[void Reload( bool &in bEmpty )][Reload] | When the player tries to reload
[void GetAnimationEvent( int& in iEvent )][GetAnimationEvent] | Fires when our weapon wants to fire a specific event, such as muzzle flash, for example.


- - -

## Weapon Example

This Glock18c example is ported from Zombie Panic! Source. You can use this code as an example, but don't forget to check the API for more information.

The example also includes the required wwise sound bank and textures for the example weapon. You can also see a code preview below, if you want to take a peek at the code without downloading the example.

[Download Example](extras/zps_glock18c_addon_example.zip)

Code Preview:
```
class CScriptWeaponGlock : ScriptBase_Weapon
{
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

	void Spawn()
	{
		self.SetMeleeDamage( 25 );
		self.SetClipSize( 17 );
		self.SetAmmoType( AMMO_PISTOL );
		self.SetAllowUnderWater( false );
		self.SetIsHeavy( false );
		// Allow attachments
		self.SetAllowAttachmentDrop( true );
		// The model has a silencer attachment, so let's make sure we register it.
		self.SetAttachment( k_eSilencer, false );	// false = no silencer by default
		self.SetAttachment( k_eFlashlight, true );
	}

	// Precache the files, so we don't crash the server,
	// and so that clients can download these.
	void Precache()
	{
		// Wwise uses soundbank, Steam Audio uses sound
		Engine.PrecacheFile( soundbank, "auto/zps_glock18c.txt" );
		Engine.PrecacheFile( soundbank, "zps_glock18c.bnk" );

		// Reads from data/weapons
		Engine.PrecacheFile( hud, "weapon_glock.txt" );
		Engine.PrecacheFile( hud, "scripts/weapon_glock.txt" );	

		// We just need the .mdl path.
		Engine.PrecacheFile( model, "models/weapons/v_glock18c/v_glock18c.mdl" );
		Engine.PrecacheFile( model, "models/weapons/w_models/w_glock18c/w_glock18c.mdl" );

		// Ditto, It's the same for .vmt files.
		Engine.PrecacheFile( material, "weapons/v_glock18c/frame" );
		Engine.PrecacheFile( material, "weapons/v_glock18c/slide" );
	}

	// Override PrimaryAttack with our own function
	void PrimaryAttack()
	{
		if ( self.m_iClip <= 0 )
		{
			self.WeaponSound( "Weapon_M1911_FireEmpty" );
			self.SendWeaponAnim( ACT_VM_DRYFIRE );
			self.m_flNextPrimaryAttack = Globals.GetCurrentTime() + 0.8;
			self.SetWeaponIdleTime( self.m_flNextPrimaryAttack );
			return;
		}
		self.m_iClip--;

		// Our amount of bullets to decrease
		self.FireBullets();
		// If silencer, use this: Weapon_Glock18c_Fire_Silencer
		bool bSilencer = false;
		self.HasAttachment( k_eSilencer, bSilencer );
		self.WeaponSound( bSilencer ? "Weapon_Glock18c_Fire_Silencer" : "Weapon_Glock18c_Fire" );
		self.SendWeaponAnim( PLAYERANIMEVENT_ATTACK_PRIMARY, ACT_VM_PRIMARYATTACK );

		// Set the new timer
		self.m_flNextPrimaryAttack = Globals.GetCurrentTime() + self.GetFireRate();
		self.SetWeaponIdleTime( self.m_flNextPrimaryAttack );
	}

	// New method.
	// false = STOP (does not call base reload function)
	// true = CONTINUE (will use default reload function)
	bool Reload(bool &in bEmpty)
	{
		if ( self.GetAmmoCount() <= 0 ) return false;
		if ( bEmpty )
			self.WeaponSound( "Weapon_Sig_ReloadEmpty" );
		else
			self.WeaponSound( "Weapon_Sig_Reload" );
		return true;
	}

	void GetAnimationEvent( int &in event )
	{
	}
}

void OnPluginInit()
{
	RegisterGlock();
}

void ThePresident_OnMapStart()
{
	RegisterGlock();
}

void RegisterGlock()
{
	// Register our weapon
	EntityCreator::RegisterCustomWeapon( "weapon_glock", "CScriptWeaponGlock" );
}
```