Example:
```cpp
// Find entity by classname, and then remove it
string strClassname = "weapon_sig";
CBaseEntity @pEnt = FindEntityByClassname( null, strClassname );
while( pEnt !is null )
{
	// Remove it
	pEnt.SUB_Remove();
	// Find new entity
	@pEnt = FindEntityByClassname( pEnt, strClassname );
}

// Non loop version
CBaseEntity @pEnt = FindEntityByClassname( strName );
if ( pEnt !is null )
	pEnt.SUB_Remove();
```
