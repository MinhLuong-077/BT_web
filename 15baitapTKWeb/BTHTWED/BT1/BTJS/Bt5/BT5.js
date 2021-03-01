function Tong(start, end) {
    var s = 0;
    for (var i = start; i <= end; i++)
        s += i
    return s;
}

function TongChan(start, end) {
    var s = 0;
    if (start % 2 != 0)
        start += 1;
    for (var i = start; i <= end; i += 2)
        s += i
    return s;
}

function Tich(start, end) {
    var s = 1;
    for (var i = start; i <= end; i++)
        s *= i
    return s;
}


function calResult(month, year) {
    const numOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (ktNamNhuan(year))
        numOfMonth[1] = 29;
    return numOfMonth[month - 1];
}

function OnSubmit() {
    const start = document.getElementById("start").value * 1;
    const end = document.getElementById("end").value * 1;
    console.log(start, end);

    if (start > end) {
        alert("Số bắt đầu phải bé hơn hoặc bằng số kết thúc");
        document.getElementById("start").value = "";
        document.getElementById("start").focus();
        return false;
    }

    document.getElementById("sum").value = Tong(start, end);
    document.getElementById("multiple").value = Tich(start, end);
    document.getElementById("sum-even").value = TongChan(start, end);
    document.getElementById("sum-old").value = Tong(start, end) - TongChan(start, end);
    document.getElementById("sum").style.backgroundColor = "pink";
    document.getElementById("multiple").style.backgroundColor = "pink";
    document.getElementById("sum-even").style.backgroundColor = "pink";
    document.getElementById("sum-old").style.backgroundColor = "pink";
    return false;
}