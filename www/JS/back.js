var appKey    = "b2ad1ad2eef5d227d63f4361e690020186a1f51d39428e14b2320d145e3ff1e0";
var clientKey = "2b9f2bb9895ba7cc701f432a220edd739374f757ccadb49f6e246c78931871bb";

var ncmb = new NCMB(appKey, clientKey);

var currentLoginUser; //現在ログイン中ユーザー

function keepInf(){ 

var username = document.getElementById('userName').value;
var password = document.getElementById('password').value;

//　Userインスタンスの生成
var user = new ncmb.User();
user.set("userName", username)
    .set("password", password);
    

ncmb.User.login(username, password)
    .then(function(date){
      // ログイン後処理
    currentLoginUser = ncmb.User.getCurrentUser();
   window.location.href = 'index2.html'; // 通常の遷移
    })
    .catch(function(err){
      // エラー処理
      
      user.signUpByAccount()
    .then(function(){
      // 登録後処理
      currentLoginUser = ncmb.User.getCurrentUser();
      alert("seikou");
      window.location.href = 'index2.html'; // 通常の遷移
    })
    .catch(function(err){
      // エラー処理
      alert(err);
    });
    });
}

 



