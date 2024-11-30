```cpp
// 创建名为 “示例 ”的网络，并确保不会在地图变更时将其销毁。
// 但是，如果它已经存在，则会直接抓取现有的网络。
CNetworked@ pNetworked = Network::Create( "Example", false );
```
