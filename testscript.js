function scrollAppear()
{
	var i=0;
	var x=document.querySelectorAll('.RandomTextLine');

	var introText=document.querySelector('.RandomTextLine');
	/*
	var introText=document.getElementById('.intro-text');
	var introTextB=document.getElementById('.intro-textB');
	var introTextC=document.getElementById('.intro-textC');
	*/
	
	var introPosition=introText.getBoundingClientRect().top;
	
	var screenPosition = window.innerHeight/1;
	
	//if(introPosition<=screenPosition){
	
	for(i=0;i<x.length;i++)
	{
		x[i].style.opacity=1;
		x[i].style.transform = "translateX(0px)";
		//x[i].classList.add('intro-appear');
		//x[i].setAttribute("class", "intro-appear");
		//x[i].classList.replace(x[i].className, 'intro-appear');
	}
	/*
	introText.classList.add('intro-appear');
	introTextB.classList.add('intro-appear');
	introTextC.classList.add('intro-appear');
	*/
	//}
}
window.addEventListener('scroll',scrollAppear);
//scrollAppear.call();

function scrollAppear2()
{
	var introText=document.querySelector(".intro-text2");
	var introPosition=introText.getBoundingClientRect().top;
	var screenPosition = window.innerHeight/1.3;
	
	if(introPosition<screenPosition)
	{
		introText.classList.add('intro-appear2');
	}
}

window.addEventListener('scroll',scrollAppear2);


