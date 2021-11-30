// Bài 1
// Cho 1 mảng sau
// Đếm số lần xuất hiện của các số
// Ví dụ
// const nums = [1,1,2]
// Output:
// Số 1 xuất hiện 2 lần
// Số 2 xuất hiện 1 lần
const nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];
const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];
const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];
function check(arr) {
    arr.sort(function(a, b){return a - b});
    var c = 1;
    for(let i=0; i<arr.length; i++){
        if(arr[i+1] == arr[i]){
            c++;
        }
        else{
            console.log(arr[i], "xuat hien " + c +" lan");
            c = 1;
        }
    }
    
}
check(nums);
check(nums1);
check(nums2);
