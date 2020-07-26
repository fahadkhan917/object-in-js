// object in javascript

// array return object

// var web={
// //propertie:value    
//     t1:"ali",
//     t2:"fahad",
//     t3:"asad",
//     t5:['umair','zain']
// };
// //add a t4 like this
// web.t4="umair";
// web.t6=['huma','areeb'];




// console.log(web);

// // empty object
// var a={

// };
// a.b=2;
// console.log(a);

// //check in object
// var c="b" in a;
// console.log(c);




// var myquestion=[
// {
// question:"what is your name",
// answer:{
// a:"fahad",
// b:"ali",
// c:"umer"

// },
// correctanswer:"c"

// }


// ]


// function is aslo called method jb direct function likhta hai tow mae function hota hai
// method function wo jb hota hai jb wo object ka andr use hota hai


// var plan1={
// name:"basic",
// price:5000,
// page:10,
// space:100

// }

// function cal(){
// var bestprice=plan1.price;
// document.write(bestprice);

// }

// cal();

var lis=document.getElementById("lis");
function abc(){
var va=document.getElementById("val");
var list=document.createElement('li');
var listtext=document.createTextNode(va.value);
list.appendChild(listtext);
lis.appendChild(list);


// Deletebtn
var delbtn=document.createElement('button');
var delttxt=document.createTextNode('Delete');
delbtn.appendChild(delttxt);
delbtn.setAttribute("onclick","del(this)")
list.appendChild(delbtn);

// editbtn
var editbtn=document.createElement('Button');
var edittxt=document.createTextNode("Edit");
editbtn.appendChild(edittxt);
editbtn.setAttribute("onclick","edit(this)");
list.appendChild(editbtn);









}


function del(d){

    d.parentNode.remove();
    
}



function edit(e){
    
    var user=prompt("enter",e.parentNode.childNodes[0].nodeValue);
    e.parentNode.childNodes[0].nodeValue=user;




  
    }

    