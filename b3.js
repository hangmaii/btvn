const case1 = "    hOang Bui   ";
const case2 = " hOANG      BUI   hOang     ";
const case3 = "23traN    dUOng23     ";
function chuanhoa(value) {
    let str = a = "";
    value = value.trim();
    value = value.toLowerCase();
    for(i=0; i<value.length; i++){
        value = value.replace("  "," ");
        while(value.charAt(i) >= "0" && value.charAt(i) <= "9"){
            value = value.replace(value.charAt(i),"");
        }
        str = value.charAt(i+1);
        a = value.charAt(0);
        a = a.toUpperCase();
        if(value.charAt(i)==" "){
            str = str.toUpperCase();
            value = value.replace(value.charAt(0),a).replace(value.charAt(i+1),str);
        }
    }
    console.log(value);

}
chuanhoa(case1);
chuanhoa(case2);
chuanhoa(case3);