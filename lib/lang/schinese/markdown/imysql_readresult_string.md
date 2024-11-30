**使用 ID 查找结果**
```cpp
string strExample1 = SQL::ReadResult::GetString( hQuery, 0 );
```

**使用行名查找结果**
```cpp
string strExample2 = SQL::ReadResult::GetString( hQuery, "example" );
```
