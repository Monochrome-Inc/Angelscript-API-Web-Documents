导言
============

这是一种简单的脚本语言，允许使用 `logic_scene` 实体编写和触发某些事件的脚本。它使用`.seq`文件格式，该格式基于《零境界：删除场景》中的`.seq`。

序列文件必须放在 “data/sequences/”文件夹下，以便实体读取和调用函数。


## 语法
- - -

### 功能块

序列文件语法围绕功能块展开。一个功能块包含一系列要执行的命令。

功能块语法略有不同，取决于功能块的类型，但一般如下所示：
```
%ExampleFunction
{
	#dlc_only	= true
	#target		= "c4_1"
	#character	= !target
	#voice		= k_eVoiceBombsOnATrain
}
```

函数块还可以包含参数，这些参数由 `#include` 和相应的函数调用使用。下面是一个例子，说明带有参数的函数块是怎样的。
```
%VoiceComText( args )
{
	// First argument
	#ccRange	= $0
	// Second Argument
	#ccLocation	= $1
	#ccColor	= "0 255 255"
}
```



### 可用命令

所有命令都以 `#` 开头。调用函数时，请确保在设置命令值之前包含 `=`。如果某个命令不起作用，请确保启用了 `sv_sequence_debug`。

指挥                | 类型     | 说明
----------------------- | ---------------------------------------------------------------------------------
dlc_only | `BOOL` | 如果为真，它将只检查最新的 DLC 角色，从迈克开始。
type | `STRING` | 选择说话的角色类型。请查看下面的可用类型。
character | `STRING` | 与 `#type` 相同。只是旧版 .seq 的备用命令
voice | `STRING` | 使用与 Angelscript 相同的 [Voice Table][VoiceEnumTable]。
playanim | `STRING` | 播放手势动画。
pause | `FLOAT` | 我们应该延迟多长时间（以秒为单位），直到触发 sequence 函数中的下一行。
playback | `FLOAT` | 手势动画的播放速率。
respond | `BOOL` | 回复该角色。这会随机选择一个最接近谈话者的角色。
target | `STRING` | 如果 `#type` 设置为 `!target` ，则将读取该函数。它将读取实体的 `targetname` 名称。不支持类名。
ascall | `STRING` | Angelscript 函数调用。它将触发一个名为 [void OnSequenceFired( const string &in szValue )][OnSequenceFired] 的全局函数。
ccColor | `STRING` | 闭合字幕的颜色。如果设置为 `0 255 0`，文本将变为绿色。
ccText | `STRING` | 将发送给播放器的封闭式字幕文本（如果在范围内）。
ccLocation | `STRING` | 闭合字幕源的位置，也可以是 `targetname` 。
ccRange | `FLOAT` | 从原点开始的封闭字幕范围。如果设置为 `-1` 或更小，范围将被忽略。
include | `STRING` | 将包含 `data/sequences/` 文件夹中的序列。



### 功能调用

所有函数调用都以 `@` 开头。您不能在同一脚本中调用函数，但可以调用 `global.seq` 中的任何函数和 `#include` 文件中的任何函数。

下面举例说明如何调用带参数和不带参数的函数：
```
// 这两个函数来自 global.seq
// 带参数的 VoiceComText
@VoiceComText( 1000, "-497.997 -9518 59.6777" )

// VoiceComText 不带参数
@VoiceComText()
```



### 可用类型

类型                | 说明
----------------------- | ---------------------------------------------------------------------------------
`!target` | 从 `#target` 命令中选取实体。
`!activator` | 选中激活 `logic_scene` 的实体。
`!caller` | 选中调用 `logic_scene` 的实体。
`!picker` | 选择 `logic_scene` 想要使用的字符。
`random` | 随机抓取一个幸存者。会检查是否事先应用了 `#dlc_only`。
`eugene` | 抓取任何拥有 `Eugene` 角色的玩家。
`marcus` | 抓取任何拥有 `Marcus` 角色的玩家。
`nick` | 抓取任何拥有 `Nick` 角色的玩家。
`tony` | 抓取任何拥有 `Tony` 角色的玩家。
`jessica` | 抓取任何拥有 `Jessica` 角色的玩家。
`nicole` | 抓取任何拥有 `Nicole` 角色的玩家。
`ryan` | 抓取任何拥有 `Ryan` 角色的玩家。.
`lawrence` | 抓取任何拥有 `Lawrence` 角色的玩家。
`mia` | 抓取任何拥有 `Mia` 角色的玩家。
`manuel` | 抓取任何拥有 `Manuel` 角色的玩家。
`curtis` | 抓取任何拥有 `Curtis` 角色的玩家。
`yumi` | 抓取任何拥有 `Yumi` 角色的玩家。
`mike` | 抓取任何拥有 `Mike` 角色的玩家。
`diego` | 抓取任何拥有 `Diego` 角色的玩家。
