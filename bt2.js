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
const arr = {
    insert : function(){
        users.push({ id: 5, name: "Do Ra", age: 10, gender: "female", money: 200},
                   { id: 6, name: "Bay Be", age: 20, gender: "male", money: 100},);
    },
    delete : function(){
          for(let i=0; i<users.length; i++){
            if (users[i].id==1){
          users.splice(i,i-1);
        }
      }
    },
    update : function(){
       for(let i=0; i<users.length; i++){
           if (users[i].id == 4){
              users[i].name = 'Nam';
              users[i].age = 19;
              users[i].gender = 'male';
              users[i].money = 200000;
            }
        }
    }
};
function Menu(select){
    switch(select){
      case 1:{
        arr.insert();
        break;
      }
      case 2:{
        arr.delete();
        break;
      }
      case 3:{
        arr.update();
        break;
      }
      default : console.log("Lua chon sai");
    }
}
Menu(1);
Menu(2);
Menu(3);
console.log(users);
function a(array){
    let a = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i].gender == "male" && array[i].age > 15){
            a++;
        }
        
    }
    return a;
}
console.log("Số nam > 15 tuổi: ",a(users));

function c(array){
    let c = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i].id % 2 == 0){
            c += array[i].money;
        }
        
    }
    return c;
}
console.log("Tổng tiền người có id chẵn: ",c(users));

function Max(array){
    let i = 1;
    let m = array[0].money;
    for ( i = 1; i < array.length; i++) {
            if (array[i].money > m) {
                m = array[i].money;
            }
        return array[i].name;
    }
}
console.log("Người giàu nhất: ",Max(users));

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
console.log("Người nghèo nhất: ",Min(users));

function d(array){
    let i = 0;
    let a = 0;
    for ( i = 0; i < array.length; i++) {
        array[i].gender = "male";
        console.log(array[i]);
    }
    
}
d(users);