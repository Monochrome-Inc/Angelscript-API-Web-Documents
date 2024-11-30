The function `Schedule::Task` also accepts actual function objects

Method 1:
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

Method 2:
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

Method 3:
```
void ThePresident_OnMapStart()
{
	// Item variable
	int item = 15;
	Schedule::Task( 1.5, item, SomeFunction );
}

void SomeFunction( int item )
{
	// ...
}
```

Method 4:
```
void ThePresident_OnMapStart()
{
	// Item variable
	dictionary @dict = {{"item", 15}};
	Schedule::Task( 1.5, dict, SomeFunction );
}

void SomeFunction( dictionary @dict )
{
	// ...
}
```

