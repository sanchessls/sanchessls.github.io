
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


function DayDiff(day1,day2)
{		
	var Difference_In_Time = day2.getTime() - day1.getTime();   
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
	return Difference_In_Days;

}



function dateTimeless(datess) 
{
   return datess.getYear() + " - " + datess.getMonth() + datess.getDay();
}	

function CheckData(d1,d2) 
{
	if (dateTimeless(d1) === dateTimeless(d2)) {
		
		return true;
		}
	else {
		
		return false;
	}
	
	
}

function addDays(date, days) {
  var result = new Date(date);
  
  
  

  
  result.setDate(result.getDate() + parseFloat(days));
  
  

    
  
  
  return result;
}
