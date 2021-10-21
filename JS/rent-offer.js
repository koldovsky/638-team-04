 const clockContainer = document.querySelector('.clock');
setInterval( () => clockContainer.innertext = new Date().toLocaleTimeString(), 1000 ); 