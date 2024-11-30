例如
```cpp
CASConVar@ pConVarTest = null;

void OnPluginInit()
{
	@pConVarTest = ConVar::Create( "as_custom_convar", "10", "This is an example test var" );
}

void OnPluginUnload()
{
	// 通过对象删除
	ConVar::Remove( pConVarTest );
	// 通过控制台删除
	ConVar::Remove( "as_custom_convar" );
}

```
