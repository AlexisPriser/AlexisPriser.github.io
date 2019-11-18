var langue;
var x;
var x2;
var l;
var i=0;

function Switch(element)
{
	if(element==0 || element==1)
	{
	langue= element;
	}

	if(element==1)
	{
	x=document.getElementsByClassName("fr");
	x2=document.getElementsByClassName("eng");
	}
	if(element==0)
	{
	x=document.getElementsByClassName("eng");
	x2=document.getElementsByClassName("fr");
	}
	for(i=0;i<x.length;i++)
	{
	x[i].style.display='none';
	x2[i].style.display='block';
	}
}
