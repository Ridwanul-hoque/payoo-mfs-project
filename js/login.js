document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault()
    console.log("CLICKED")
    const phoneNumber = document.getElementById('phone-number').value
    const pinNumber = document.getElementById('pin-number').value
    console.log(phoneNumber)
    console.log(pinNumber)
    
    // this temporary way
    if(phoneNumber === '5' && pinNumber === '1234'){

        console.log('logged in');
        window.location.href = '/home.html'
    }
    else{
        alert('wrong')
    }
})