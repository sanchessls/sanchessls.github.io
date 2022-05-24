async function F_SABARA()
{
	return await getData();
}

async function getData() {
let response = await fetch("https://telegov.njportal.com/njmvc/AppointmentWizard/17", {
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin':'*',
	'Access-Control-Allow-Method':'GET, OPTIONS, POST, PUT'
  }
})
  .then(response => response.json())
.then(data => { return data});


//let data = await response.text();

//return JSON.stringify(data);

//return JSON.stringify(jsonObj);


}
