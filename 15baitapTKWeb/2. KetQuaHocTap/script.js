String.prototype.isNumber = function() { return /^\d+$/.test(this); }


function tinhDTB() {
    const hk1 = document.getElementById("hk1").value * 1;
    const hk2 = document.getElementById("hk2").value * 1;

    if (hk1 == "") {
        alert("Bạn chưa nhập điểm HK1!!!");
        document.getElementById("hk1").value = "";
        document.getElementById("hk1").focus();
        return -1;
    }
    if (isNaN(hk1) || hk1 < 0 || hk1 > 10) {
        alert("Điểm phải là một số dương < 10.");
        document.getElementById("hk1").value = "";
        document.getElementById("hk1").focus();
        return -1;
    }
    if (hk2 == "") {
        alert("Bạn chưa nhập điểm HK2!!!");
        document.getElementById("hk2").value = "";
        document.getElementById("hk2").focus();
        return -1;
    }
    if (isNaN(hk2) || hk2 < 0 || hk2 > 10) {
        alert("Điểm phải là một số dương < 10.");
        document.getElementById("hk2").value = "";
        document.getElementById("hk2").focus();
        return -1;
    }

    return (hk2 * 2 + hk1) / 3;
}

function OnSubmit() {
    var dtb = tinhDTB();
    if (dtb == -1)
        return false;
    // Show dtb
    dtb = dtb.toFixed(2);
    document.getElementById("dtb").value = dtb;

    // Show kết quả
    if (dtb >= 5)
        document.getElementById("kq").value = "Được lên lớp";
    else
        document.getElementById("kq").value = "Ở lại lớp";

    // Show Xếp loại
    if (dtb >= 8)
        document.getElementById("xl").value = "Giỏi";
    else if (dtb > 6.5)
        document.getElementById("xl").value = "Khá";
    else if (dtb >= 5)
        document.getElementById("xl").value = "Trung bình";
    else
        document.getElementById("xl").value = "Yếu";

    console.log(dtb);
    return false;
};