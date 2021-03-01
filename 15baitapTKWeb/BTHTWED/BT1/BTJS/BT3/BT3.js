function OnSubmit() {
    var start1 = Number(document.getElementById("start").value);
    var end1 = Number(document.getElementById("end").value);

    var path;

    for (i = start1; i <= end1; i++) {
        path = "./images/" + i + ".jpg";
        add_child(path)
    }
    return false;

}

function add_child(path) {
    //tạo phần tử p    
    var p = document.createElement("img");

    //tạo phần tử text
    var node = document.setAttribute('src', path);


    //gắn node vào p
    p.appendChild(node);

    //Thay đổi một số thuộc tính của p
    p.appendChild(node);
    p.style.height = "150px";
    p.style.borderRadius = "10%";
    p.style.width = "150px";
    var div = document.getElementById("contain-img");
    //gắn p vào div
    div.appendChild(p);
}
/*function calResult(year) {
    can = ['Canh', 'Tân', 'Nhâm', 'Quí', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ'];
    chi = ['Thân', 'Dậu', 'Tuất', 'Hợi', 'Tí', 'Sửu', 'Dần', 'Mẹo', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi'];
    images = ['than.jpg', 'dau.jpg', 'tuat.jpg', 'hoi.jpg', 'ti.jpg', 'suu.jpg', 'dan.jpg', 'meo.jpg', 'thin.jpg', 'ty.jpg', 'ngo.jpg', 'mui.jpg'];

    const s = can[year % 10] + " " + chi[year % 12];
    const path = "./images/" + images[year % 12];
    document.getElementById("am-lich").value = s;
    document.getElementById("img").setAttribute('src', path);
    document.getElementById("img").setAttribute('style', 'width: 150px; height: 150px; border-radius: 10%; background-color: red');
}*/