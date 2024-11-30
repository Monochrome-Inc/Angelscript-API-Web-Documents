函数 `Ent_Fire` 还接受实体类名、目标名称和函数的字符串数组。请注意，如果使用类名，所有实例都会受到影响。

示例  
```cpp
// 方法 1
array<string> doorFunctions = { "Lock", "SetUnreakable" };
Engine.Ent_Fire( "door_roofstairs", doorFunctions );

// 方法 2
array<string> boltcuttersArray = {
	"boltcutters05",	// 屋顶切割机
	"boltcutters04",	// 地下室切割机
};
Engine.Ent_Fire( boltcuttersArray, "Kill" );

// 方法 3
array<string> doorsToLockUnlock = { "hallway_doors1_a", "hallway_doors1_b" };
array<string> doorFunctions = { "Lock", "SetUnbreakable" };
Engine.Ent_Fire( doorsToLockUnlock, doorFunctions );
```

