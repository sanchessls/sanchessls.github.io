var formatterNumber = new Intl.NumberFormat('en-UK', {
  //style: 'currency',
  //currency: 'EUR'

  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
});

//Dias Rodar
var diasRodar = [ 1,2,3,4,5,6,7,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

function GetMaxDias()
{
	return diasRodar[diasRodar.length-1];
}


async function F_RETORNA_DADOS(){
	
	return await getCoronaData();
}




async function F_TableCorona(objMelhorData,PopulationFinal,CoronaCountry,GeneralObjectList,TotalPerc)
{
			 	   			
				
	let data33 = await getCoronaData(CoronaCountry);
	
	var data2 = f_TrataLista(data33,CoronaCountry);
	
	let objRetorno = ProcessaRetorono(data2,PopulationFinal,GeneralObjectList,TotalPerc)
	
	var retorno = "";
	
			
		
		retorno += `<tr>
            <th>Tipo</th>
			<th>total_vaccinations</th>
			<th>Data Final Estimada</th>
			<th>people_vaccinated</th>
			<th>Data Final Estimada</th>
			<th>people_fully_vaccinated</th>
			<th>Data Final Estimada</th>
			<th>Media de Novos Casos</th>
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
			<td>${formatterNumber.format(element.Media1)}</td>       
			<td>${element.Data1.toLocaleString()}</td>       
			<td>${formatterNumber.format(element.Media2)}</td>       
			<td>${element.Data2.toLocaleString()}</td>       
			<td>${formatterNumber.format(element.Media3)}</td>       
			<td>${element.Data3.toLocaleString()}</td>       
			<td>${formatterNumber.format(element.MediaNovosCasos)}</td>       
			
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
		var perc1 = objetinho.total_vaccinations / (PopulationFinal*2) * 100;
		var perc2 = objetinho.people_vaccinated / (PopulationFinal*2) * 100;
		var perc3 = objetinho.people_fully_vaccinated / (PopulationFinal) * 100;
				
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
			<th>${formatterNumber.format(objetinho.total_vaccinations)} From ${formatterNumber.format(PopulationFinal*2)} (${formatterNumber.format(perc1)}%)</th>       
			<th>${formatterNumber.format(objetinho.people_vaccinated)} From ${formatterNumber.format(PopulationFinal*2)} (${formatterNumber.format(perc2)}%)</th>       
			<th>${formatterNumber.format(objetinho.people_fully_vaccinated)} From ${formatterNumber.format(PopulationFinal)} (${formatterNumber.format(perc3)}%)</th>       
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

function ProcessaRetorono(data,PopulationFinal,GeneralObjectList,TotalPerc)
{  	   	   

	  var jsonObj = [];		  
	  
	  var DiaPesquisa = GetDiaPesquisa(data);
	  
	
      diasRodar.forEach((element) => {
		  
		  
		var obj = {};	   	 	  	
	  obj.Dias = element;
	  
	  obj.Valor1 = 0;
	  obj.Valor2 = 0;
	  obj.Valor3 = 0;
	  
	  obj.Media1 = f_get_media(obj.Dias,data,1,obj,GeneralObjectList); 	  	  
	  obj.Media2 = f_get_media(obj.Dias,data,2,obj);
	  obj.Media3 = f_get_media(obj.Dias,data,3,obj);
	    
	  
	  
	  var perc = TotalPerc;
	  
	  obj.Data1 = f_get_data(obj.Media1,((PopulationFinal*2)*perc/100) - obj.Valor1,DiaPesquisa);
	  obj.Data2 = f_get_data(obj.Media2,((PopulationFinal*2)*perc/100)- obj.Valor2,DiaPesquisa);
	  obj.Data3 = f_get_data(obj.Media3, (PopulationFinal*perc/100)- obj.Valor3,DiaPesquisa);
	  
	  jsonObj.push(obj);  
	  })
	  
	  
	  return jsonObj;
	
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

function f_get_media(dias,data, type,objvalor,GeneralObjectList)
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
			   
		var UltimoObj = total;		
		
		var UltimoObjPegar = total-dias;
		
				
	    var indexTotal = 0;
		var totalCases = 0.0;
		
		//outra coisa
		for	(i=UltimoObj;i > UltimoObjPegar;i--)
		{	
            var	casosnodia = GetCasesDay(objeto[i-1],GeneralObjectList);								
			
			totalCases += parseFloat(casosnodia);
			
			indexTotal ++ ;		
		}		
		
		
		var median = totalCases / indexTotal;		

		objvalor.MediaNovosCasos = median;						
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
	
	
	
	
    if (valor < 0){valor = 0;}
	
	return valor;
}

async function getCoronaData(CoronaCountry) {
let response = await fetch("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/country_data/"+CoronaCountry+".csv");
let data = await response.text();


data = String(data).replaceAll("Oxford/AstraZeneca, ", "Oxford/AstraZeneca");
data = String(data).replaceAll("Moderna, ", "Moderna");
data = String(data).replaceAll("Pfizer/BioNTech, ", "Pfizer/BioNTech");
data = String(data).replaceAll("Johnson&Johnson, ", "Johnson&Johnson");
data = String(data).replaceAll("Beijing, ", "Beijing");
data = String(data).replaceAll("Sinopharm, ", "Sinopharm");
data = String(data).replaceAll("Oxford, ", "Oxford");
data = String(data).replaceAll("AstraZeneca, ", "AstraZeneca");

data = String(data).replaceAll("Covaxin, ", "Covaxin");
data = String(data).replaceAll("Beijing, ", "Beijing");
data = String(data).replaceAll("inopharm, ", "inopharm");
data = String(data).replaceAll("Sinopharm, ", "Sinopharm");

data = String(data).replaceAll("Wuhan, ", "Wuhan");




var arr = String(data).split('\n');

var jsonObj = [];
var headers = arr[0].split(',');



for(var i = 1; i < arr.length; i++) {

  var data2 = arr[i].split(',');  

  console.log(arr[i]);
  console.log(data2);
    
  var obj = {};
  for(var j = 0; j < data2.length; j++) {
	  
     obj[headers[j].trim()] = data2[j].trim();
  }
  if (obj.location != "") {  jsonObj.push(obj); }
}



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
