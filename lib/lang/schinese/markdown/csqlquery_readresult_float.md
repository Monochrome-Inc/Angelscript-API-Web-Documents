**使用 ID 查找结果**
```cpp
float flExample1 = SQL::ReadResult::GetFloat( hQuery, 0 );
```

**使用行名查找结果**
```cpp
float flExample2 = SQL::ReadResult::GetFloat( hQuery, "example" );
```
