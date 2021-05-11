
async function SetLoading(obj,type){
	
	if (type) 
	{
	  obj.innerHTML = "<div class='loading'>Loading&#8230;</div>";
	}		
	else 
	{
		  obj.innerHTML = "<div></div>";
	}		
	
}