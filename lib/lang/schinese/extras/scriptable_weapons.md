导言
============

地图和插件脚本均可使用可编写脚本的武器。没有任何限制，因此可以随意制作有趣而荒诞的武器。

说到自定义武器，请确保至少包含基类 **ScriptBase_Weapon**，否则它不会将其注册为真正的武器。

可编写脚本的武器使用 **weapon_script** 作为基础。默认情况下，它使用的是 1911 武器脚本信息，当然前提是它没有读取到 [武器信息][GetWeaponInformation] 类。默认的武器脚本文件可在此处找到： data/weapons/weapon_script.txt`。


- - -

## 可用的重载功能

功能                | 说明
----------------------- | ---------------------------------------------------------------------------------
[void GetWeaponInformation( WeaponInfo &out info )][GetWeaponInformation] | 为可编写脚本的武器应用武器信息
[void PrimaryAttack()][PrimaryAttack] | 玩家尝试攻击时（默认情况下按鼠标左键，+attack）
[void SecondaryAttack()][SecondaryAttack] | 当玩家尝试向下瞄准时（默认情况下按鼠标右键，+attack2）
[void MeleeAttack()][MeleeAttack] | 当玩家尝试近战攻击时
[void Precache()][Precache] | 当我们想在生成武器之前预缓存任何东西时
[void Spawn()][Spawn] | 创建和生成武器时
[CTerrorPlayer@ GetPlayerOwner()][GetPlayerOwner] | 抓住武器的主人（如果有的话）
[float GetFireRate()][GetFireRate] | 获取武器的射速
[bool Reload( bool &in bEmpty )][Reload] | 当玩家尝试重新加载时（新方法，如果返回 false，则武器不会执行默认的重新加载功能）
[void Reload( bool &in bEmpty )][Reload] | 当玩家尝试重新加载
[void GetAnimationEvent( int& in iEvent )][GetAnimationEvent] | 当我们的武器想要发射特定事件（例如枪口闪光）时触发。


- - -

## 武器示例

此 Glock18c 示例移植自《僵尸惊魂》！源移植而来。源中移植的。您可以将此代码用作示例，但不要忘了查看 API 以获取更多信息。

该示例还包括所需的 wwise 声音库和示例武器的纹理。如果您想在不下载示例的情况下查看代码，也可以在下面查看代码预览。

[下载示例](extras/zps_glock18c_addon_example.zip)

代码预览：
```
class CScriptWeaponGlock : ScriptBase_Weapon
{
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

	void Spawn()
	{
		self.SetMeleeDamage( 25 );
		self.SetClipSize( 17 );
		self.SetAmmoType( AMMO_PISTOL );
		self.SetAllowUnderWater( false );
		self.SetIsHeavy( false );
		// 允许添加附件
		self.SetAllowAttachmentDrop( true );
		// 该模型有一个消音器附件，因此我们要确保对其进行注册。
		self.SetAttachment( k_eSilencer, false );	// false = no silencer by default
		self.SetAttachment( k_eFlashlight, true );
	}

	// 预缓存文件，以免服务器崩溃、
	// 这样客户端就能下载这些文件。
	void Precache()
	{
		// Wwise 使用声音库，Steam Audio 使用声音
		Engine.PrecacheFile( soundbank, "auto/zps_glock18c.txt" );
		Engine.PrecacheFile( soundbank, "zps_glock18c.bnk" );

		// 读取数据/武器
		Engine.PrecacheFile( hud, "weapon_glock.txt" );
		Engine.PrecacheFile( hud, "scripts/weapon_glock.txt" );	

		// 我们只需要 .mdl 路径。
		Engine.PrecacheFile( model, "models/weapons/v_glock18c/v_glock18c.mdl" );
		Engine.PrecacheFile( model, "models/weapons/w_models/w_glock18c/w_glock18c.mdl" );

		// 同上，.vmt 文件也是如此。
		Engine.PrecacheFile( material, "weapons/v_glock18c/frame" );
		Engine.PrecacheFile( material, "weapons/v_glock18c/slide" );
	}

	// 用我们自己的函数覆盖 PrimaryAttack
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

		// 我们的子弹数量将减少
		self.FireBullets();
		// 如果使用消音器，请使用此功能： Weapon_Glock18c_Fire_Silencer
		bool bSilencer = false;
		self.HasAttachment( k_eSilencer, bSilencer );
		self.WeaponSound( bSilencer ? "Weapon_Glock18c_Fire_Silencer" : "Weapon_Glock18c_Fire" );
		self.SendWeaponAnim( PLAYERANIMEVENT_ATTACK_PRIMARY, ACT_VM_PRIMARYATTACK );

		// 设置新的计时器
		self.m_flNextPrimaryAttack = Globals.GetCurrentTime() + self.GetFireRate();
		self.SetWeaponIdleTime( self.m_flNextPrimaryAttack );
	}

	// 新方法。
	// false = STOP（不调用基本重载函数）
	// true = CONTINUE（将使用默认重载函数）
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
	// 注册我们的武器
	EntityCreator::RegisterCustomWeapon( "weapon_glock", "CScriptWeaponGlock" );
}
```