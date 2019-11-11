
var text=[
'A',
'B',
'C',
'D',
'E',
'F'
]
// all arrays must have equal length !
var text1=['créatif','passionné','aimable','organisé','persévérant'];
var text2=['jeux vidéos','logiciels','effets visuels','dessins','musiques'];
var text3=['programme','dessine','compose','optimise','planifie'];

//text=text1;

function newText()
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
		
		
			for(var l = 0; l < x.length; l++) 
			{
				if(l==0){text=text1;}
				if(l==1){text=text2;}
				if(l==2){text=text3;}
				
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

newText();