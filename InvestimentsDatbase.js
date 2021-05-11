
   function getFinancesSTAG(valorstag,valorO,valorTesla,valorbtc,ValorEterium,Miota,McDonalds,petro) {
   
   
   
   
   
     var myList = new Array();
	 
	 //Unificando em um so
	 //myList.push(JSON.parse('{"Nome":"BTC eToro","BitCoinsComprado":0.025355,"ValorComprado":1485.04,"PercentualRevolut":1,"ValuesToReturn":null,"BitCoinsFee":0,"valorbitcoin":'+valorbtc[0].price+'}'));
	 //myList.push(JSON.parse('{"Nome":"BTC eToro","BitCoinsComprado":0.003199,"ValorComprado":181.09,"PercentualRevolut":1,"ValuesToReturn":null,"BitCoinsFee":0,"valorbitcoin":'+valorbtc[0].price+'}'));	 
	 //myList.push(JSON.parse('{"Nome":"BTC eToro","BitCoinsComprado":0.000464,"ValorComprado":27.35,"PercentualRevolut":1,"ValuesToReturn":null,"BitCoinsFee":0,"valorbitcoin":'+valorbtc[0].price+'}'));
             //myList.push(JSON.parse('{"Nome":"BTC","BitCoinsComprado":0.000664,"ValorComprado":35.21,"PercentualRevolut":1,"ValuesToReturn":null,"BitCoinsFee":0,"valorbitcoin":'+valorbtc[0].price+'}'));
         
//Vendido parte dia 05/05/2021 pela etoro
//myList.push(JSON.parse('{"Nome":"Bitcoin","BitCoinsComprado":0.029682,"ValorComprado":1728.69,"PercentualRevolut":1,"ValuesToReturn":null,"BitCoinsFee":0,"valorbitcoin":'+valorbtc[0].price+'}'));

//Vendido 10/05/2020 - 09:07
//myList.push(JSON.parse('{"Nome":"Bitcoin","BitCoinsComprado":0.00782,"ValorComprado":458.02,"PercentualRevolut":1,"ValuesToReturn":null,"BitCoinsFee":0,"valorbitcoin":'+valorbtc[0].price+'}')); 
	   
 	  	   
		
	 myList.push(JSON.parse('{"Nome":"STAG","BitCoinsComprado":6,"ValorComprado":206.22,"PercentualRevolut":0,"ValuesToReturn":null,"BitCoinsFee":0,"valorbitcoin":'+valorstag[0].price+'}'));
	 myList.push(JSON.parse('{"Nome":"O-Reit","BitCoinsComprado":4.85,"ValorComprado":312,"PercentualRevolut":0,"ValuesToReturn":null,"BitCoinsFee":0,"valorbitcoin":'+valorO[0].price+'}'));
   myList.push(JSON.parse('{"Nome":"Tesla","BitCoinsComprado":0.27914,"ValorComprado":173,"PercentualRevolut":0,"ValuesToReturn":null,"BitCoinsFee":0,"valorbitcoin":'+valorTesla[0].price+'}'));	 
   
   //new ones
   
      myList.push(JSON.parse('{"Nome":"Ethereum","BitCoinsComprado":0.057533,"ValorComprado":160,"PercentualRevolut":0,"ValuesToReturn":null,"BitCoinsFee":0,"valorbitcoin":'+ValorEterium[0].price+'}'));	 
      myList.push(JSON.parse('{"Nome":"Ethereum","BitCoinsComprado":0.110298,"ValorComprado":455.59,"PercentualRevolut":0,"ValuesToReturn":null,"BitCoinsFee":0,"valorbitcoin":'+ValorEterium[0].price+'}'));	 
   
   
      myList.push(JSON.parse('{"Nome":"MIOTA","BitCoinsComprado":124.170209,"ValorComprado":260,"PercentualRevolut":0,"ValuesToReturn":null,"BitCoinsFee":0,"valorbitcoin":'+Miota.USD+'}'));
	  
	  
	       myList.push(JSON.parse('{"Nome":"MC Donalds","BitCoinsComprado":1,"ValorComprado":234.50,"PercentualRevolut":0,"ValuesToReturn":null,"BitCoinsFee":0,"valorbitcoin":'+McDonalds[0].price+'}'));
		   
	  
	       myList.push(JSON.parse('{"Nome":"Petrobras","BitCoinsComprado":19.618992,"ValorComprado":167.35,"PercentualRevolut":0,"ValuesToReturn":null,"BitCoinsFee":0,"valorbitcoin":'+petro[0].price+'}'));
		   
	   
		//Partifoilio 1   
		   myList.push(JSON.parse('{"Nome":"P - Richard Stroud","BitCoinsComprado":1,"ValorComprado":500,"PercentualRevolut":0,"ValuesToReturn":null,"BitCoinsFee":0,"valorbitcoin":'+valorPRichard+'}'));
	   
	   //Partifoilio 2
	   myList.push(JSON.parse('{"Nome":"P - Spark Liang","BitCoinsComprado":1,"ValorComprado":746.04,"PercentualRevolut":0,"ValuesToReturn":null,"BitCoinsFee":0,"valorbitcoin":'+valorPSparkLiang+'}'));
	   
		   
		   
	  
   
   
   
	 				 				
	 return myList;
	 
}
