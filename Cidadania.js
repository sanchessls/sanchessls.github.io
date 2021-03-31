function F_CIDADANIA(width,height,sizePerc,newDataInicial,newDataFinal){
	var datainciial = new Date(2020,5,9);		
	var dataFinal = new Date(2025,5,9);
	
    console.log("Chegou dos parametros");
	console.log(newDataInicial);
	console.log(newDataFinal);
	if (newDataInicial != null)
	{
		console.log("entrou");
		datainciial = newDataInicial;
	}
	
	if (newDataFinal != null)
	{
		console.log("entrou2");
		dataFinal = newDataFinal;
	}
	
	
	
	
	var Today = new Date();

    var totaldias = DayDiff(datainciial,dataFinal);
	
	var difference = dataFinal.getTime() - Today.getTime();
	
	var totaldiasFaltando = DayDiff(Today,dataFinal);
	
	var diasPassados = totaldias - totaldiasFaltando;
	
	var percentual = ((diasPassados / totaldias)*100) ;
		
    
	var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);	
	var years = Math.floor(days / 365);

    days  %= 365;
    hours %= 24;
    minutes %= 60;
    seconds %= 60;
	
	var stringCompleta = "";
	
	if (years > 0)
	{
		stringCompleta =  stringCompleta + years + " Year(s) ";
	}
	
	if (days > 0)
	{
		stringCompleta =  stringCompleta + days + " Day(s) ";
	}
	
    if (hours > 0)
	{
		stringCompleta =  stringCompleta + hours + " Hour(s) ";
	}
	
	if (minutes > 0)
	{
		stringCompleta =  stringCompleta + minutes + " Minute(s) ";
	}
	
	if (seconds > 0)
	{
		stringCompleta =  stringCompleta + seconds + " Second(s) ";
	}

	
	return `<span Style="font-size: ${sizePerc}%;">${ String(roundTo(percentual,7,7)).lpad("0",10)} %</span><br>
	       <span Style="font-size: ${sizePerc}%;">${stringCompleta}</span>
	       <progress id="file" value="${percentual}" max="100" style="width: ${width}px;height: ${height}px;" > ${percentual} </progress>` ;
}

function P_ATUALIZA(componente,width,height,sizePerc,data1,data2){
	  componente.innerHTML = F_CIDADANIA(width,height,sizePerc,data1,data2);
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

String.prototype.lpad = function(padString, length) {
    var str = this;
    while (str.length < length)
        str = str + padString;
    return str;
}