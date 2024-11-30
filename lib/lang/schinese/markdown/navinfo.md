Example:
```cpp
// 抓取播放器索引 1
CTerrorPlayer @pTerror = ToTerrorPlayer( 1 );
if ( pTerror is null ) return;
// 如果播放器存在，则抓取其当前导航信息（如果有效）。
NavInfo nav = pTerror.GetNavInformation();
Chat.PrintToChat( all, "{limegreen}ID: {gold}" + nav.id );	// 我们的导航 ID。如果是-1，则为无效。
Chat.PrintToChat( all, "{limegreen}NAME: {gold}" + nav.name );	// 导航的名称。由人口数据使用。
Chat.PrintToChat( all, "{limegreen}Has Elevator: {gold}" + nav.has_elevator );	// 如果导航位于 func_elevator 上，则返回 true
Chat.PrintToChat( all, "{limegreen}Elevator Index: {gold}" + nav.elevator_entindex );	// 电梯的实体索引（如果有效）。如果无效，则返回-1。
```
