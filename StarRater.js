var rowsIndex = document.getElementsByClassName("rowDC");
var rowsIndex2 = document.getElementsByClassName("rowStar");

var row;
var row2;

var skills;
var skills1=["Java","C","C++","GML","Arduino"];
var skills2=["HTML","PHP","CSS","JavaScript","SQL"];
var skills3=["Français (langue maternelle)"];
var skills4=["Anglais (courant)"];
var skills5=["Eclipse","QT SKD","AndroidStudio","CodeBlocks","GameMaker","Paint.NET","Photoshop","LMMS","3DS Max","Flash","OBS_Studio","Windows","Linux","PackOffice"];
var skills6=["Joomla","Wordpress","Wamp","PHP my Admin","NotePad++","TeamViewer","Putty","VirtualBox","GitHub"];
var skillsCollums=[skills1,skills2,skills3,skills4,skills5,skills6];

var rate;
var rates;
var rates1=[3,4,3,5,3];
var rates2=[4,4,3,4,4];
var rates3=[5];
var rates4=[3];
var rates5=[4,3,5,4,5,5,4,4,2,2,4,5,4,4];
var rates6=[4,4,5,4,5,5,4,4,2];
var ratings=[rates1,rates2,rates3,rates4,rates5,rates6];

var i=0;
var r=0;
var n=0;
var x=0;

for(x=0;x<rowsIndex.length;x++)
{
rates=ratings[x];

row=rowsIndex[x];
row2=rowsIndex2[x];

skills=skillsCollums[x];

row.innerHTML +="<span>";

	for(i=0;i<skills.length;i++)
	{
		for(r=0;r<5;r++)
		{
		//row2.innerHTML +="<span>";
		if(r<rates[i])
		{
		var newSpan = document.createElement('span');
		newSpan.setAttribute('class', 'fa fa-star checked');
		row2.appendChild(newSpan);
		}
		else
		{
		var newSpan = document.createElement('span');
		newSpan.setAttribute('class', 'fa fa-star');
		row2.appendChild(newSpan);
		}
		}
	row2.innerHTML+="</br>";
	row.innerHTML+=skills[i]+"</br>";
	
	}
	
row.innerHTML +="</span>";


}