var form=document.getElementById("form");
var submit = document.querySelector(".submit");
var cancel = document.querySelector(".cancel");
var element = form.elements;
var display = document.querySelector(".display");
var i;

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    data();
    form.reset();
});

var loadFile = function(event){
    i=URL.createObjectURL(event.target.files[0]);
}
function data(){
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    var name = document.createElement("div");
    var website= document.createElement("div");
    var email = document.createElement("div");
    var gender = document.createElement("div");
    var skills = document.createElement("div");
    var img = document.createElement("img");

    name.innerHTML="NAME: "+element[0].value;
    website.innerHTML="WEBSITE: "+element[1].value;
    email.innerHTML="EMAIL: "+element[2].value;
    
    img.src="images/user-img.jpg";
    img.alt="student image";

    
   
    if(element[3].value !=""){
        img.src=i;
    }
    if(element[4].checked){gender.innerHTML="GENDER: MALE";}
    if(element[5].checked){gender.innerHTML="GENDER: FEMALE";}
    if(element[6].checked){gender.innerHTML="GENDER: OTHER";}
   

    if(element[7].checked){skills.innerHTML="SKILLS: HTML";}
    if(element[8].checked){skills.innerHTML="SKILLS: CSS";}
    if(element[9].checked){skills.innerHTML="SKILLS: JS";}
    if(element[7].checked && element[8].checked){skills.innerHTML="SKILLS: HTML,CSS";}
    if(element[7].checked && element[9].checked){skills.innerHTML="SKILLS: HTML,JS";}
    if(element[8].checked && element[9].checked){skills.innerHTML="SKILLS: CSS,JS";}
    if(element[7].checked && element[8].checked && element[9].checked){skills.innerHTML="SKILLS: HTML,CSS,JS";}
    div1.appendChild(name);
    div1.appendChild(website);
    div1.appendChild(email);
    div1.appendChild(gender);
    div1.appendChild(skills);
    div.appendChild(div1);
    div.appendChild(img);
    display.appendChild(div);

    img.classList.add("img");
    div.classList.add("d");
    div1.classList.add("div1");
    display.classList.add("display");
    
}