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

执行2CSV生成csv文件

使用 [xlsx和vcf相互转换](https://xlsx2vcf.kefuxx.com/) 将xlsx文件转为vcf文件，然后导入到手机联系人
