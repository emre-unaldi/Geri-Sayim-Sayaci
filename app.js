const endDate = new Date("2021/11/17 09:00:00").getTime();
var timer = setInterval(() => {
    var simdikiZaman = new Date().getTime();
    var zamanFarki = endDate - simdikiZaman;
    if(zamanFarki >= 0 ){
        var gun = Math.floor(zamanFarki / (1000 * 60 * 60 * 24));
        var saat = Math.floor((zamanFarki % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var dakika = Math.floor((zamanFarki % (1000 * 60 * 60)) / (1000 * 60));
        var saniye = Math.floor((zamanFarki % (1000 * 60)) / 1000);
        
        document.getElementById("timerDate").innerHTML = gun;
        document.getElementById("timerHour").innerHTML = saat;
        document.getElementById("timerMinute").innerHTML = dakika;
        document.getElementById("timerSecond").innerHTML = saniye;
    }else{
        document.getElementById("timer").innerHTML = "Zaman Sona Erdi...";
    }
}, 1000);
