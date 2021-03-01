String.prototype.isNumber = function() { return /^\d+$/.test(this); }

function calArea() {
    const h = document.getElementById("val-height").value * 1;
    const w = document.getElementById("val-width").value * 1;

    if (h == "") {
        alert("Bạn chưa nhập chiều dài!!!");
        document.getElementById("val-height").value = "";
        document.getElementById("val-height").focus();
        return -1;
    }
    if (isNaN(h) || h <= 0) {
        alert("Chiều dài phải là một con số dương.");
        document.getElementById("val-height").value = "";
        document.getElementById("val-height").focus();
        return -1;
    }
    if (w == "") {
        alert("Bạn chưa nhập chiều rộng!!!");
        document.getElementById("val-width").value = "";
        document.getElementById("val-width").focus();
        return -1;
    }
    if (isNaN(w) || w <= 0) {
        alert("Chiều rộng phải là một con số dương.");
        document.getElementById("val-width").value = "";
        document.getElementById("val-width").focus();
        return -1;
    }

    const s = w * h;
    return String(s);
}

function OnSubmit() {
    const s = calArea();
    if (s == -1)
        return false;
    document.getElementById("val-area").value = String(s);
    document.getElementById("val-height").value = "";
    document.getElementById("val-width").value = "";
    document.getElementById("val-height").focus();
    console.log(s);
    return false;
};