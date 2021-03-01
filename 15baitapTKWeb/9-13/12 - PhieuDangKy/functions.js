function getRadioValue(name) {
    var ele = document.getElementsByName(name);

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            return ele[i].value;
    }
}

function submitHandle() {
    var userName = document.getElementById("fname").value;
    var address = document.getElementById("diachi").value;
    var phoneNumber = document.getElementById("sdt").value;
    var gender = getRadioValue('gender');
    var job = document.getElementById("nghenghiep").value;
    var product = document.getElementById("sanpham").value;
    var guess = document.getElementById("dudoan").value;
    if (userName == "" || address == "" ||
        phoneNumber == "" || gender == "" ||
        job == "" || product == "" || guess == "") {
        document.getElementById("notification").innerHTML = "Hãy điền đủ thông tin";
        return;
    }
    document.getElementById("notification").innerHTML = "Bạn đã đăng ký thành công!";
}