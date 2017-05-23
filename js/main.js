function checkPro() {
    var input1 = document.getElementsByName('input1')[0],
        input2 = document.getElementsByName('input2')[0],
        input3 = document.getElementsByName('input3')[0],
        input4 = document.getElementsByName('input4')[0],
        btnPro = document.getElementsByName('btnPro')[0];


    if ((input1.checked) || (input2.checked) || (input4.checked) || (input4.checked))
        btnPro.disabled = '';
    else
        btnPro.disabled = 'disabled';
}
function checkEnter() {
    var input5 = document.getElementsByName('input5')[0],
        input6 = document.getElementsByName('input6')[0],
        btnEnter = document.getElementsByName('btnEnter')[0];


    if ((input5.checked) || (input6.checked))
        btnEnter.disabled = '';
    else
        btnEnter.disabled = 'disabled';
}
