function myFunciton() {
    var d1 = document.getElementById("length").value;
    var d2 = document.getElementById("width").value;
    if (d1 == "" || d2 == "" || d1 > 10 || d2 > 10) {
        check(d1, d2)
    } else {
        check(d1, d2)
        dtb = (parseFloat(d1) + parseFloat(d2) * 2) / 3;
        document.getElementById('DTB').value = dtb;
        if (dtb >= 5) {
            if (dtb >= 8) {
                document.getElementById("hocluc").value = "Giỏi";
            } else if (6.5 <= dtb && dtb < 8) {
                document.getElementById("hocluc").value = "Khá";
            } else if (5 <= dtb && dtb < 6.5) {
                document.getElementById("hocluc").value = "Trung bình";
            }
            document.getElementById('result').value = "Được lên lớp";
        } else {
            document.getElementById('result').value = "Ở lại lớp";
            document.getElementById("hocluc").value = "Yếu";
        }
    }
}

function check(d1, d2) {
    if (d1 == "") {
        document.getElementById("form-message").innerHTML = "Please enter your name";
        document.getElementById('result').value = "";
        document.getElementById("hocluc").value = "";
        document.getElementById('DTB').value = "";
        document.getElementById("length").style.border = "2px solid #b1154a";
    } else {
        document.getElementById("form-message").innerHTML = "";
        document.getElementById("length").style.border = "";
    }
    if (d1 > 10) {
        document.getElementById("form-message").innerHTML = "Please enter ";
        document.getElementById("length").style.border = "2px solid #b1154a";
    }
    if (d2 == "") {
        document.getElementById("form-message1").innerHTML = "Please enter your name";
        document.getElementById("width").style.border = "2px solid #b1154a";
        document.getElementById('result').value = "";
        document.getElementById("hocluc").value = "";
        document.getElementById('DTB').value = "";
    } else {
        document.getElementById("form-message1").innerHTML = "";
        document.getElementById("width").style.border = "";
    }
    if (d2 > 10) {
        document.getElementById("form-message1").innerHTML = "Please enter ";
        document.getElementById("width").style.border = "2px solid #b1154a";
    }

}