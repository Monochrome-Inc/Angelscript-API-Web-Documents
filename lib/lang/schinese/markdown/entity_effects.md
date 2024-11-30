可用的实体效果
```cpp
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

