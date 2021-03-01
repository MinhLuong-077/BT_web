function getRadioValue(name) {
    var ele = document.getElementsByName(name);

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            return ele[i].value;
    }
}

function submitHandle() {
    var userName = document.getElementById("name").value;
    var address = document.getElementById("diachi").value;
    var phoneNumber = document.getElementById("sdt").value;
    // var isVietNamese = document.getElementById("khachVN").checked;
    var tour = document.getElementById("tour").value;
    var vehicle = getRadioValue('phuongtien');
    var numAdults = document.getElementById("nguoilon").value;
    var numChild = document.getElementById("treem").value;
    // var note = document.getElementById("ghichu").value;
    if (userName == "" || address == "" ||
        phoneNumber == "" || tour == "" ||
        vehicle == "" || numAdults == "" || numChild == "") {
        document.getElementById("notification").innerHTML = "Hãy điền đủ thông tin";
        return;
    }
    document.getElementById("notification").innerHTML = "Bạn đã đăng ký thành công!";
}