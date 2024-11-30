方法 1:
```cpp
void ThePresident_OnMapStart()
{
	Schedule::Create( "SomeFunction", 1.5, 2 );
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
	Schedule::Create( SomeFunction, 1.5, 2 );
}

void SomeFunction()
{
	// ...
}
```

