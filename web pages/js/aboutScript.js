var parent = document.querySelector("table");
var btn   = document.querySelector(".form button");
var fname  = document.querySelector("#name");
var age   = document.querySelector("#age");
var email = document.querySelector("#email");

var details ={}
var data = [];
var id= 0;


( function getData() {
        var url = document.location.href,
            params = url.split('?')[1].split('&'),
            d = {}, tmp;
        for (var i = 0, l = params.length; i < l; i++) {
             tmp = params[i].split('=');
             d[tmp[0]] = tmp[1];
        }
         details = d;
         var x = details.email.replace('%40','@');
         data = [details.name, x, details.password, details.age, details.country];
        console.log(x);
       add(data);
     })();   
 //btn.addEventListener("click", validation, true);
/*
function validation(){
    var Uname  = fname.value;
    var Uage   = age.value;
    var Uemail = email.value;
    if(Uname=="" || Uage=="" || Uemail==""){
        alert("error ")
    }
    else{
        add(Uname, Uage, Uemail);
        data = [Uname, Uemail, Uage];
        clear();
    }
}
function clear(){
    fname.value = "";
   
    age.value = "";
    email.value = "";
}*/
 
function add(data){
   
    var info = creat();
    info.setAttribute("id", id)
    
    /*info.innerHTML = "<span onclick=remove(" + id +")>X</span>";
    info.innerHTML += "<h2>" + Uname + "</h2>";
     info.innerHTML += "<h3>Email :" + Uemail+"</h3>";
    info.innerHTML +=  "<h3>Age &nbsp;:"+ Uage+"</h3>";
     */
    info.innerHTML = "<td >" + data[0]+ 
        " </td><td>" + data[1] +
        " </td><td>" + data[2] +
        " </td><td>" + data[3] + 
        "</td><td>" + data[4] +
        "</td><td><button onclick=edit(" + id +") class='edit'>edit</button></td>";
    
     id++;
   /* var color = "rgb(" + (Math.floor(Math.random() * 255 )+1) + "," + (Math.floor(Math.random() r* 255)+1) + "," + (Math.floor(Math.random() * 255 )+1) +")";
    
    //info.style.background = color;*/
    
}
function creat(){
     var info = document.createElement("tr");
     info.setAttribute("class", "info")
    
    parent.appendChild(info);
    return info;
}


// [d.name, d.email, d.password, d.age, d.country];
function save(id){
     console.log(id)
        var value = document.getElementById(id);
        var sName = value.children[0].children[0].value;
        var sEmail = value.children[1].children[0].value;
        var sPass = value.children[2].children[0].value;
        var sAge = value.children[3].children[0].value;
        var sCountry = value.children[4].children[0].value;
        
        value.innerHTML = "<td >" + sName+ 
            " </td><td>" + sEmail +
            "</td><td>" + sPass +
            "</td><td>" + sAge +
            "</td><td>" + sCountry +
            "</td><td><button onclick=edit(" + id +") class='edit'>edit</button></td>";
    console.log(sName, sAge, sEmail)
    data[0] = sName;
    data[1] = sEmail;
    data[2] = sPass;
    data[3] = sAge;
    data[4] = sCountry;
}

function edit(id){
        console.log(id)
        var value = document.getElementById(id);
        var sName = data[0]
        var sEmail = data[1]
        var sPass = data[2]
        var sAge = data[3]
        var sCountry = data[4]

        console.log(sName, sAge, sEmail);
        value.innerHTML = "<td ><input type='text' value='"+ sName+
            "' </td><td><input type='text' value='" + sEmail + 
            "' </td><td><input type='text' value='" + sPass + 
            "' </td><td><input type='text' value='" + sAge + 
            "'</td><td><input type='text' value='" + sCountry +
            "'</td><td> <button onclick=save(" + id +") class='edit'>Ok</button><button onclick=cancle(" + id +") class='edit'>Cancle</button></td>";
}

function cancle(id){
       var value = document.getElementById(id);
       var sName = data[0]
        var sEmail = data[1]
        var sPass = data[2]
        var sAge = data[3]
        var sCountry = data[4]
        value.innerHTML = "<td >" + sName+
            " </td><td>" + sEmail +
            " </td><td>" + sPass +
            " </td><td>" + sAge +
            "</td><td>" + sCountry +
            "</td><td><button onclick=edit(" + id +") class='edit'>edit</button></td>";
}/*
function remove(id){
   document.getElementById(id).remove()
}
*/