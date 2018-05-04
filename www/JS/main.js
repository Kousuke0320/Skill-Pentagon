// This is a JavaScript file


var keepInf = function(){
var username = document.getElementById('userName').value;
  if (username == 'bob') {
    alert('Congratulations!');
  } else {
    alert('Incorrect username or password.');
  }
};



function getPicLib()
        {
            var option = {
                quality: 50,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                correntOrientation: true,
                // destinationType: Camera.DestinationType.DATA_URL
                destinationType: Camera.DestinationType.FILE_URI
            };
            navigator.camera.getPicture(onSuccess, onFail, option);
        }

        function onFail()
        {
            console.log("写真を取得できませんでした")
        }

        function onSuccess(imageURI)
        {
            
         
        }

