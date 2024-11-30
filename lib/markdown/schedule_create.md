The function `Schedule::Task` also accepts actual function objects

Method 1:
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

Method 2:
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

