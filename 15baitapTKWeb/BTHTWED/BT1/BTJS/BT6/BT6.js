function TaoBangCuuChuong(n) {
    var s = "<div id='bcc'>";
    for (var i = 1; i <= 10; i++)
        s += String(n) + " x " + String(i) + " = " + String(n * i) + "<br />";
    s += "</div>";
    return s;
}

function TaoDSBangCC(start, end) {
    s = "";
    for (var i = start; i <= end; i++)
        s += TaoBangCuuChuong(i);
    return s;
}

function InBangCC() {
    var start = Number(document.getElementById("start").value);
    var end = Number(document.getElementById("end").value);
    const check = checkSo(start, end);
    console.log(check);
    if (check == -1) {
        return false;
    } else {
        document.getElementById("loi").innerHTML = "Ket qua sau khi nhan <b><i>In bang cuu chuong</i></b>"
        document.getElementById("result").style.border = "1px solid white"
        document.getElementById("result").innerHTML = TaoDSBangCC(start, end);
    }
    return false;
}

function checkSo(start, end) {
    document.getElementById("result").style.border = ""
    if (start > end) {

        document.getElementById("start").value = "";
        document.getElementById("start").focus();
        document.getElementById("result").innerHTML = "";
        document.getElementById("loi").innerHTML = "Số bắt đầu phải bé hơn hoặc bằng số kết thúc";
        return -1;
    }
    if (start < 1 && end > 10) {
        document.getElementById("start").value = "";
        document.getElementById("start").focus();
        document.getElementById("end").value = "";
        document.getElementById("end").focus();
        document.getElementById("result").innerHTML = "";
        document.getElementById("loi").innerHTML = "Số bắt đầu phải lớn 0 và số kết thức phải nhỏ hơn 11";
        return -1;
    }
    if (start < 1) {
        document.getElementById("start").value = "";
        document.getElementById("start").focus();
        document.getElementById("result").innerHTML = "";
        document.getElementById("loi").innerHTML = "Số bắt đầu phải >1";
        return -1;
    }
    if (end > 10) {
        document.getElementById("end").value = "";
        document.getElementById("end").focus();
        document.getElementById("result").innerHTML = "";
        document.getElementById("loi").innerHTML = "Số kết thức phải nhỏ hơn 11";
        return -1;
    }
}