**Save** 也接受 *float*、*int*、*bool* 和 *string* 输入。

**网络示例**
```cpp
CNetworked@ pNetworked = Network::Create( "my_network_example", true );

// 为字符串、隔行符和布尔值设置新值
string strString = "another_value";
int iInt = 10;
bool bBool = true;
float flFloat = 5.0;

// 现在告诉网络保存这些新值
pNetworked.Save( "my_string", strString );
pNetworked.Save( "shared_value", iInt );
pNetworked.Save( "shared_value", bBool );
pNetworked.Save( "shared_value", flFloat );
```
