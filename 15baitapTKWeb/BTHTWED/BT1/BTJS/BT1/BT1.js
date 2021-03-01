function myFunciton() {
    var chieuDai = document.getElementById("length").value;
    var chieuRong = document.getElementById("width").value;
    if (chieuDai == "" || chieuRong == "") {
        alert("Hãy điền lại đầy đủ");
    } else {
        dienTichHcn = parseFloat(chieuDai) * parseFloat(chieuRong);
        document.getElementById('result').value = dienTichHcn;
    }
}