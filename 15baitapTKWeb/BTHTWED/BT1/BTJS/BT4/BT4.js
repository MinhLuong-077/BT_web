function ktNamNhuan(y) {
    if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0)
        return true;
    return false;
}

function calResult(month, year) {
    const numOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (ktNamNhuan(year))
        numOfMonth[1] = 29;
    return numOfMonth[month - 1];
}

function getYear() {

    var year = document.getElementById("year").value;
    if (isNaN(year) || year < 0) {
        alert("Năm phải là một số nguyên dương.");
        return -1;
    }

    return year;
}

function getMonth() {
    var month = document.getElementById("month").value;
    if (isNaN(month) || month <= 0) {
        alert("Tháng phải là một số nguyên dương lớn hơn 0");
        return -1;
    }
    if (month > 12) {
        alert("Tháng phải là một số nguyên dương từ 1->12");
        return -1;
    }
    return month
}

function OnSubmit() {
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var year1 = getYear();
    var month2 = getMonth();
    if (month2 == -1 || year1 == -1)
        return false;
    var ngay = calResult(month, year);
    document.getElementById("ketqua").value = "Tháng " + month + " năm " + year + " có " + ngay + " ngày.";
    return false;
}