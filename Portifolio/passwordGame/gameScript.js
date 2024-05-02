let index = 0;
const password = randomNumber();
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
    check(number);
})

function check(number){
    console.log(password);
    let bulls=0;
    let cows=0;
    if(number.length < 4){
        alert("Precisamos de 4 digitos")
    }else{
        index=index+1;
        for(let i = 0;i<4;i++){
            if(number[i] === password[i]){
                bulls=bulls+1;
            }
            for(let k=0;k<4;k++){
                if(number[k]=== password[i]){
                    cows=cows+1;
                }
            }
        }
        if(bulls>0){
            cows=cows-bulls;
        }
        print(number, bulls, cows);
        console.log(bulls)
        console.log(cows)
    }
}

function randomNumber(){
    let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    digits.sort(function() {
        return 0.5 - Math.random();
    });
    let randomNumber = '';
    for (let i = 0; i < 4; i++) {
        randomNumber += digits[i];
    }

    return randomNumber;
}
function clean(){

}
function print(number, bulls, cows){
    const div = document.getElementById('result');
    let printar = "<p class='return'>"+index+
    " "+number+" "+bulls+"B"+" "+cows+"C"+" </p>"
    div.innerHTML+=printar
}