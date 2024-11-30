例如
```cpp
DrawASUI UIData;
UIData.ID = 0;
UIData.Type = UI_Text;
UIData.DrawType = UI_Center;
UIData.Animate = 0.0f;				// 如果我们有了纹理，就可以用它制作动画。(FPS)
UIData.HalfContentSize = true;		// 确保阅读 “内容 ”信息，并将 X、Y 位置正确居中
UIData.Content = "This is an example";
UIData.DrawTime = 15.0f;			// 绘制 15 秒
UIData.Pos = Vector2D( 0, 0 );		// 从屏幕中心开始绘制的位置。
UIData.Size = Vector2D( 0, 0 );		// 仅由 UI_Texture 使用
UIData.ColorContent = Color( 255, 0, 0, 255 );

// The CTerrorPlayer object
if ( pTerror !is null )
	pTerror.UIDraw( UIData );
```
