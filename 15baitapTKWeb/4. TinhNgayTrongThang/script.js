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

function OnSubmit() {
    const month = document.getElementById("month").value * 1;
    const year = document.getElementById("year").value * 1;
    console.log(month, year);

    document.getElementById("ketqua").innerHTML = `Tháng ${month}/${year} có ${calResult(month, year)} ngày.`;
    return false;
}