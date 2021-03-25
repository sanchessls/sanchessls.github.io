



async function F_RETORNA_DADOS(){
	
	return await getCoronaData();
}




async function F_TableCorona(){
	
	let data = await getCoronaData();
	
	let objRetorno = ProcessaRetorono(data);
	
	var retorno = "";
	
	
	objRetorno.forEach((element) => {
		
		
		//retorno += "<div>CABECALHO<>";
//		retorno += `<tr>
            //<th>Valor teste 1</th>
			//<th>Valor teste 2</th>
        //</tr>
        //</thead>
		    //<tbody>
//			
			//<tr class="active-row">
            //<th>teste 1</th>       
			//<th>teste 2</th>    
		//</tbody>
//			`;
		
		
		
		
	    retorno += `<div>` ;	
		retorno += ` ******** total_vaccinations  *****************<br>`  ;		
        retorno += `Media Ultimos ${element.Dias} dias: ${element.Media1} <br>`  ;
	    retorno += `Data Final Media Ultimos ${element.Dias} dias: <font color="red">${element.Data1}</font> <br>`  ;

		
			    retorno += `<div>` ;	
		retorno += ` ******** people_vaccinated  *****************<br>`  ;		
        retorno += `Media Ultimos ${element.Dias} dias: ${element.Media2} <br>`  ;
	    	    retorno += `Data Final Media Ultimos ${element.Dias} dias: <font color="blue">${element.Data2}</font> <br>`  ;
		
			    retorno += `<div>` ;	
		retorno += ` ******** people_fully_vaccinated  *****************<br>`  ;	
        retorno += `Media Ultimos ${element.Dias} dias: ${element.Media3} <br>`  ;
	    retorno += `Data Final Media Ultimos ${element.Dias} dias: <font color="orange">${element.Data3}</font> <br>`  ;
		
		
			
		
		retorno += `<br>`  ;
	
	retorno += `</div>` ;
	});
	

	
	return retorno;
}

function ProcessaRetorono(data)
{
	  
	  var diasRodar = [ 1, 2,3, 5, 10, 30 ,40 , 50 ];
	  
	  //var diasRodar = [ 10 ];
	  
	  var jsonObj = [];
		  
	
      diasRodar.forEach((element) => {
		  
		var obj = {};	   	 	  	
	  obj.Dias = element;
	  
	  obj.Valor1 = 0;
	  obj.Valor2 = 0;
	  obj.Valor3 = 0;
	  
	  obj.Media1 = f_get_media(obj.Dias,data,1,obj);
	  
	  
	  
	  obj.Media2 = f_get_media(obj.Dias,data,2,obj);
	  obj.Media3 = f_get_media(obj.Dias,data,3,obj);
	  
	  console.log(obj);
	  
	  obj.Data1 = f_get_data(obj.Media1,10000000- obj.Valor1);
	  obj.Data2 = f_get_data(obj.Media2,10000000- obj.Valor2);
	  obj.Data3 = f_get_data(obj.Media3, 5000000- obj.Valor3);
	  
	  jsonObj.push(obj);  
	  })
	  
	  
	  return jsonObj;
	
}

function f_get_data(media,total)
{
	console.log(total);
	
	
	
	var teste = total/media;
	
	var dateFinal = new Date();
	
	
	return addDays(dateFinal,teste).toLocaleString();
	
	
	
}

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function f_get_media(dias,data, type,objvalor)
{
	
	var objeto =  JSON.parse(data);
	
	var total = objeto.length;
	
	
	var UltimoObjeto = objeto[total-1];
	
	var UltimoSelecao = objeto[total-dias];
	var UltimoSelecaoMenos1 = objeto[total-dias-1];
	
	var ValorParaUltimoObjeto;
	var ValorParaUltimoSelecaoMenos1;
	var ValorParaUltimoSelecao;
	
	
	
	
	if (type == 1) {
		
		ValorParaUltimoObjeto = UltimoObjeto.total_vaccinations;
		ValorParaUltimoSelecaoMenos1 = UltimoSelecaoMenos1.total_vaccinations;
		ValorParaUltimoSelecao = UltimoSelecao.total_vaccinations;
		objvalor.Valor1 = ValorParaUltimoObjeto;
				
	}
	if (type == 2) {
				ValorParaUltimoObjeto = UltimoObjeto.people_vaccinated;
		ValorParaUltimoSelecaoMenos1 = UltimoSelecaoMenos1.people_vaccinated;
		ValorParaUltimoSelecao = UltimoSelecao.people_vaccinated;
		objvalor.Valor2 = ValorParaUltimoObjeto;

	}
	if (type == 3) {
		
		ValorParaUltimoObjeto = UltimoObjeto.people_fully_vaccinated;
		ValorParaUltimoSelecaoMenos1 = UltimoSelecaoMenos1.people_fully_vaccinated;
		ValorParaUltimoSelecao = UltimoSelecao.people_fully_vaccinated;
		objvalor.Valor3 = ValorParaUltimoObjeto;

	}
	
		
	
	var valor = (ValorParaUltimoObjeto) - (ValorParaUltimoSelecaoMenos1);
	
	
	
	
	
	
	
	
	
	
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



for(var i = 1; i < arr.length; i++) {
  var data2 = arr[i].split(',');
  
  
  
  var obj = {};
  for(var j = 0; j < data2.length; j++) {
     obj[headers[j].trim()] = data2[j].trim();
  }
  if (obj.location != "") {  jsonObj.push(obj); }
}
return JSON.stringify(jsonObj);


}