	// Get the modal
	var modal = document.getElementById("myModal1");
	var btn = document.getElementById("projet1");
	
	var modal2 = document.getElementById("myModal2");
	var btn2 = document.getElementById("projet2");
	
	var modal3 = document.getElementById("myModal3");
	var btn3 = document.getElementById("projet3");
	
	//var modal_list = document.getElementsByClassName("myModal");
	
	// Get the button that opens the modal
	

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close");


	// When the user clicks the button, open the modal 
	btn.onclick = function() {
	  modal.style.display = "block";
	}
	
	btn2.onclick = function() {
	  modal2.style.display = "block";
	}
	
	btn3.onclick = function() {
	  modal3.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	for(var i=0;i<span.length;i++)
	{
	span[i].onclick = function() {
	  modal.style.display = "none";
	  modal2.style.display = "none";
	  modal3.style.display = "none";
	}
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) 
	  {
		modal.style.display = "none";
	  }
	  if (event.target == modal2) 
	  {
		modal2.style.display = "none";
	  }
	  if (event.target == modal3) 
	  {
		modal3.style.display = "none";
	  }
	}
