var ban = document.getElementById("bangalore");
var pun = document.getElementById("punjab");
var del = document.getElementById("delhi");
var kol = document.getElementById("kolkata");
var map = document.getElementById("mapicon")
var ban1 = document.getElementById("bangalorediv");
var pun1 = document.getElementById("punjabdiv");
var del1 = document.getElementById("delhidiv");
var kol1 = document.getElementById("kolkatadiv");
var map1 = document.getElementById("map");
var map2 = document.getElementById("map2");
var map3 = document.getElementById("map3");
var map4 = document.getElementById("map4");
var change = function(){
    map1.style.display = "block";
}
var change2 = function(){
    map2.style.display = "block";
}
var change3 = function(){
    map3.style.display = "block";
}
var change4 = function(){
    map4.style.display = "block";
}
ban.onclick = function(){
    ban1.style.display="block";
    del1.style.display="none";
    pun1.style.display="none";
    kol1.style.display="none";
    ban.style.backgroundColor="rgb(33, 172, 172)";
    del.style.backgroundColor="rgb(230, 228, 228)";
    pun.style.backgroundColor="rgb(230, 228, 228)";
    kol.style.backgroundColor="rgb(230, 228, 228)";
}
kol.onclick = function(){
    ban1.style.display="none";
    del1.style.display="none";
    pun1.style.display="none";
    kol1.style.display="block";
    ban.style.backgroundColor="rgb(230, 228, 228)";
    del.style.backgroundColor="rgb(230, 228, 228)";
    pun.style.backgroundColor="rgb(230, 228, 228)";
    kol.style.backgroundColor="rgb(33, 172, 172)";
}
del.onclick = function(){
    ban1.style.display="none";
    del1.style.display="block";
    pun1.style.display="none";
    kol1.style.display="none";
    ban.style.backgroundColor="rgb(230, 228, 228)";
    del.style.backgroundColor="rgb(33, 172, 172)";
    pun.style.backgroundColor="rgb(230, 228, 228)";
    kol.style.backgroundColor="rgb(230, 228, 228)";
}
pun.onclick = function(){
    ban1.style.display="none";
    del1.style.display="none";
    pun1.style.display="block";
    kol1.style.display="none";
    ban.style.backgroundColor="rgb(230, 228, 228)";
    del.style.backgroundColor="rgb(230, 228, 228)";
    pun.style.backgroundColor="rgb(33, 172, 172)";
    kol.style.backgroundColor="rgb(230, 228, 228)";
}