`CallFunction` 使用[网络数据][NetData]发送信息。

**使用示例**
```cpp
void Example()
{
	// 我们的 NetData
	NetData nData;

	// 字符串输入，第 1 个值
	nData.Write( "Hello World" );

	// 中间值，第 2 个值
	nData.Write( 2 );

	// 未指定寄存器，第 3 个值
	uint64 udata = 10;
	nData.Write( udata );

	// 调用我们的函数 “MyNetworkedValue”
	Network::CallFunction( "MyNetworkedValue", nData );
}

// 我们的函数，可以放在同一个 AS 文件中，也可以放在另一个文件中。
void MyNetworkedValue( NetObject@ pData )
{
	// 确保我们不是无效的
	if ( pData is null ) return;

	// 获取数据
	string value1 = "null";
	int value2 = 0;
	uint64 value3 = 0;

	if ( pData.HasIndexValue( 0 ) )
		value1 = pData.GetString( 0 );

	if ( pData.HasIndexValue( 1 ) )
		value2 = pData.GetInt( 1 );

	if ( pData.HasIndexValue( 2 ) )
		value3 = pData.GetUint64( 2 );

	// 打印我们的东西
	Log.PrintToServerConsole(
		LOGTYPE_INFO,
		"Network Test",
		"[NetWork]\n\tValue 1: %1\n\tValue 2: %2\n\tValue 3: %3\n",
		value1,
		value2,
		value3
	);
}
```
