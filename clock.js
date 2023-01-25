function hello(){
    var d = new Date(); // for now
    r=String(d)
    console.log(r);

    day=r.slice(0,3);
    month=r.slice(4,7);
    date=r.slice(8,10);
    year=r.slice(11,15);
    time=r.slice(16,24);
    console.log(day);
    rep=parseInt(time.slice(0,2));
    if (rep>12){
        time=String(rep-12);
        time+=r.slice(18,24);
    }
    console.log(rep);
    console.log(time);

    document.getElementById("time").innerText=time;
    document.getElementById("month").innerText=r.slice(4,7);
    document.getElementById("date").innerText=r.slice(8,10);
    document.getElementById("year").innerText=r.slice(11,15);
    document.getElementById("day").innerText=r.slice(0,3);

}
// hello();

// document.getElementById("time1").innerText=day;



setInterval(hello,1000)

