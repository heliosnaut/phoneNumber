# node phone query

手机归属地查询node版本

数据来源：[https://github.com/lovedboy/phone](https://github.com/lovedboy/phone)

用法：

```
   const find = require('phone-query');
   let result = find(13800138000);
   /* 
    //返回值：
    { 
          phone: 13800138000,
           op: '移动',
           province: '北京',
           city: '北京',
           zip_code: '100000',
           area_code: '010'
    }

    */
```


知道开头三位手机号，了解本地所属城市，能够查询到具体具体36 * 100个可能
