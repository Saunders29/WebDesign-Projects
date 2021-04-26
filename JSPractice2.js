
image1 = new Image();
image1.src = "baseball.jfif";
image2 = new Image();
image2.src = "football.jfif";


function mouseOver( e )
{  
  
   	if ( e.target.getAttribute( "id" ) == "football" )
   	{
		e.target.setAttribute( "src", image1.getAttribute( "src" ) );
   	} 
	if (e.target.getAttribute("id")== "header"){
		document.getElementById("header").style.backgroundColor="pink";
		document.getElementById("header").style.color="green";
		document.getElementById("header").style.fontFamily="Verdana";
	}
	if (e.target.getAttribute("id")== "content1"){
		document.getElementById("content1").style.backgroundColor="blue";
		document.getElementById("content1").style.fontFamily="Verdana";
		document.getElementById("content1").style.color="white";
	}
	if (e.target.getAttribute("id")== "content2"){
		document.getElementById("content2").style.backgroundColor="red";
		document.getElementById("content2").style.fontFamily="Tahoma";
		document.getElementById("content2").style.color="yellow";
	}   
  
} 
function mouseOut( e )
{
   
   if ( e.target.getAttribute( "id" ) == "football" )
   {
      e.target.setAttribute( "src", image2.getAttribute( "src" ) );
   } 
if (e.target.getAttribute("id")== "header"){
	document.getElementById("header").style.backgroundColor="white";
	document.getElementById("header").style.color="black";
	document.getElementById("header").style.fontFamily="Times";
	}
	 if (e.target.getAttribute("id")== "content1"){
	document.getElementById("content1").style.backgroundColor="white";
	document.getElementById("content1").style.fontFamily="impact";
	document.getElementById("content1").style.color="black";
	}
	 if (e.target.getAttribute("id")== "content2"){
	document.getElementById("content2").style.backgroundColor="white";
	document.getElementById("content2").style.fontFamily="broadway";
	document.getElementById("content2").style.color="black";
	}   
}
document.addEventListener( "mouseover", mouseOver, false );
document.addEventListener( "mouseout", mouseOut, false );


theButton = document.getElementById("theButton");
otherItem = document.getElementById("buttonTest");
theButton.addEventListener("click", onButtonClick);

    function onButtonClick() {  
        otherItem.style.color = "red";  
    }
		
textentry = document.getElementById("myInput");  
textentry.addEventListener("change", onChange);
    function onChange() {  
        newtext = myinput.value;  
        otherItem.innerHTML = newtext;  
    }
