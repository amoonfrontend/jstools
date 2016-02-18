

var path = "/admin/user/update/";
var reg = /\/admin\/([-\w\d]+)\/update/g;
var value = reg.exec(path);
console.log(value);
/**
 value的结果如下：
 [ '/admin/user/update',
  'user',
  index: 0,
  input: '/admin/user/update/' ]
 */