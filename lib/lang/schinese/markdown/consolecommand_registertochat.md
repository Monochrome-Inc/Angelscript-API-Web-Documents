聊天命令以 ! 和 / 作为前缀。   
因此，如果聊天命令是 “apple”，则需要编写 !apple 或 /apple 才能执行。

前缀 | 说明
------ | -----------
!      | 每个人都能看到命令
/      | 静音命令，就不会发送到聊天窗口。

例如
```cpp
void OnPluginInit()
{
	// 注册我们的控制台命令
	void ConCommand::Create( "as_apple", ConsoleCommand_Apple, "An apple a day, keeps my sanity away" );
	// 注册我们的命令
	ConCommand::RegisterToChat( "as_apple", "apple" );
}

void ConsoleCommand_Apple( CTerrorPlayer@ pPlayer, CASCommand@ pArgs )
{
	// 打印此示例
	Chat.PrintToChat( pPlayer, "{arcana}Apples!" );
}
```

