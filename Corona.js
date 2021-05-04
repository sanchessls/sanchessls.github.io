



async function F_RETORNA_DADOS(){
	
	return await getCoronaData();
}




async function F_TableCorona(objMelhorData,PopulationFinal,CoronaCountry)
{
			 	
				console.log("chegou");
				console.log(PopulationFinal);
				
	let data33 = await getCoronaData(CoronaCountry);
	
	var data2 = f_TrataLista(data33,CoronaCountry);
	
	let objRetorno = ProcessaRetorono(data2,PopulationFinal)
	
	var retorno = "";
	
			
		
		retorno += `<tr>
            <th>Tipo</th>
			<th>total_vaccinations</th>
			<th>Data Final Estimada</th>
			<th>people_vaccinated</th>
			<th>Data Final Estimada</th>
			<th>people_fully_vaccinated</th>
			<th>Data Final Estimada</th>
        </tr>
        </thead>
	    <tbody>
			`;
			
	objRetorno.forEach((element) => {
		
	
		
		
		if (new Date(element.Data1) < objMelhorData.MelhorData) 
		{			
			objMelhorData.MelhorData = element.Data1;
		}

		
		if (new Date(element.Data2) < objMelhorData.MelhorData) 
		{			
			
			objMelhorData.MelhorData = element.Data2;
		}
		
		if (new Date(element.Data3) < objMelhorData.MelhorData) 
		{
		
			objMelhorData.MelhorData = element.Data3;
		}

         retorno += `
			<tr class="active-row">
            <td>Media Ultimos ${element.Dias} dias</td>       
			<td>${element.Media1}</td>       
			<td>${element.Data1.toLocaleString()}</td>       
			<td>${element.Media2}</td>       
			<td>${element.Data2.toLocaleString()}</td>       
			<td>${element.Media3}</td>       
			<td>${element.Data3.toLocaleString()}</td>       
	    </td>   </tr>`

		
		
		
		/*
	    retorno += `<div>` ;	
		retorno += ` ******** total_vaccinations  *****************<br>`  ;		
        retorno += `Media Ultimos ${element.Dias} dias: ${element.Media1} <br>`  ;
	    retorno += `Data Final Media Ultimos ${element.Dias} dias: <font color="red">${element.Data1.toLocaleString()}</font> <br>`  ;

		
			    retorno += `<div>` ;	
		retorno += ` ******** people_vaccinated  *****************<br>`  ;		
        retorno += `Media Ultimos ${element.Dias} dias: ${element.Media2} <br>`  ;
	    	    retorno += `Data Final Media Ultimos ${element.Dias} dias: <font color="blue">${element.Data2.toLocaleString()}</font> <br>`  ;
		
			    retorno += `<div>` ;	
		retorno += ` ******** people_fully_vaccinated  *****************<br>`  ;	
        retorno += `Media Ultimos ${element.Dias} dias: ${element.Media3} <br>`  ;
	    retorno += `Data Final Media Ultimos ${element.Dias} dias: <font color="orange">${element.Data3.toLocaleString()}</font> <br>`  ;
		
		
			
		
		retorno += `<br>`  ;
	
	retorno += `</div>` ;
	
	*/
	});
	
				  retorno += `</tbody>	`;
		var newresumo = "";
		
		
		var objeto =  JSON.parse(data2);
     	var objetinho = objeto[objeto.length-1];
				
		newresumo += `<tr>
            <th>Data</th>
			<th>total_vaccinations</th>
			<th>people_vaccinated</th>
			<th>people_fully_vaccinated</th>
			<th>Data Final Menor Estimada</th>
        </tr>
        </thead>
	    <tbody>
			
			<tr class="active-row">
            <th>${new Date(objetinho.date).toLocaleString()}</th>       
			<th>${objetinho.total_vaccinations}</th>       
			<th>${objetinho.people_vaccinated}</th>       
			<th>${objetinho.people_fully_vaccinated}</th>       
			<th>${objMelhorData.MelhorData.toLocaleString()}</th>       
	    </tr>
	   </tbody>	`;	
	
	
	
	
	
		
	
   objMelhorData.Resumo = newresumo;
   
   
	
	return retorno;
}

function GetDiaPesquisa(data) 
{ 	 
	  var objeto =  JSON.parse(data);	 	
	  	  	 
	  var objetinho = objeto[objeto.length-1];
	  
	  return objetinho.date;
}

function ProcessaRetorono(data,PopulationFinal)
{
  
	  
	    
	  
	  var diasRodar = [ 1, 2, 3, 4, 5 , 6 , 7 , 8 ,9, 10, 15,30 ];
	    
	  var jsonObj = [];		  
	  
	  var DiaPesquisa = GetDiaPesquisa(data);
	  
	
      diasRodar.forEach((element) => {
		  
		  
		var obj = {};	   	 	  	
	  obj.Dias = element;
	  
	  obj.Valor1 = 0;
	  obj.Valor2 = 0;
	  obj.Valor3 = 0;
	  
	  obj.Media1 = f_get_media(obj.Dias,data,1,obj);
	  
	  
	  
	  obj.Media2 = f_get_media(obj.Dias,data,2,obj);
	  obj.Media3 = f_get_media(obj.Dias,data,3,obj);
	  
	  
	  
	  var perc = percentualParametro();
	  
	  obj.Data1 = f_get_data(obj.Media1,((PopulationFinal*2)*perc/100) - obj.Valor1,DiaPesquisa);
	  obj.Data2 = f_get_data(obj.Media2,((PopulationFinal*2)*perc/100)- obj.Valor2,DiaPesquisa);
	  obj.Data3 = f_get_data(obj.Media3, (PopulationFinal*perc/100)- obj.Valor3,DiaPesquisa);
	  
	  jsonObj.push(obj);  
	  })
	  
	  
	  return jsonObj;
	
}


function percentualParametro()
  {
	
    var parameters = location.search.substring(1).split("&");
	

    var temp = parameters[0].split("=");
	
    l = unescape(temp[1]);
	
	if (l == "undefined") {
      return 100;
	}
	
	return l;

  }

function f_get_data(media,total,DiaPesquisa)
{	
	var teste = total/media;
	
	var dateFinal = DiaPesquisa;
	
	return addDays(dateFinal,teste);
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

async function getCoronaData(CoronaCountry) {
let response = await fetch("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/country_data/"+CoronaCountry+".csv");
let data = await response.text();

console.log(data);

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


console.log(jsonObj);
return JSON.stringify(jsonObj);


}


function sortTable(table, dir, n) {
  var rows, switching, i, x, y, shouldSwitch, switchcount = 0;
  switching = true;
  /*Faça um loop que continuará até
   nenhuma troca foi feita:*/
  while (switching) {
    //comece dizendo: nenhuma troca é feita:
    switching = false;
    rows = table.rows;
    /*Faça um loop por todas as linhas da tabela (exceto o
     primeiro, que contém cabeçalhos da tabela):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //comece dizendo que não deve haver alternância:
      shouldSwitch = false;
      /*Obtenha os dois elementos que você deseja comparar,
       um da linha atual e o outro da próxima:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*verifique se as duas linhas devem mudar de lugar,
       com base na direção, asc ou desc:*/
      if (dir == "asc") {
		  
        if (parseFloat(x.innerHTML) > parseFloat(y.innerHTML)) {
          //Nesse caso, marque como uma opção e interrompa o loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (parseFloat(x.innerHTML) < parseFloat(y.innerHTML)) {
          //Nesse caso, marque como uma opção e interrompa o loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*Se um interruptor foi marcado, faça-o
       e marque que uma troca foi feita:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Cada vez que uma troca for concluída, aumente essa contagem em 1:
      switchcount++;
    } else {
      /*Se nenhuma mudança foi feita E a direção for "asc",
       defina a direção para "desc" e execute o loop while novamente.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
