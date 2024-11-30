导言
============

欢迎访问 Contagion Angelscript API 文档！

这将帮助您为 Contagion 创建 Angelscript 插件，以便在服务器和地图中使用。

只要我们认为有必要，我们就会在右侧的暗区提供一些代码示例。

请记住，这是 **API 文档，而不是 Angelscript 脚本手册/教程**. 如果您不熟悉 Angelscript 和/或需要补习相关知识，请先查阅其 [脚本手册](http://www.angelcode.com/angelscript/sdk/docs/manual/doc_script.html)，然后再继续操作。

我们一如既往地欢迎大家对我们的 API 文档提出意见、建议和可能的修正。最好在我们 [Discord 服务器](https://discord.gg/monochrome) 上的 `#contagion-modding` 频道提出意见。

祝您编写脚本愉快！

- - -

## 可用的 Angelscript 命令

要访问这些命令，请确保玩家拥有 [LEVEL_ADMIN][AdminAccessLevel_t]或更高的管理员访问权限。
指挥                 | 说明                                                                      | 仅限专用服务器
----------------------- | ---------------------------------------------------------------------------------|-----------------------------
cg_angelscript_debug    | 启用 angelscript 调试？                                                        | **是**
as_log                  | 记录 angelscript 相关的错误和问题（将日志保存到 logs/angelscript.log 中）       | **没有**
as_listplugins          | 列出所有服务器端 Angelscript 插件。                                        | **没有**
as_reloadplugin         | 重新加载特定的服务器端 Angelscript 插件。                                | **没有**
as_loadplugin           | 加载特定的服务器端 Angelscript 插件。                                  | **没有**
as_unloadplugin         | 卸载特定的服务器端 Angelscript 插件。                                | **没有**
as_reloadallplugins     | 重新加载所有服务器端 Angelscript 插件。                                     | **没有**
as_unloadallplugins     | 卸载所有服务器端 Angelscript 插件。                                      | **没有**
as_processpluginevents  | 处理服务器端 Angelscript 插件的事件。                              | **没有**

- - -

## 全球物业
```cpp
int TEAM_ANY;
int TEAM_INVALID;				// 与 TEAM_ANY 相同
int TEAM_SPECTATOR;
int TEAM_SURVIVOR;
int TEAM_ZOMBIE;
int TEAM_L4D1_SURVIVOR;			// 未使用

int HITGROUP_GENERIC;
int HITGROUP_HEAD;
int HITGROUP_CHEST;
int HITGROUP_STOMACH;
int HITGROUP_LEFTARM;
int HITGROUP_RIGHTARM;
int HITGROUP_LEFTLEG;
int HITGROUP_RIGHTLEG;
int HITGROUP_LEFTARML;
int HITGROUP_RIGHTARML;
int HITGROUP_LEFTLEGL;
int HITGROUP_RIGHTLEGL;

int IN_ATTACK;
int IN_JUMP;
int IN_DUCK;
int IN_FORWARD;
int IN_BACK;
int IN_USE;
int IN_CANCEL;
int IN_LEFT;
int IN_RIGHT;
int IN_MOVELEFT;
int IN_MOVERIGHT;
int IN_ATTACK2;					// 二次攻击+瞄准镜按压。
int IN_RUN;
int IN_RELOAD;
int IN_ALT1;
int IN_ALT2;
int IN_SCORE;					// 当记分板被按住时由 client.dll 使用
int IN_SPEED;					// 玩家按住速度键
int IN_WALK;					// 玩家手持行走键
int IN_UNLOAD;					// 卸载武器
int IN_WEAPON1;					// 武器定义了这些位
int IN_WEAPON2;					// 武器定义了这些位
int IN_VOICECMDS;
int IN_VALIDVGUIINPUT;			//修复 vgui 的位标志
int IN_ATTACHMENT;
int IN_LOOKSPIN;
int IN_MELEE;					// 近战攻击！
int IN_IRONSIGHTS;				// 瞄准镜保持切换。
int IN_SHOWCONTROLS;			// 显示快速卷积菜单。

int SURVIVOR_EUGENE;			// Survivor ID: 0
int SURVIVOR_MARCUS;			// Survivor ID: 1
int SURVIVOR_NICK;				// Survivor ID: 2
int SURVIVOR_TONY;				// Survivor ID: 3
int SURVIVOR_JESSICA;			// Survivor ID: 4
int SURVIVOR_NICOLE;			// Survivor ID: 5
int SURVIVOR_RYAN;				// Survivor ID: 6
int SURVIVOR_LAWRENCE;			// Survivor ID: 7
int SURVIVOR_MIA;				// Survivor ID: 8
int SURVIVOR_MANUEL;			// Survivor ID: 9
int SURVIVOR_CURTIS;			// Survivor ID: 10
int SURVIVOR_YUMI;				// Survivor ID: 11
int SURVIVOR_MIKE;				// Survivor ID: 12
int SURVIVOR_DIEGO;				// Survivor ID: 13

int FCAP_IMPULSE_USE;			// 玩家可以使用
int FCAP_CONTINUOUS_USE;		// 玩家可以使用
int FCAP_ONOFF_USE;				// 玩家可以使用
int FCAP_DIRECTIONAL_USE;		// 玩家使用时发送 +/- 1（目前仅适用于轨道列车）
int FCAP_USE_ONGROUND;			// 注意：通常情况下，+USE 只在直接视线范围内工作。 添加这些上限可进行额外搜索
int FCAP_USE_IN_RADIUS;			// 注意：通常情况下，+USE 只在直接视线范围内工作。 添加这些上限可进行额外搜索
int FCAP_USE_HELPING_HAND;		// L4D 援助之手
int FCAP_USEABLE_BY_INFECTED;	// 可被感染者使用
int FCAP_ENABLE_GLOW;			// 对象可显示 + 使用发光效果

int EF_BONEMERGE;				// 在客户端执行骨合并
int EF_BRIGHTLIGHT;				// 以实体原点为中心的 DLIGHT
int EF_DIMLIGHT;				// 手电筒
int EF_NOINTERP;				// 不插值下一帧
int EF_NOSHADOW;				// 不要留下阴影
int EF_NODRAW;					// 不画实体
int EF_NORECEIVESHADOW;			// 不接受任何阴影
int EF_BONEMERGE_FASTCULL;		// 与 EF_BONEMERGE 一起使用。如果设置了此项，则会将此 ent 的原点置于其
								// 并使用父对象的 bbox + 部件的最大范围。
								// 否则，它会在每一帧中设置父代的骨骼，以确定放置的位置。
								// 这样做效率很低，因为它会设置父代的骨骼，即使
								// 父对象不在 PVS 中，它也会设置父对象的骨骼。
int EF_ITEM_BLINK;				// 闪烁项目，让用户注意到它。
int EF_PARENT_ANIMATES;			// 始终假定父实体正在动画中
```

- - -

## 可用的 Angelscript 附加组件

插件                   | 说明
----------------------- | ---------------------------------------------------------------------------------
[string](manual/doc_script_stdlib_string.html)                  | 字符串对象支持多种运算符，并有多个类方法和支持的全局函数，以方便对字符串进行操作。
[array](manual/doc_datatypes_arrays.html)                   | 数组对象支持多种运算符，并有多个类方法，便于操作字符串。
[dictionary](manual/doc_datatypes_dictionary.html)              | 字典对象是一种引用类型，因此在传递字典对象时可以使用字典对象的句柄，以避免代价高昂的复制。
[datetime](manual/doc_script_stdlib_datetime.html)                | 日期时间类型表示日历日期和时间。它可用于对日期进行数学运算，如比较两个日期、确定日期之间的差值，以及对日期进行加法/减法运算以形成新的日期。

