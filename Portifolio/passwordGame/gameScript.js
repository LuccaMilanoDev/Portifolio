const value=document.getElementById('number').addEventListener('input', function() {
    if (this.value.length > 4) {
        this.value = this.value.slice(0, 4);
    }
});
const send = document.querySelector('#send');
send.addEventListener("click", function(e){
    e.preventDefault();
    const number = document.querySelector('#number').value;
    console.log(number)
})
