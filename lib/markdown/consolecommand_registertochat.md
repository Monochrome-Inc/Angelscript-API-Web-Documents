Chat commands works with ! and / as a prefix.    
So if the chat command is "apple", then you will require to write !apple or /apple to execute it.

Prefix | Description
------ | -----------
!      | Everyone will be able to see the command
/      | Silent command, it won't be sent to the chat.

Example:
```cpp
void OnPluginInit()
{
	// Register our console command
	void ConCommand::Create( "as_apple", ConsoleCommand_Apple, "An apple a day, keeps my sanity away" );
	// Register our command
	ConCommand::RegisterToChat( "as_apple", "apple" );
}

void ConsoleCommand_Apple( CTerrorPlayer@ pPlayer, CASCommand@ pArgs )
{
	// Print this example
	Chat.PrintToChat( pPlayer, "{arcana}Apples!" );
}
```

