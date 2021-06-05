async function getCurrentProcessingDate()
{
		  console.log("andre Sanches 001.0001");
 
let response =  await fetch("https://enterprise.gov.ie/en/What-We-Do/Workplace-and-Skills/Employment-Permits/Current-Application-Processing-Dates/Current-Processing-Dates-for-Employment-Permits.html", { mode: 'no-cors'})
console.log("andre Sanches 001.0002");
console.log(response);

let data = await response.text();

console.log(data);

console.log("andre Sanches 001.0003");

return data;

}