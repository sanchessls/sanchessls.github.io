


async function getCoronaData2() {
	
	
var obj = jQuery.get("https://www.etoro.com/markets/btc");

let data = await obj;

return data;

}