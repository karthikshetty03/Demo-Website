let enable=document.querySelector('#bg1');

document.addEventListener("DOMContentLoaded", function() {


document.querySelector('#bg1').disabled=true;
document.querySelector('#pay').disabled=true;

});


var select = document.querySelector('select');
var para = document.querySelector('div.write');
let html=document.querySelector('#bg');
select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

 if (choice === 'adv') { html.style.backgroundColor = 'goldenrod';
  html.style.color = 'black';
    para.textContent = 'You have selected ADVANCED package as the desired course. Please pay the fees for the same and start your oourse!';
  } else if (choice === 'spec') { html.style.backgroundColor = 'black';
  html.style.color = 'white';
    para.textContent = 'You have selected SPECIAL package as the desired course.Please pay the fees for the same and start your oourse!';
  } else if (choice === 'found') { html.style.backgroundColor = 'white';
  html.style.color = 'black';
    para.textContent = 'You have selected FOUNDATION package as the desired course.Please pay the fees for the same and start your oourse!';
  } else {html.style.backgroundColor='transparent';
    para.textContent = '';
  }
}
function greet()

{
	
	let name = document.querySelector('#val').value.toUpperCase();
	
	alert(' Hello ' + name + ' nice to see you !');    
}


const form = document.getElementById('form1');
let pass1=document.querySelector("#pass1");
let pass2=document.querySelector("#pass2");
let afsub=document.querySelector("#afsub");
let passinfo=document.querySelector("#passinfo");
let remform=document.getElementById('form1');


form.addEventListener('submit',function(event){
if(pass1.value.length<5 )
{
passinfo.textContent='PASSWORD length should be atleast five characters. Please try again';
passinfo.style.backgroundColor="blue";
passinfo.style.color="white";
event.preventDefault();  	
}

 else if(pass1.value===pass2.value && pass1.value.length>=5)
{
	{


remform.parentNode.removeChild(remform);
afsub.textContent='REGISTRATION COMPLETED SUCCESSFULLY !' ;
afsub.style.backgroundColor="goldenrod";
afsub.style.color="black";

document.querySelector('#bg1').disabled=false;

}

}


else
{
passinfo.textContent='PASWORDS do not match. Please try again';
passinfo.style.backgroundColor="red";
passinfo.style.color="white";
event.preventDefault();   
}




});



let a1=document.getElementById('a1');
let a2=document.getElementById('a2');
let a3=document.getElementById('a3');
let pay=document.getElementById('pay');

enable.addEventListener('change', setpay);
pay.addEventListener('change',setpay);
function setpay()
{
	if(enable.value!=='a')
	{
      document.querySelector('#pay').disabled=false;
    
if(pay.value==='CREDIT/DEBIT CARD')
{
	if(confirm('Are you sure ?'))
	{
		a1.textContent='PROCEED TO PAYMENT BY CREDIT/DEBIT CARD';document.querySelector('#pay').disabled=true;
	a1.style.backgroundColor="black";
	a1.style.color="white";
    }

	
}
else if(pay.value==='through')
{
	if(confirm('Are you sure ?'))
	{
		a2.textContent='PROCEED TO PAYMENT through PAYTM/TEZ/BHIM UPI';document.querySelector('#pay').disabled=true;
	a2.style.backgroundColor="black";
	}
	
}
else if(pay.value==='INTERNET BANKING')
{
   if(confirm('Are you sure ?'))
	{
		a3.textContent='PROCEED TO PAYMENT BY INTERNET BANKING ';document.querySelector('#pay').disabled=true;
	a3.style.backgroundColor="black";
	
	}
	
}

}
else
document.querySelector('#pay').disabled=true;
}

