window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() 
{
  if (window.pageYOffset >= sticky) 
  {
    navbar.classList.add("sticky")
  } 
  else 
  {
    navbar.classList.remove("sticky");
  }
}

var Links=document.getElementsByClassName("NavLink");
var ScrollTargets=["B2","B3","B4","B5"];
var i=0;
/*
for(i=0;i<Links.lenght;i++)
{
Links[i].onclick = function()
{*/

/*
}
}*/