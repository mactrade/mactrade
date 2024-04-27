function onClickHandler() {
    alert("Отправлено!")
 
    let inputs = document.querySelectorAll("input");
 
    let input_values = [];
 
    for (let i = 0; i < inputs.length; i++) {
        
        input_values.push(inputs[i].value);
    }
    console.log("Значения всех полей инпутов :\n\n\n", input_values)
    
}
 
 
let button = document.querySelector('.btn');
button.addEventListener('click', onClickHandler);