function change():void{
    // Lấy ra thẻ input ( Nơi người dùng nhập ) có id = "img-name"
    let input:HTMLInputElement = <HTMLInputElement>document.getElementById("img-name");
    // Lấy giá trị của thẻ input được người dùng nhập
    let fileName:string = input.value;
    // "Lấy ra thẻ image có id = "dice-1" 
    let image:HTMLImageElement= <HTMLImageElement>document.getElementById("dice-1");
    // Thay đổi nội dung của elenment 
    image.src = "./img/" + fileName;
}
change();
function roll() :void{
    // Khai báo 2 biến hằng max && min để gán random giá trị [min,max]
    const max: number = 6;
    const min: number = 1;
    // Gán giá trị random trong khoảng [max,min] cho 2 biến 
    let a:number = Math.floor(Math.random() * (max - min + 1) ) + min;
    let b:number =  Math.floor(Math.random() * (max - min + 1) ) + min;
    // lấy ra element có id = "dice-..."
    let image_1:HTMLImageElement= <HTMLImageElement>document.getElementById("dice-1");
    let image_2:HTMLImageElement= <HTMLImageElement>document.getElementById("dice-2");
    // Thay đổi nội dung của thuộc tính của element ( giá trị src của thẻ image)
    image_1.src = "./img/dice" + a +".png";
    image_2.src = "./img/dice" + b +".png";
}
roll();
export{}; // Để không bị đụng độ với file js