Example:
```cpp
// Find entity by classname, and then remove it
string strName = "my_target_name";
CBaseEntity @pEnt = FindEntityByName( null, strName );
while( pEnt !is null )
{
	// Remove it
	pEnt.SUB_Remove();
	// Find new entity
	@pEnt = FindEntityByName( pEnt, strName );
}

// Non loop version
CBaseEntity @pEnt = FindEntityByName( strName );
if ( pEnt !is null )
	pEnt.SUB_Remove();
```
