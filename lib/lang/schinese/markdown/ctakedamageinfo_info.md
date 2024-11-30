示例 #1：
```cpp
// 在没有预定义信息的情况下创建损坏信息
CTakeDamageInfo info;

// 谁是攻击者？确保 CBaseEntity 对象 pEntityAttacker 有效
info.SetInflictor( pEntityInflictor );

// 谁是攻击者？确保 CBaseEntity 对象 pEntityAttacker 有效
info.SetAttacker( pEntityAttacker );

// 我们应该造成的伤害量
info.SetDamage( 20.0f );

// 具体的伤害类型
info.SetDamageType( DMG_BUCKSHOT );
```


示例 #2：
```cpp
// 利用施害者、攻击者、伤害和 dmg 类型信息创建我们的伤害信息
CTakeDamageInfo info = CTakeDamageInfo( pEntityInflictor, pEntityAttacker, 20.0f, DMG_BUCKSHOT );
```


示例 #3：
```cpp
// 利用攻击者、伤害和 dmg 类型信息创建我们的伤害信息
CTakeDamageInfo info = CTakeDamageInfo( pEntityAttacker, 20.0f, DMG_BUCKSHOT );
```
