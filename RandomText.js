function Switch(element)
{
/*
if(element==0)
{
window.Fr=1;
window.Eng=0;
}
if(element==1)
{
window.Eng=1;
window.Fr=0;
}
*/
if(element==0 || element==1)
{
return element;
}
}

function myDeleteRow(element) 
{
var x=element;
var i=0;
var l=x.rows.length;
  for(i=0;i<l;i++)
  {
    x.deleteRow(0);
  }
}

var SwitchTrad=null;

var text=[
'A',
'B',
'C',
'D',
'E',
'F'
]
// all arrays must have equal length !
var text1=['créatif','passionné','curieux','organisé','persévérant'];
var text2=['jeux vidéos','logiciels','effets visuels','dessins','musiques'];
var text3=['programme','dessine','compose','optimise','planifie'];

var text4=['creative','passionate','curious','organized','persevering'];
var text5=['video games','softwares','visual effects','drawing','musics'];
var text6=['program','draw','compose','optimize','planning'];

//text=text1;

function newText(element)
{
	var i=0;
	var k=0;
	var t=0;
	
	var list=[];
	var gate=false;
	var count=0;
	var countb=0;
	var randomNumber=Math.floor(Math.random()*(text.length));
	/*
	for(i=0;i<text.length;i++)
	{
		
		randomNumber = Math.floor(Math.random()*(text.length));
		
		for(k=0;k<list.length;k++)
		{
			if(randomNumber==list[k])
			{
			gate=false;
			}
			else
			{
			}
		}*/
		/*
		if(gate==true)
		{
		*/
		//var x = document.querySelectorAll(".RandomTextLine");
		var x = document.getElementsByClassName("myTable");
		

		if(SwitchTrad!=element){
			for(var l = 0; l < x.length; l++) 
			{
			myDeleteRow(x[l]);
				if(element==0 && SwitchTrad!=element)
				{
				if(l==0){text=text1;}
				if(l==1){text=text2;}
				if(l==2){text=text3;}
				}
				
				if(element==1 && SwitchTrad!=element)
				{
				if(l==0){text=text4;}
				if(l==1){text=text5;}
				if(l==2){text=text6;}
				}


				
				var row = x[l].insertRow(0);
				var j=0;
				x.border="20";
				
				count=0;
				//while(count<text.length)
				for(i=0;i<text.length;i++)
				{
				randomNumber = Math.floor(Math.random()*(text.length));
				gate=true;
					for(k=0;k<text.length-1;k++)
					{	
						
						//if(list.includes(randomNumber,k))
						if(randomNumber==list[k])
						{
						gate=false;
						countb++;
						i--;
						break;
						}
						else
						{
						
						
						}
					}
					
					if(gate==true)
					{
					list[i]=randomNumber;
					count++;
					}
				}
				//list=getRandomInts(6);
				for(i=0;i<text.length;i++)
				{
				var R=list[i];
				var S=-(R*20)+150;
					
				var cell = row.insertCell(i);
				cell.style.fontSize=S+"%";
				cell.innerHTML = text[R]+"&nbsp"; //text[randomNumber];
				//cell.innerText
				
				

				
				//j++;
				
				}
				/*
				for(var j=0;j<5;j++)
				{
				
				var cell = row.insertCell(j);
				cell.innerHTML = text[randomNumber];
				
				}
				*/
			}
		}
			if(element!=SwitchTrad)
			{
			SwitchTrad=element;
			}
		
		/*document.getElementsByClassName("RandomTextLine").innerHTML+=text[randomNumber];*/
		/*
		list.push(randomNumber);
		}
		else
		{
		i--;
		}

	gate=true;
	*/
	
	
	//}
}
if(SwitchTrad==null){
newText(0);
}