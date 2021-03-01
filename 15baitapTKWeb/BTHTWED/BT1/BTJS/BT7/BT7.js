function DocSo() {
    var ChuSo = ["Không", "Một", "Hai", "Ba", "Bốn", "Năm", "Sáu", "Bảy", "Tám", "Chín", "Mười"];
    var a1 = ["Linh", "Mười", "Hai Mươi ", "Ba mươi", "Bốn Mươi", "Năm Mươi", "Sáu Mươi", "Bảy Mươi", "Tám Mươi", "Chín Mươi"];
    var n = document.getElementById("Nhap").value;
    if (n > 999 || n < 0) {
        alert("Vui lòng nhập lại!");
        document.getElementById("Nhap").value = "";
        return false;
    }
    var ketQua = "";
    var div = Math.floor(n / 100);
    var div2 = Math.floor((n % 100) / 10);
    var div3 = Math.floor(n % 10);
    if (div > 0) {
        ketQua += ChuSo[div] + " trăm ";
        if (div2 == 0 && div3 == 0) {}
        if (div2 > 0 && div3 == 0) {
            ketQua += a1[div2];
        }
        if (div2 == 0 && div3 > 0) {
            ketQua += a1[0] + " " + ChuSo[div3];
        }
        if (div2 > 0 && div3 > 0) {
            ketQua += a1[div2] + " " + ChuSo[div3];
        }
    } else {
        if (div2 == 0) {
            ketQua += ChuSo[div3];
        }
        if (div3 == 0) {
            ketQua += a1[div2]
        }
        if (div2 > 0 && div3 > 0) {
            ketQua += a1[div2] + " " + ChuSo[div3];
        }
        if (div3 == 0 && div2 == 0) {
            ketQua += ChuSo[div3];
        }
    }
    document.getElementById("ketqua").value = ketQua;
    console.log(ketQua);
    return false;
}