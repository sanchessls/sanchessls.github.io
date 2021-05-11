async function GetGenralCases(cidade,maxDias)
{
	
 var dataFixa = new Date();
 
 //allowing 10 days ahead cuz date is always at least 3 days behind today
 dataFixa.setDate(dataFixa.getDate()-(maxDias +10));

console.log("Data Fixa " + dataFixa);

let response =  await fetch("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/jhu/full_data.csv");

let data = await response.text();

var arr = String(data).split('\n');

var jsonObj = [];
var headers = arr[0].split(',');

console.log("count gigante? : " + arr.length)

for(var i = (arr.length-1); i > 0; i--) 
{	   
	
	var data2 = arr[i].split(',');	
	
	if (data2[1] == cidade)
	{	
       console.log(data2);
		
	   let dataNew =  new Date(data2[0]);
	   console.log("dataNew "  + dataNew);
	   
	   
	   if (dataNew >= dataFixa) {
	       console.log("dataNew Entrou");
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
	   else 
	   {
		   console.log("dataNew NAO Entrou");
		   console.log("testaBreak");
		   break;
	   }
    }
   
}

console.log("testaBreak ??");


return jsonObj;

}

function GetCasesDay(objData,GeneralObjectList)
{			
    var result = 0;

	let DataToFind = new Date(objData.date);	
	
	GeneralObjectList.forEach((element) => 
	{
		if (result <= 0 ) {
	   let data = new Date(element.date);
	   
	   console.log("");	
	   console.log(DataToFind);	
	   console.log(data);	
	   console.log("");	
	   
	   if (CheckData(DataToFind,data)) 
	   {
		   console.log("AQUI RETORNOU VERDADEIRO?");
		   
		   console.log(element);
		  result = element.new_cases;          		  
	   }
	   
		}
	});	
	
	console.log("Valor que vai retornar : " + result);
	return result;

}
function dateTimeless(datess) 
{
   return datess.getYear() + " - " + datess.getMonth() + datess.getDay();
}	

function CheckData(d1,d2) 
{
	if (dateTimeless(d1) === dateTimeless(d2)) {
		console.log("Igual")	;
		return true;
		}
	else {
		console.log("Diferente")	;
		return false;
	}
	
	
}