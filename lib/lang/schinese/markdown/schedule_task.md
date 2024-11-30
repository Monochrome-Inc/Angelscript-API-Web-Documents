函数 `Schedule::Task` 也接受实际函数对象

方法 1:
```cpp
void ThePresident_OnMapStart()
{
	Schedule::Task( 1.5, "SomeFunction" );
}

void SomeFunction()
{
	// ...
}
```

方法 2:
```
void ThePresident_OnMapStart()
{
	Schedule::Task( 1.5, SomeFunction );
}

void SomeFunction()
{
	// ...
}
```

方法 3:
```
void ThePresident_OnMapStart()
{
	// 项目变量
	int item = 15;
	Schedule::Task( 1.5, item, SomeFunction );
}

void SomeFunction( int item )
{
	// ...
}
```

