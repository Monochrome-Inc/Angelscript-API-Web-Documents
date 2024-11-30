**使用 ID 查找结果**
```cpp
int iExample1 = SQL::ReadResult::GetInt( hQuery, 0 );
```

**使用行名查找结果**
```cpp
int iExample2 = SQL::ReadResult::GetInt( hQuery, "example" );
```
