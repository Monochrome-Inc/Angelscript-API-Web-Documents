Example:
```cpp
// 根据类名查找实体，然后将其删除
string strName = "my_target_name";
CBaseEntity @pEnt = FindEntityByName( null, strName );
while( pEnt !is null )
{
	// 删除
	pEnt.SUB_Remove();
	// 查找新实体
	@pEnt = FindEntityByName( pEnt, strName );
}

// 非循环版本
CBaseEntity @pEnt = FindEntityByName( strName );
if ( pEnt !is null )
	pEnt.SUB_Remove();
```
