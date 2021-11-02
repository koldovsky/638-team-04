(function () {
    const form = document.querySelector('.contact-form-nodejs');
    
    async function handleSubmit(event) {
      event.preventDefault();
      const status = document.querySelector('.contact-form-status');
    //   const data = new FormData(event.target);
      const data = JSON.stringify({
          name: document.querySelector('.contact-form-nodejs input[name=user-name]').value,
          tel: document.querySelector('.contact-form-nodejs input[name=user-tel]').value,
          datein: document.querySelector('.contact-form-nodejs input[name=user-datein]').value,
          dateout: document.querySelector('.contact-form-nodejs input[name=user-dateout]').value
      });
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)

})();