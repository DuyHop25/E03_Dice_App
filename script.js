"use strict";
exports.__esModule = true;
function change() {
    // Lấy ra thẻ input ( Nơi người dùng nhập ) có id = "img-name"
    var input = document.getElementById("img-name");
    // Lấy giá trị của thẻ input được người dùng nhập
    var fileName = input.value;
    // "Lấy ra thẻ image có id = "dice-1" 
    var image = document.getElementById("dice-1");
    // Thay đổi nội dung của elenment 
    image.src = "./img/" + fileName;
}
change();
function roll() {
    // Khai báo 2 biến hằng max && min để gán random giá trị [min,max]
    var max = 6;
    var min = 1;
    // Gán giá trị random trong khoảng [max,min] cho 2 biến 
    var a = Math.floor(Math.random() * (max - min + 1)) + min;
    var b = Math.floor(Math.random() * (max - min + 1)) + min;
    // lấy ra element có id = "dice-..."
    var image_1 = document.getElementById("dice-1");
    var image_2 = document.getElementById("dice-2");
    // Thay đổi nội dung của thuộc tính của element ( giá trị src của thẻ image)
    image_1.src = "./img/dice" + a + ".png";
    image_2.src = "./img/dice" + b + ".png";
}
roll();
