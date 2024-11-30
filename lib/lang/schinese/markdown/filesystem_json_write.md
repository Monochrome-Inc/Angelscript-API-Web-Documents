如何使用 `FileSystem::Write` 的简单示例

**示例**
```cpp
string strAttacker = "my_attacker";
string strVictim = "the_victim";

// 创建 JsonValues@ 对象
JsonValues@ pJson = FileSystem::CreateJson();

// 参数和类型
FileSystem::Write( pJson, "some_function", "attacker", strAttacker );
FileSystem::Write( pJson, "some_function", "victim", strVictim );
FileSystem::Write( pJson, "some_function", "boolean", true );
FileSystem::Write( pJson, "some_function", "interger", 15 );
FileSystem::Write( pJson, "some_function", "flTest", 27.06f );

// 仅类型
FileSystem::Write( pJson, "text", "Hello there, you are dead" );

// 写入 contagion/data/custom/ 作为 example.json
FileSystem::CreateFile( "example", pJson );
```
