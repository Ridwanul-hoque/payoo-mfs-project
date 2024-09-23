document.getElementById('btn-cash').addEventListener('click', function(event){
    event.preventDefault()

    const cashOut = document.getElementById('cash-money').value
    const cashOutNumber = parseFloat(cashOut)
    const cashPin = document.getElementById('cash-pin-number').value

    if (cashPin === '1234'){
        // console.log('cashed out')
        const balance =document.getElementById('bank-balance').innerText
        const balanceNumber = parseFloat(balance)

        const newBalance = balanceNumber - cashOutNumber

        document.getElementById('bank-balance').innerText = newBalance
    }
    else{
        alert('nope')
    }
})


document.getElementById('show-cash').addEventListener('click',function(){
    // console.log('clicked')
    document.getElementById('cash-out-form').classList.remove('hidden');

    document.getElementById('add-btn').classList.add('hidden')
})


document.getElementById('show-add').addEventListener('click',function(){
    // console.log('clicked')
    document.getElementById('add-btn').classList.remove('hidden');

    document.getElementById('cash-out-form').classList.add('hidden')
})