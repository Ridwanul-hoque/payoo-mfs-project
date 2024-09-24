// document.getElementById('btn-add').addEventListener('click',function(event){
//     event.preventDefault()

//     const addMoney = getInputFieldValueById('add-money');
//     const pinPass = getInputFieldValueById('pin-number');
//     console.log('add money',addMoney)
//     console.log('correct',pinPass)

    // const addMoney = document.getElementById('add-money').value
    // const pinNumber =document.getElementById('pin-number').value

    // if (pinNumber ==='1234'){
    //     console.log('adding money')
        
    //     const balance = document.getElementById('bank-balance').innerText
    //     console.log(balance)

    //     const addMoneyNumber = parseFloat(addMoney)
    //     const balanceNumber = parseFloat(balance)
    //     const newBalance = addMoneyNumber + balanceNumber
    //     console.log(newBalance)

    //     document.getElementById('bank-balance').innerText =newBalance

    // }
    // else{
    //     alert("nope")
    // }
// })
document.getElementById('btn-add').addEventListener('click',function(event){
    event.preventDefault()

    const addMoney = getInputFieldValueById('add-money')
    const pinPass = getInputFieldValueById('pin-number')

    if(isNaN(addMoney)){
        alert('invalid');
        return
    }
    if (pinPass === 1234){
        const balance = getTextFieldValueById('bank-balance')
        const newBalance = balance + addMoney
        // console.log(balance, addMoney)

        document.getElementById('bank-balance').innerText = newBalance

        /* transection append part */
        const p = document.createElement('p')
        p.innerText = `Added: ${addMoney} Tk. Balance: ${newBalance}`
        console.log(p);

        document.getElementById('transection-container').appendChild(p)
    }
    else{
        alert('nope')
    }
})