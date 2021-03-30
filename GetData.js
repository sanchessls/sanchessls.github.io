


async function getCoronaData2() {
	
	
var obj = jQuery.get("https://covid19ireland-geohive.hub.arcgis.com/");

let data = await obj;

return data;

}