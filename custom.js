window.onload = function() {
	
	var customerData = []
	var seatNum = 0
	function createCustomer(name, email, seatNum) {
		this.Name = name;
		this.Email = email;
		this.Seat = seatNum;

	}
	//create some seats yo
	function createSeat() {
		var seatNum = 0;
		for (i = 0; i < 4; i++) {
			newElement = document.createElement('div')
			newElement.setAttribute('class', "row")
			seatListings = document.querySelector(".seat-listings");
			console.log(seatListings)
			seatListings.appendChild(newElement)
			for (j = 0; j < 6; j++) {

				newElement = document.createElement('div')
				newElement.setAttribute('class', "empty")
				seatNum++
				newElement.innerHTML = "<h4 class='seat-number'>" + seatNum + "</h4><img class='chair-image'src='images/chair-empty.jpg'> "
				document.getElementsByClassName('row')[i].appendChild(newElement)
				newElement.addEventListener("click", changeStatus)

			}
		}

	}

	createSeat();


	
	//get dat form yo
	function getForm(){
		newElement = document.createElement('form')
		newElement.innerHTML = '<h3> Seat Number:' + seatNum + '</h3><br> Name:<br><input type="text" name="name"><br>Email:<br><input type="email" name="email"><br><button type="submit" name="submit" form="form1" value="Submit">Submit</button>';
		seatListings.appendChild(newElement)
		
		newElement = document.getElementsByTagName("button")[0]
		newElement.addEventListener("click", onFormSubmit);
	}

	//process dat data 
	function onFormSubmit(){
		
		var name = document.getElementsByName('name')[0].value;   // grab the name
    	var email = document.getElementsByName('email')[0].value; // grab the email
    	
    	console.log(name);
        console.log(email);
        console.log(seatNum)

      	var customerOb = new createCustomer(name, email, seatNum); 
        
        customerData.push(customerOb)
        console.log(customerData)

        
        elem = document.getElementsByTagName("form")[0]
        elem.parentNode.removeChild(elem);

        

	}
	
	//change status of seat on first click :(
	function changeStatus() {	
		seatNum = this.querySelector(".seat-number").innerHTML;
		
		if (this.className === "empty") {
			//if this seat is empty do dis
			
			getForm();

			this.setAttribute("class", "full");
			seatImage = this.querySelector(".chair-image");
			seatImage.setAttribute("src", "images/chair-full.jpg");

		} else {
			// if full uncheck :(

			this.setAttribute("class", "empty");
			seatImage = this.querySelector(".chair-image");
			seatImage.setAttribute("src", "images/chair-empty.jpg");

		}
	}


}






