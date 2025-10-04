//Truyền theo giá trị
//1 sao chép giá trị của biến : let y = x;
//2 truyền bản sao vào bên trong hàm 
//3 Đặc điểm : gán lại tham số trong hàm , không làm thay đổi biến bên ngoài 

function changeValue(y) {
    console.log(y);
    y = 20;
}

let  x = 10;
changeValue(x);

console.log(x);




// Truyền trực tiếp tham chiếu của biến vào bên trong hàm 
// đặc điểm gán lại tham số trong hàm , ngay lập tức biến ngoài củng thay đổi 
function changeValue(y) {
    y = {name: 'bob'};
    console.log(y);
}

x = {name: 'john'};
changeValue(x);


