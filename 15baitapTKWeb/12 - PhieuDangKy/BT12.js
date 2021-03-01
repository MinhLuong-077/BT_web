function thongBao() {
    var userName = document.getElementById("idname").value;
    var address = document.getElementById("dc").value;
    var phoneNumber = document.getElementById("idphone").value;
    var guess = document.getElementById("songuoi").value;
    if (userName == "" || address == "" ||
        phoneNumber == "" ||
        guess == "") {
        document.getElementById("thongbao").innerHTML = "Hãy điền đủ thông tin";
        return;
    }
    document.getElementById("thongbao").innerHTML = "Bạn đã đăng ký thành công!";
}