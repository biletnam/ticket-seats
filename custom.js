
window.onload = function(){

var emp = document.getElementsByClassName("empty");
//document.body.appendChild(emp);
var seatNum=0; 
for (var i=0;i < emp.length;i++){
        //addEvent(emp[i], 'click', createForm);
        //emp[i].setAttribute("data", seatNum+=1)
        emp[i].addEventListener("click",createForm);

    }

//


function createForm(){
  var show = document.getElementsByTagName("form")[0];
  show.className= "show";
  this.setAttribute("class","full")
}


}






	
	