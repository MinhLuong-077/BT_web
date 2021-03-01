String.prototype.isNumber = function() { return /^\d+$/.test(this); }

function getYear() {
    const year = document.getElementById("duong-lich").value * 1;

    if (year == "") {
        alert("Bạn chưa nhập năm");
        document.getElementById("duong-lich").value = "";
        document.getElementById("duong-lich").focus();
        return -1;
    }
    if (isNaN(year) || year < 0) {
        alert("Năm phải là một số nguyên dương.");
        document.getElementById("duong-lich").value = "";
        document.getElementById("duong-lich").focus();
        return -1;
    }
    return year;
}

function calResult(year) {
    can = ['Canh', 'Tân', 'Nhâm', 'Quí', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ'];
    chi = ['Thân', 'Dậu', 'Tuất', 'Hợi', 'Tí', 'Sửu', 'Dần', 'Mẹo', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi'];
    images = ['than.jpg', 'dau.jpg', 'tuat.jpg', 'hoi.jpg', 'ti.jpg', 'suu.jpg', 'dan.jpg', 'meo.jpg', 'thin.jpg', 'ty.jpg', 'ngo.jpg', 'mui.jpg'];

    const s = can[year % 10] + " " + chi[year % 12];
    const path = "./images/" + images[year % 12];

    document.getElementById("am-lich").value = s;
    document.getElementById("img").setAttribute('src', path);
    document.getElementById("img").setAttribute('style', 'width: 150px; height: 150px; border-radius: 10%');
}

function OnSubmit() {
    var year = getYear();
    if (year == -1)
        return false;
    calResult(year);
    return false;
}