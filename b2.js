// Bài 2
// Cho 1 mảng người dùng như dưới
// 1. Tạo menu với các mục xem danh sách, thêm người dùng
// xoá người dùng theo id, cập nhật thông tin ngưỜi dùng theo id
// 2. Thêm 2 người vào mảng ban đầu trước khi làm ý này
// - Thống kê bao nhiêu nam,bao nhiêu người có tuổi lớn hơn 15 tuổi
// - Tính tổng tiền những người có id chẵn
// - Ai nghèo nhất, Ai giàu nhất
// 3. Chuyển hết những người có giới tính male về female

const users = [
    { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
    { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
    { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
    { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
  ];
const users2 = users.concat({ id: 5, name: "Do Ra", age: 10, gender: "female", money: 200},
{ id: 6, name: "Bay Be", age: 20, gender: "male", money: 100},);
console.log(users2);



function a(array){
    let a = 0;
    for (let index = 0; index < array.length; index++) {
        if(array[index].gender == "male" && array[index].age > 15){
            a++;
        }
        
    }
    return a;
}
console.log("Số nam > 15 tuổi: ",a(users2));

function c(array){
    let c = 0;
    for (let index = 0; index < array.length; index++) {
        if(array[index].id % 2 == 0){
            c += array[index].money;
        }
        
    }
    return c;
}
console.log("Tổng tiền người có id chẵn: ",c(users2));

function Max(array){
    let index = 1;
    let m = array[0].money;
    for ( index = 1; index < array.length; index++) {
            if (array[index].money > m) {
                m = array[index].money;
            }
        return array[index].name;
    }
}
console.log("Người giàu nhất: ",Max(users2));

function Min(array){
    let len = array.length;
    let min = Infinity;
    while (len--) {
        if (array[len].money < min) {
        min = array[len].money;
        }
        return array[len].name;
    }
}
console.log("Người nghèo nhất: ",Min(users2));

function d(array){
    let index = 0;
    let a = 0;
    for ( index = 0; index < array.length; index++) {
        array[index].gender = "male";
        console.log(array[index]);
    }
    
}
d(users2);