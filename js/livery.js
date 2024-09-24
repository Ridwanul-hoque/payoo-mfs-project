// function getInputFieldValueById(){
//     const addMoney =document.getElementById('add-money').value
//     return addMoney
// }
// function getInputFieldValueById(id){
//     const inputValues = document.getElementById(id).value
//     return inputValues

// }
function getInputFieldValueById(id){
    const inputValues = document.getElementById(id).value
    const inputNumber = parseFloat(inputValues)
    // console.log(id,inputValues,inputNumber)
    return inputNumber
}
function getTextFieldValueById(id){
    const textValues = document.getElementById(id).innerText
    const textNumber = parseFloat(textValues)
    return textNumber
}


function showSectionById(id){
    document.getElementById("add-btn").classList.add('hidden')
    document.getElementById("cash-out-form").classList.add('hidden')
    document.getElementById("transection-form").classList.add('hidden')
    
    document.getElementById(id).classList.remove('hidden')
}