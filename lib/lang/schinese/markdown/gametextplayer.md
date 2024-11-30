**HudTextParams** 定义游戏文本的效果、位置等。

Example:
```cpp
// 创建我们的参数
HudTextParams pParams;

// 我们的 X 位置（0-1.0）
// 如果为-1，将居中
pParams.x = -1;

// 我们的 Y 位置（0-1.0）
// 如果为-1，将居中
pParams.y = 0.3f;

// 我们的频道
pParams.channel = 1;

// 渐变设置
pParams.fadeinTime = 1.5f;
pParams.fadeoutTime = 0.5f;

// 我们的保持时间
pParams.holdTime = 5.0f;

// 我们的 FX 时间
pParams.fxTime = 0.25;

// 我们的主色调
pParams.SetColor( Color( 232, 232, 232 ) );

// 我们的辅助色
pParams.SetColor2( Color( 240, 110, 0 ) );

// 打印我们的信息
Utils.GameTextPlayer( pPlayer, "The lab is open! Retrieve the Antivirus!", pParams );
```
