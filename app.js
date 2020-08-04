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

// var lis=document.getElementById("lis");
// function abc(){
// var va=document.getElementById("val");
// var list=document.createElement('li');
// var listtext=document.createTextNode(va.value);
// list.appendChild(listtext);
// lis.appendChild(list);


// // Deletebtn
// var delbtn=document.createElement('button');
// var delttxt=document.createTextNode('Delete');
// delbtn.appendChild(delttxt);
// delbtn.setAttribute("onclick","del(this)")
// list.appendChild(delbtn);

// // editbtn
// var editbtn=document.createElement('Button');
// var edittxt=document.createTextNode("Edit");
// editbtn.appendChild(edittxt);
// editbtn.setAttribute("onclick","edit(this)");
// list.appendChild(editbtn);









// }


// function del(d){

//     d.parentNode.remove();
    
// }



// function edit(e){
    
//     var user=prompt("enter",e.parentNode.childNodes[0].nodeValue);
//     e.parentNode.childNodes[0].nodeValue=user;




  
//     }

// var a=prompt("enter the word");
// var chk="";
// for(var i=a.length-1;i>=0;i--){
// chk+=a[i];

// }
// if(a===chk){
// document.write("yes");

// }
// else{
// document.write("sorry");

// }




    
// function abc(){


//     var d=document.getElementById('val').value;
//   for(var i=0;i<d;i++){
//       var para=document.getElementById("para");
//     var btn=document.createElement("button");
//     var btntext=document.createTextNode("button");
//     btn.appendChild(btntext);
//     para.appendChild(btn);
//     console.log(btn);
//   }
// }

// helptask object
// var stu={
// name:"fahad",
// rollno:456,
// class:"web & mobile"

// }
// document.write(stu.name)


// var student=[
// {
// name:"fahad"

// },
// {
// name:"ali"

// }

// ]

// document.write(student[1].name);

// for(var i=0;i<student.length;i++){

// document.write(student[i].name)

// }

// var stu={
//    name:"fahad",
//    rollno:456,
//   class:"web & mobile",
//   sub:["english","urdu","math"],
//   exam1:70,
//   exam2:80,
//   getresult:function(){
//   return stu.exam1+stu.exam2;

//   }
// }
//   document.write(stu.getresult())
   

// function Stud(name,className,rollno,phone){

//   this.name=name;
//   this.className=className;
//   this.rollno=rollno;
//   this.phone=phone;

// }

// var student1=new Stud("fahad","web",456,0300);
// var student2=new Stud("ahad","mobile",789,0321);

// console.log(student1)
// console.log(student2)

  //  delete stu.name;
  //  console.log(stu);

  //   stu={
  //   name:"asad",
  //   rollno:456,
  //  class:"web & mobile"
   
  //   }
  //  stu.phone=123456;
  //   document.write(stu.phone);


// var stu={
// name:"fahad",
// id:11,
// phone:564


// }

// document.write(stu.name);

// var students=[
// {name:"asad",
// id:15
// },
// {name:"umer",
// id:16
// }

// ];

// for(var i=0;i<students.length;i++){

//   document.write(students[i].id);
//   document.write(students[i].name);

// }