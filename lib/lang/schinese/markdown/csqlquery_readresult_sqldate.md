**使用 ID 查找结果**
```cpp
CSQLDate@ pDateExample1 = SQL::ReadResult::GetDate( hQuery, 0 );
```

**使用行名查找结果**
```cpp
CSQLDate@ pDateExample2 = SQL::ReadResult::GetDate( hQuery, "example" );
```
