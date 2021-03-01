function printHello() {
    var userName = document.getElementById("name").value;
    if (userName == "") {
        document.getElementById("printLine").innerHTML = "Bạn chưa điền tên!!";
        return;
    }
    document.getElementById("printLine").innerHTML = "Xin chào bạn " + '<b id="red_color">' + userName + "<b>";
}