var appKey    = "b2ad1ad2eef5d227d63f4361e690020186a1f51d39428e14b2320d145e3ff1e0";
var clientKey = "2b9f2bb9895ba7cc701f432a220edd739374f757ccadb49f6e246c78931871bb";

var ncmb = new NCMB(appKey, clientKey);
// 保存先クラスの作成
var TestClass = ncmb.DataStore("TestClass");

// 保存先クラスのインスタンスを生成
var testClass = new TestClass();

// 値を設定と保存
testClass.set("message", "Hello, NCMB!")
         .save()
         .then(function(object){
             // 保存に成功した場合の処理

         })
         .catch(function(err){
             // 保存に失敗した場合の処理
             alert("tintin");
         });

 



