function TaoBangCuuChuong(n) {
    var s = "<div id='bcc'>";
    for (var i = 1; i <= 10; i++)
        s += String(n) + " x " + String(i) + " = " + String(n * i) + "<br/>";
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
    const start = document.getElementById("start").value * 1;
    const end = document.getElementById("end").value * 1;
    console.log(start, end);

    if (start > end) {
        alert("Số bắt đầu phải bé hơn hoặc bằng số kết thúc");
        document.getElementById("start").value = "";
        document.getElementById("start").focus();
        return false;
    }

    document.getElementById("result").innerHTML = TaoDSBangCC(start, end);
    return false;
}