Example (Server Side):
```cpp
DrawASUI UIData;
UIData.ID = 0;
UIData.Type = UI_Text;
UIData.DrawType = UI_Center;
UIData.Animate = 0.0f;				// If we have a texture, we can animate it using this. (FPS)
UIData.HalfContentSize = true;		// Make sure to read the "Content" information and properly center the X, Y position
UIData.Content = "This is an example";
UIData.DrawASUIFonts = k_eNormal;	// Our font style
UIData.DrawTime = 15.0f;			// Draw for 15 seconds
UIData.Pos = Vector2D( 0, 0 );		// Where we should draw it from the center of the screen.
UIData.Size = Vector2D( 0, 0 );		// Only used by the UI_Texture
UIData.ColorContent = Color( 255, 0, 0, 255 );
UIData.Alpha1 = 255;				// Only used in UI_BackgroundFade and UI_BackgroundFadeHorizontal
UIData.Alpha2 = 255;				// Only used in UI_BackgroundFade and UI_BackgroundFadeHorizontal

// The CTerrorPlayer object
if ( pTerror !is null )
	pTerror.UIDraw( UIData );
```

Example (Client Side):
```cpp
DrawASUI UIData;
UIData.ID = 0;
UIData.Type = UI_Text;
UIData.DrawType = UI_Center;
UIData.Animate = 0.0f;				// If we have a texture, we can animate it using this. (FPS)
UIData.HalfContentSize = true;		// Make sure to read the "Content" information and properly center the X, Y position
UIData.Content = "This is an example";
UIData.DrawASUIFonts = k_eNormal;	// Our font style
UIData.DrawTime = 15.0f;			// Draw for 15 seconds
UIData.Pos = Vector2D( 0, 0 );		// Where we should draw it from the center of the screen.
UIData.Size = Vector2D( 0, 0 );		// Only used by the UI_Texture
UIData.ColorContent = Color( 255, 0, 0, 255 );
UIData.Alpha1 = 255;				// Only used in UI_BackgroundFade and UI_BackgroundFadeHorizontal
UIData.Alpha2 = 255;				// Only used in UI_BackgroundFade and UI_BackgroundFadeHorizontal

// Draw our UI element
UIData.Draw();
```
