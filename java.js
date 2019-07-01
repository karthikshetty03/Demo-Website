  
function foundation()
{
	alert('course package includes HTML,CSS,JAVASCRIPT');
}

function special()
{
	alert('course package includes FOUNDATION package + AJAX,JQUERY');
}

function advanced()
{
	alert('course package includes SPECIAL package + PHP,MySQL');
}

      function displayTime() {
        let date = new Date();
        let time = date.toLocaleTimeString();
        document.querySelector('#clock').textContent = time;
      }

      displayTime();
      const createClock = setInterval(displayTime, 1000);
