document.getElementById('btn-add').addEventListener('click',function(event){
    event.preventDefault()

    const addMoney = document.getElementById('add-money').value
    const pinNumber =document.getElementById('pin-number').value

    if (pinNumber ==='1234'){
        console.log('adding money')
        
        const balance = document.getElementById('bank-balance').innerText
        console.log(balance)

        const addMoneyNumber = parseFloat(addMoney)
        const balanceNumber = parseFloat(balance)
        const newBalance = addMoneyNumber + balanceNumber
        console.log(newBalance)

        document.getElementById('bank-balance').innerText =newBalance

    }
    else{
        alert("nope")
    }
})