```cpp
// 抓取我们的网络 “Example”
CNetworked@ pNetworked = Network::Get( "Example" );

// 检查是否有效
if ( pNetworked !is null )
	Network::Dump( pNetworked );
```
