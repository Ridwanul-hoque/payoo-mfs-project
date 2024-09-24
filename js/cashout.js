// document.getElementById('btn-cash').addEventListener('click', function(event){
//     event.preventDefault()

//     const cashOut = document.getElementById('cash-money').value
//     const cashOutNumber = parseFloat(cashOut)
//     const cashPin = document.getElementById('cash-pin-number').value

//     if (cashPin === '1234'){
//         // console.log('cashed out')
//         const balance =document.getElementById('bank-balance').innerText
//         const balanceNumber = parseFloat(balance)

//         const newBalance = balanceNumber - cashOutNumber

//         document.getElementById('bank-balance').innerText = newBalance
//     }
//     else{
//         alert('nope')
//     }
// })


// document.getElementById('show-cash').addEventListener('click',function(){
//     // console.log('clicked')
//     document.getElementById('cash-out-form').classList.remove('hidden');

//     document.getElementById('add-btn').classList.add('hidden')
// })


// document.getElementById('show-add').addEventListener('click',function(){
//     // console.log('clicked')
//     document.getElementById('add-btn').classList.remove('hidden');

//     document.getElementById('cash-out-form').classList.add('hidden')
// })
document.getElementById('btn-cash').addEventListener('click', function(event){
    event.preventDefault()

    const cashOut = getInputFieldValueById('cash-money')
    const pinNumber = getInputFieldValueById('cash-pin-number') 
    // console.log('inside', cashOut, pinNumber)
    if(isNaN(cashOut)){
        alert('invalid');
        return
    }
    if (pinNumber === 1234){
        const balance = getTextFieldValueById('bank-balance');
        if (cashOut > balance){
            alert('not enough')
            return
        }

        const newBalance = balance - cashOut
        // console.log(balance, addMoney)

        document.getElementById('bank-balance').innerText = newBalance


        const div = document.createElement('div');
        div.classList.add('bg-yellow-300')
        div.innerHTML = `
        <h4 class ="text-2xl font-bold"> Cash Out </h4> 
        <p> ${cashOut} withdraw. New Balance ${newBalance} </p>`

        document.getElementById('transection-container').appendChild(div)
    }
    else{
        alert('nope')
    }
})