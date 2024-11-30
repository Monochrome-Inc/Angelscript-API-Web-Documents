Example:
```cpp
// 根据类名查找实体，然后将其删除
string strClassname = "weapon_sig";
CBaseEntity @pEnt = FindEntityByClassname( null, strClassname );
while( pEnt !is null )
{
	// 删除
	pEnt.SUB_Remove();
	// 查找新实体
	@pEnt = FindEntityByClassname( pEnt, strClassname );
}

// 非循环版本
CBaseEntity @pEnt = FindEntityByClassname( strName );
if ( pEnt !is null )
	pEnt.SUB_Remove();
```
