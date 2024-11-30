Available entity effects
```cpp
int EF_BONEMERGE;				// Performs bone merge on client side
int EF_BRIGHTLIGHT;				// DLIGHT centered at entity origin
int EF_DIMLIGHT;				// player flashlight
int EF_NOINTERP;				// don't interpolate the next frame
int EF_NOSHADOW;				// Don't cast no shadow
int EF_NODRAW;					// don't draw entity
int EF_NORECEIVESHADOW;			// Don't receive no shadow
int EF_BONEMERGE_FASTCULL;		// For use with EF_BONEMERGE. If this is set, then it places this ent's origin at its
								// parent and uses the parent's bbox + the max extents of the aiment.
								// Otherwise, it sets up the parent's bones every frame to figure out where to place
								// the aiment, which is inefficient because it'll setup the parent's bones even if
								// the parent is not in the PVS.
int EF_ITEM_BLINK;				// blink an item so that the user notices it.
int EF_PARENT_ANIMATES;			// always assume that the parent entity is animating
```

