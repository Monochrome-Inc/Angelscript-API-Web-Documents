**使用示例**
```cpp
void ConnectToDB()
{
	// SQL 连接信息
	string strSQLHost = "localhost"; // 我们的主机名
	int iPort = 0; // 如果 iPort 为 0，则使用 MySQL 默认端口
	string strSQLUser = "root"; // 我们的用户名
	string strSQLPass = ""; // 我们的密码
	string strSQLDB = "test_db"; // 我们的数据库

	// 创建我们的连接
	SQL::Connect( strSQLHost, iPort, strSQLUser, strSQLPass, strSQLDB, OnSQLConnect );
}

//------------------------------------------------------------------------------------------------------------------------//

void QueryTest()
{
	if ( gMainConnection is null ) return;

	// 我们的查询
	string strQuery = "SELECT id, health, name FROM `example_table` WHERE (`name` = 'foobar')";

	Log.PrintToServerConsole( LOGTYPE_INFO, "strQuery: " + strQuery );

	// 发送我们的查询！
	SQL::SendQuery( gMainConnection, strQuery, false, TestQuery );
}

//------------------------------------------------------------------------------------------------------------------------//

void OnSQLConnect( CSQLConnection@ pConnection )
{
	// 如果连接成功，我们就可以将 CSQLConnection 对象保存到本地变量中。
	// 如果不成功，就到此为止。
	if ( pConnection.Failed() ) return;

	// 应用我们的值
	@gMainConnection = pConnection;
}

//------------------------------------------------------------------------------------------------------------------------//

void TestQuery( IMySQL@ pQuery )
{
	// 如果查询结果为空，则查询失败。
	if ( pQuery is null ) return;

	// 这意味着表不存在。那就让我们创建表格吧。
	if ( pQuery.Failed() )
	{
		string strQuery = "CREATE TABLE IF NOT EXISTS `example_table` ("
			"`id` int(11) NOT NULL auto_increment,"
			"`authid` int(11) NOT NULL default '0',"
			"`health` int(11) NOT NULL default '0',"
			"`name` varchar(250)  NOT NULL default '',"
			"PRIMARY KEY  (`id`)"
		");";
		SQL::SendAndIgnoreQuery( gMainConnection, strQuery );
		return;
	}

	int iID = SQL::ReadResult::GetInt( pQuery, 0 );
	int iHealth = SQL::ReadResult::GetInt( pQuery, "health" );
	string strName = SQL::ReadResult::GetString( pQuery, "name" );

	// 打印我们的结果
	Log.PrintToServerConsole(
		LOGTYPE_INFO,
		"ID: " + iID
		+ " | Health: " + iHealth
		+ " | Name: " + strName
	);
}
```
