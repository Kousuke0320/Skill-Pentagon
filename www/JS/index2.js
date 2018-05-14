 //2page目の処理
      window.onload = function(){
// ページ読み込み時に実行したい処理
    
}


       function chart1(){
currentLoginUser = ncmb.User.getCurrentUser();
var name = document.getElementById("name");
name.innerHTML = currentLoginUser.get("userName");

  var mepic = localStorage.getItem('topPic');
    document.getElementById("topPic3").src = mepic;

      var pic =  localStorage.getItem('topPic');
      document.getElementById('topPic4').src = pic;

var data = {
            labels: ["Motivation", "Design", "Manag.srcement", "Communication", "System"],
            datasets: [
                {
                    label: "My First dataset",
                    backgroundColor: "rgba(179,181,198,0.2)",
                    borderColor: "rgba(179,181,198,1)",
                    pointBackgroundColor: "rgba(179,181,198,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(179,181,198,1)",
                    data: [65, 59, 90, 81, 56]
                },
                {
                    label: "My Second dataset",
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    pointBackgroundColor: "rgba(255,99,132,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(255,99,132,1)",
                    data: [28, 48, 40, 19, 96]
                }
            ]
        };


      var ctx = document.getElementById("chart-canvas");
        
        new Chart(ctx, {
            type: "radar",
            data: data,
            options: {
                    scale: {
                        reverse: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }
            }
        });

        }
    

 


function prof1(){
}

