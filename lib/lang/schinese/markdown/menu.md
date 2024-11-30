Example:
```cpp
// 创建我们的菜单
Menu pMenu;

// 为我们的菜单设置自定义 ID。默认菜单 ID 为 “default”
pMenu.SetID("apple_lover");

// 设置标题
pMenu.SetTitle("Do you like apples?");

// 添加我们的项目
pMenu.AddItem("Yes");
pMenu.AddItem("No");

// 显示为全部，持续 20 秒
// 设置为-1 可无限次显示
// 也可应用于特定球员
pMenu.Display(null, 20);
```
