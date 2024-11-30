**NetData 写入示例**
```cpp
NetData nData;

// 字符串输入，第 1 个值
nData.Write( "Hello World" );

// 中间值，第 2 个值
nData.Write( 2 );

// 未指定寄存器，第 3 个值
uint64 udata = 10;
nData.Write( udata );
```
