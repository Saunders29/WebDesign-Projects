
theButton = document.getElementById("theButton");
otherItem = document.getElementById("buttonTest");

theButton.addEventListener("click", onButtonClick);

    function onButtonClick() {  
        otherItem.style.color = "red";  
    }
		
textentry = document.getElementById("myInput");  
textentry.addEventListener("change", onChange);
    function onChange() {  
        newtext = myInput.value;  
        otherItem.innerHTML = newtext;  
    }
//				Button and user text on assignment 3	
/**************************************************************** */