**Usage example**
```cpp
void ConnectToDB()
{
	// SQL Connection info
	string strSQLHost = "localhost"; // Our hostname
	int iPort = 0; // if iPort is 0, then it will use default MySQL port
	string strSQLUser = "root"; // Our username
	string strSQLPass = ""; // Our password
	string strSQLDB = "test_db"; // Our database

	// Create our connection
	SQL::Connect( strSQLHost, iPort, strSQLUser, strSQLPass, strSQLDB, OnSQLConnect );
}

//------------------------------------------------------------------------------------------------------------------------//

void QueryTest()
{
	if ( gMainConnection is null ) return;

	// Our query
	string strQuery = "SELECT id, health, name FROM `example_table` WHERE (`name` = 'foobar')";

	Log.PrintToServerConsole( LOGTYPE_INFO, "strQuery: " + strQuery );

	// Send our query!
	SQL::SendQuery( gMainConnection, strQuery, false, TestQuery );
}

//------------------------------------------------------------------------------------------------------------------------//

void OnSQLConnect( CSQLConnection@ pConnection )
{
	// If our connection was a success, then we can save the CSQLConnection object to a local variable.
	// If not, stop here.
	if ( pConnection.Failed() ) return;

	// Apply our value
	@gMainConnection = pConnection;
}

//------------------------------------------------------------------------------------------------------------------------//

void TestQuery( IMySQL@ pQuery )
{
	// If our query is null, then it failed.
	if ( pQuery is null ) return;

	// That means the table does not exist. Let's create our table then.
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

	// Print our results
	Log.PrintToServerConsole(
		LOGTYPE_INFO,
		"ID: " + iID
		+ " | Health: " + iHealth
		+ " | Name: " + strName
	);
}
```
