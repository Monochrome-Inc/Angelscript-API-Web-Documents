Introduction
============

Only Plugins and Core scripts can both use scriptable gamemodes. There are no restrictions, but make sure to always register the gamemode each time the level starts. As all gamemodes gets automatically purged on level shutdown.

When it comes to custom gamemodes, make sure to at least include the base class **ScriptBase_GameMode**, else it won't register it as an actual gamemode script.

Do remember that only the core scripts (`core.as`) and plugins can register custom gamemodes before the map starts. So for plugins, make sure to use the global function `On PreLevelInit()` to properly load your custom gamemode.

- - -

## Example GameMode
```
class CMyTestGameMode : ScriptBase_GameMode
{
	float m_OnLastUpdate;

	void OnGameModeDestroyed()
	{
		Log.PrintToServerConsole( LOGTYPE_INFO, "[OnGameModeDestroyed]" );
	}

	void OnNewGame()
	{
		Log.PrintToServerConsole( LOGTYPE_INFO, "[OnNewGame]" );
		m_OnLastUpdate = Globals.GetCurrentTime();
	}

	void OnEndGame()
	{
		Log.PrintToServerConsole( LOGTYPE_INFO, "[OnEndGame]" );
	}

	void OnNoSurvivorsLeft()
	{
		Log.PrintToServerConsole( LOGTYPE_INFO, "[OnNoSurvivorsLeft]" );
	}

	void OnReset()
	{
		Log.PrintToServerConsole( LOGTYPE_INFO, "[OnReset]" );
	}

	void OnUpdate()
	{
		if ( Globals.GetCurrentTime() > m_OnLastUpdate )
		{
			Log.PrintToServerConsole( LOGTYPE_INFO, "[OnUpdate]" );
			m_OnLastUpdate = Globals.GetCurrentTime() + 5;
		}
	}

	void OnPostNewRound()
	{
		Log.PrintToServerConsole( LOGTYPE_INFO, "[OnPostNewRound]" );
	}

	void OnNewRound()
	{
		Log.PrintToServerConsole( LOGTYPE_INFO, "[OnNewRound]" );
	}

	void OnEndRound()
	{
		Log.PrintToServerConsole( LOGTYPE_INFO, "[OnEndRound]" );
	}

	void OnCustomConfig()
	{
		Log.PrintToServerConsole( LOGTYPE_INFO, "[OnCustomConfig]" );
	}

	void OnEvent( ASGameEvent &in event, bool &in bClientsided )
	{
		Log.PrintToServerConsole( LOGTYPE_INFO, "[OnEvent]" );
	}

	void OnZombieSpawn( Infected @pInfected )
	{
		Log.PrintToServerConsole( LOGTYPE_INFO, "[OnZombieSpawn >> Infected]" );
	}

	void OnZombieSpawn( CTerrorPlayer @pTerror )
	{
		Log.PrintToServerConsole( LOGTYPE_INFO, "[OnZombieSpawn >> CTerrorPlayer]" );
	}

	void OnZombieDeath( Infected @pInfected )
	{
		Log.PrintToServerConsole( LOGTYPE_INFO, "[OnZombieDeath >> Infected]" );
	}

	void OnZombieDeath( Infected @pInfected, const CTakeDamageInfo &in inf )
	{
		Log.PrintToServerConsole( LOGTYPE_INFO, "[OnZombieDeath >> Infected >> CTakeDamageInfo]" );
	}

	void OnZombieDeath( CTerrorPlayer @pTerror )
	{
		Log.PrintToServerConsole( LOGTYPE_INFO, "[OnZombieDeath >> CTerrorPlayer]" );
	}

	void OnSurvivorSpawn( Survivor @pSurvivor )
	{
		Log.PrintToServerConsole( LOGTYPE_INFO, "[OnSurvivorSpawn >> Survivor]" );
	}

	void OnSurvivorSpawn( CTerrorPlayer @pTerror )
	{
		Log.PrintToServerConsole( LOGTYPE_INFO, "[OnSurvivorSpawn >> CTerrorPlayer]" );
	}

	void OnSurvivorDeath( Survivor @pSurvivor )
	{
		Log.PrintToServerConsole( LOGTYPE_INFO, "[OnSurvivorDeath >> Survivor]" );
	}

	void OnSurvivorDeath( CTerrorPlayer @pTerror )
	{
		Log.PrintToServerConsole( LOGTYPE_INFO, "[OnSurvivorDeath >> CTerrorPlayer]" );
	}

	void OnClientConnect( CTerrorPlayer @pTerror )
	{
		Log.PrintToServerConsole( LOGTYPE_INFO, "[OnClientConnect >> CTerrorPlayer]" );
	}

	void OnClientDisconnect( CTerrorPlayer @pTerror )
	{
		Log.PrintToServerConsole( LOGTYPE_INFO, "[OnClientDisconnect >> CTerrorPlayer]" );
	}

	int GetConstantSpawnFlags()
	{
		return ZSF_DEFAULT;
	}
}

// Let's register our gamemode.
// If used by plugins, make sure we reload the map.
void AddGameModeToMemory()
{
	// Register our test gamemode
	EntityCreator::RegisterCustomGameMode( "CMyTestGameMode", "zpo" );
}
```