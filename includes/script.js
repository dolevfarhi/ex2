var sum=35; 
function getRandomColor() {
  		var letters = '0123456789ABCDEF';
  		var color = '#';
  		for (var i = 0; i < 6; i++) {
    	color += letters[Math.floor(Math.random() * 16)];
  		}
  	return color;
	}											
window.onload=function(){
	var imgSrc='<img src="images/star.png" />';
	var formObj = document.getElementById("mainLayout3");
 	for(var i=0;i<sum;i++){
 		var newObj = document.createElement("section");
 		formObj.appendChild(newObj); 
 		newObj.className ="rectangle";
 		newObj.style.background=getRandomColor();
 		document.getElementsByClassName("rectangle")[i].addEventListener("click",star);
 	}
 		document.getElementsByClassName("rectangle")[newObj.i-1].addEventListener("click",addFirstRectangle);
 		
 	function addFirstRectangle() { 	
		var newObj = document.createElement("section");
		formObj.appendChild(newObj);
 		newObj.className ="rectangle"; 
 		newObj.style.background=getRandomColor();
 	}
 		 function star(){
 		 	if(newObj.className = 'rectangle'){
	 			if(this.innerHTML==""){
					this.innerHTML=imgSrc;
				}
				else this.innerHTML="";
			}	
		}
		
};
