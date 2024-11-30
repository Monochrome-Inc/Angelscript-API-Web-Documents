A simple example of how to use the `FileSystem::Write`

**Example**
```cpp
string strAttacker = "my_attacker";
string strVictim = "the_victim";

// Creates the JsonValues@ object
JsonValues@ pJson = FileSystem::CreateJson();

// arg and type
FileSystem::Write( pJson, "some_function", "attacker", strAttacker );
FileSystem::Write( pJson, "some_function", "victim", strVictim );
FileSystem::Write( pJson, "some_function", "boolean", true );
FileSystem::Write( pJson, "some_function", "interger", 15 );
FileSystem::Write( pJson, "some_function", "flTest", 27.06f );

// type only
FileSystem::Write( pJson, "text", "Hello there, you are dead" );

// writes to contagion/data/custom/ as example.json
FileSystem::CreateFile( "example", pJson );
```
