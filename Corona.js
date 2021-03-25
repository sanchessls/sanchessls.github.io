



async function F_RETORNA_DADOS(){
	
	return await getCoronaData();
}




async function F_TableCorona(){
	
	let data = await getCoronaData();
	
	let objRetorno = ProcessaRetorono(data);
	
	var retorno = "";
	
	
	objRetorno.forEach((element) => {
		console.log("sanches sanches");
		
	    retorno += `<div>` ;	
        retorno += `Media Ultimos ${element.Dias} dias: ${element.Media} <br>`  ;
	    retorno += `Data Final Media Ultimos ${element.Dias} dias: ${element.Data} <br>`  ;
	
	
	retorno += `</div>` ;
	});
	

	
	return retorno;
}

function ProcessaRetorono(data)
{
	  
	  var diasRodar = [ 2,3, 5, 10, 30 ];
	  
	  var jsonObj = [];
	
	  var populacao = 5000000;
	
      diasRodar.forEach((element) => {
		  
		var obj = {};	   	 	  	
	  obj.Dias = element;
	  obj.Media = f_get_media(obj.Dias,data);
	  obj.Data = f_get_data(obj.Media,populacao*2);
	  
	  jsonObj.push(obj);  
	  })
	  
	  
	  return jsonObj;
	
}

function f_get_data(media,total)
{
	var teste = total/media;
	console.log("dias: " + teste);
	var dateFinal = new Date();
	
	
	return addDays(dateFinal,teste).toLocaleString();
	
	
	
}

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function f_get_media(dias,data)
{
	
	var objeto =  JSON.parse(data);
	
	var total = objeto.length;
	
	
	var UltimoObjeto = objeto[total-1];
	
	var UltimoSelecao = objeto[total-dias];
	var UltimoSelecaoMenos1 = objeto[total-dias-1];
	
	var valor = (UltimoObjeto.total_vaccinations) - (UltimoSelecaoMenos1.total_vaccinations);
	
	
	console.log("Ultimo objeto para " + dias +" dias");
	
	console.log("data: " + UltimoObjeto.date);
	console.log("total vac: " + UltimoObjeto.total_vaccinations);
	
	console.log("Ultimo objeto Menos um para " + dias +" dias");
	
    console.log("data: " + UltimoSelecaoMenos1.date);
	console.log("total vac: " + UltimoSelecaoMenos1.total_vaccinations);
	
    console.log("Recente objeto para " + dias +" dias");
	
	console.log("data: " + UltimoSelecao.date);
	console.log("total vac: " + UltimoSelecao.total_vaccinations);
	
	
	
	valor = valor/dias;
	
	
	

	
	

	
	return valor;
}

async function getCoronaData() {
let response = await fetch("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/country_data/Ireland.csv");
let data = await response.text();


data = String(data).replaceAll("Oxford/AstraZeneca, ", "Oxford/AstraZeneca");
data = String(data).replaceAll("Moderna, ", "Moderna");
data = String(data).replaceAll("Pfizer/BioNTech, ", "Pfizer/BioNTech");



var arr = String(data).split('\n');

var jsonObj = [];
var headers = arr[0].split(',');

console.log("bb");
console.log(headers);
for(var i = 1; i < arr.length; i++) {
  var data2 = arr[i].split(',');
  console.log("bb2");
  
  console.log(data2);
  var obj = {};
  for(var j = 0; j < data2.length; j++) {
     obj[headers[j].trim()] = data2[j].trim();
  }
  if (obj.location != "") {  jsonObj.push(obj); }
}
return JSON.stringify(jsonObj);


}