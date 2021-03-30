


async function getCoronaData2() {
let response = await fetch("http://cors.io/?https://covid19ireland-geohive.hub.arcgis.com/");
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
return JSON.stringify(jsonObj);


}