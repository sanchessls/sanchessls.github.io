function F_CIDADANIA(width,height){
	var datainciial = new Date(2020,5,9);		
	var dataFinal = new Date(2025,5,9);
	var Today = new Date();
	
	console.log(datainciial.toLocaleString());
	console.log(dataFinal.toLocaleString());
	console.log(Today.toLocaleString());
	
    var totaldias = DayDiff(datainciial,dataFinal);
	
	var totaldiasFaltando = DayDiff(Today,dataFinal);
	
	var diasPassados = totaldias - totaldiasFaltando;
	
	var percentual = roundTo(((diasPassados / totaldias)*100) ,2);
	
	console.log(totaldias);
	
	console.log(totaldiasFaltando);
	
	console.log(diasPassados);	
	
	console.log(percentual);	
	
	return `<span>${percentual}</span><progress id="file" value="${percentual}" max="100" style="width: ${width}px;height: ${height}px;" > ${percentual} </progress>` ;
}

function P_ATUALIZA(componente,width,height){
	  componente.innerHTML = F_CIDADANIA(width,height);
}


function DayDiff(day1,day2)
{		
	var Difference_In_Time = day2.getTime() - day1.getTime();   
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
	return Difference_In_Days;

}


function roundTo(num,num2) {    
    return +(Math.round(num + "e+"+num2)  + "e-" + num2);
}