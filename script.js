function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
function openLink(url) {
    window.open(url, '_blank');
}
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyxkG_ba9nLCkdb5Ee0-mYu8EYF-yN-us4mJ_NVHdMYLlcVkFR9ceOhpTeDF-tMBCkH/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg= document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent Successfully"
                setTimeout(function(){
                    msg.innerHTML = "" 
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })