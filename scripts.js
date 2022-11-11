function calculateTip(event){
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let ServiceQual = document.getElementById('ServiceQual').value;
    let num0fpeople = document.getElementById('people').value;

    if (bill == '' | ServiceQual == 0){
        alert("Por favor, preencha todos os campos!")
        return;
    }

    if(num0fpeople == "" | num0fpeople <= 1) {
        num0fpeople = 1;
        document.getElementById('each').style.display = "none"
    } else {
        document.getElementById('each').style.display = "block"
    }

    let total = (bill * ServiceQual) / num0fpeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";

}
document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener ('submit', calculateTip);
