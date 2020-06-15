<!--JSONNotes_Ji4ming_20200613-->

// 双引号、冒号 声明形式
var JSONObject= {
    "name":"Ji4ming",
    "url":"www.baidu.com",
    "text":"How are yuu?"
};

// 访问对象的两种不同方式
var instance1 = JSONObject.name;
var instance2 = JSONObject["url"];

// 嵌套对象实例：
/*
    myObj = {
        "name":"runoob",
        "alexa":10000,
        "sites": {
            "site1":"www.runoob.com",
            "site2":"m.runoob.com",
            "site3":"c.runoob.com"
        }
    }

 */

// delete attribute in object
delete JSONObject.url;

// stringify 将数据转化为字符串
var JSONstringify = JSON.stringify(JSONObject);
// JSON 不能存储 Date 对象, JSON.stringify() 会将所有日期转换为字符串。
// JSON 不允许包含函数，JSON.stringify() 会删除 JavaScript 对象的函数，包括 key 和 value。
// 我们可以在执行 JSON.stringify() 函数前将函数转换为字符串来避免以上问题的发生：obj.function = obj.function.toString();

// JSON parse()  与服务端交换数据 * 重要 *
// https://www.runoob.com/json/json-parse.html

// JSON php 实例 * 重要 *
// https://www.runoob.com/php/php-json.html