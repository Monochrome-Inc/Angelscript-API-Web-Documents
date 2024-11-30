Example:
```cpp
CASConVar@ pConVarTest = null;

void OnPluginInit()
{
	@pConVarTest = ConVar::Create( "as_custom_convar", "10", "This is an example test var" );
}

void OnPluginUnload()
{
	// Remove via object
	ConVar::Remove( pConVarTest );
	// Remove via console var
	ConVar::Remove( "as_custom_convar" );
}

```
