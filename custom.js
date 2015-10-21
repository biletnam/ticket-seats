
window.onload = function(){
seatTotal = 0;

//create some seats yo
function createSeat () {
		var seatNum = 0;
		for(i = 0; i < 4; i++) {
			newElement = document.createElement('div')
			newElement.setAttribute('class', "row")
			seatListings = document.querySelector(".seat-listings");
			console.log(seatListings)
			seatListings.appendChild(newElement)
			for(j = 0; j < 6; j++) {
				

				newElement = document.createElement('div')
				newElement.setAttribute('class', "empty")
				seatNum++
				newElement.innerHTML = "<h4 class='seat-number'>"+seatNum+"</h4><img class='chair-image'src='images/chair-empty.jpg'> "
				document.getElementsByClassName('row')[i].appendChild(newElement)
				newElement.addEventListener("click",changeStatus)
				
			}
		}

		seatTotal = seatNum;
		return seatTotal;

		
	}

createSeat();






function seatCount(seatTotal){
	console.log(seatTotal)
}


function changeStatus(seatTotal){

//seatCount(seatTotal);
//console.log(seatTotal)

	//var n = $('#from-date1').next('.to-date')
	//console.log(n)
	seatNumm = this.querySelector(".seat-number").innerHTML;
	console.log(seatNumm)
	
	  
	if (this.className === "empty"){
		//on submit normal
		newElement = document.createElement('form')
	
	newElement.innerHTML = ""
	newElement.innerHTML = '<h3> Seat Number:'+ seatNumm +'</h3><br>First name:<br><input type="text" name="firstname"><br>Last name:<br><input type="text" name="lastname"><br>Email:<br><input type="email" email="email"><br><button type="submit" form="form1" value="Submit">Submit</button>';
	seatListings.appendChild(newElement)


		this.setAttribute("class","full");  
		seatImage = this.querySelector(".chair-image");
		seatImage.setAttribute("src","images/chair-full.jpg");
	}else{
		this.setAttribute("class","empty");  
		seatImage = this.querySelector(".chair-image");
		seatImage.setAttribute("src","images/chair-empty.jpg");
		

	}

	

}





}

/*var emp = document.getElementsByClassName("empty");
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

*/




	
	