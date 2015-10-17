
window.onload = function(){

var emp = document.getElementsByClassName("empty");
//document.body.appendChild(emp);
for (var i=0;i < emp.length;i++){
        //addEvent(emp[i], 'click', createForm);
        emp[i].addEventListener("click",createForm);
    }

//


function createForm(){
	console.log("hello");
}

}






	
	