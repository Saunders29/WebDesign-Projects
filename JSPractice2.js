
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
// Event listener for table and picture on JS practice
/*****************************************************************/


ThorPicDiv = document.getElementById("ThorPic");
Thor = document.getElementById("Thor");

ThorPicDiv.addEventListener("click", expandImage);


function expandImage(){
	if (ThorPicDiv.style.position == ""){
		ThorPicDiv.style.position = "fixed";
		ThorPicDiv.style.top = "15%";
		ThorPicDiv.style.left = "40%";
		Thor.style.width = "675px";

	}
	else if (ThorPicDiv.style.position == "fixed"){
		ThorPicDiv.style.position = "";
		Thor.style.width="225px";
		ThorPicDiv.src =  "Thor.jfif";

	}
}