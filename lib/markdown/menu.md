Example:
```cpp
// Create our menu
Menu pMenu;

// Set a custom ID for our menu. Default menu ID is "default"
pMenu.SetID("apple_lover");

// Set a title
pMenu.SetTitle("Do you like apples?");

// Add our items
pMenu.AddItem("Yes");
pMenu.AddItem("No");

// Display to all for 20 seconds
// Set it to -1 for infinite time
// Can also be applied to a specific player
pMenu.Display(null, 20);
```
