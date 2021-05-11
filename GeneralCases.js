async function GetGenralCases(cidade){

console.log("Sanches new one111");
let response =  await fetch("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/jhu/full_data.csv");

let data = await response.text();

var arr = String(data).split('\n');

var jsonObj = [];
var headers = arr[0].split(',');

for(var i = 1; i < arr.length; i++) 
{	   
    var data2 = arr[i].split(',');	
	
	if (data2[1] = cidade)
	{	
    
       var obj = {};
       
	   for(var j = 0; j < data2.length; j++) 
	   {
          obj[headers[j].trim()] = data2[j].trim();
       }
       if (obj.location != "") 
	   {  
          jsonObj.push(obj); 
	   }
  
   }
}


console.log(jsonObj);
return JSON.stringify(jsonObj);



}