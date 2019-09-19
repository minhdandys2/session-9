function isFirstLetterUpperCase(str){
    let regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        alert("String's first character is uppercase");
    } else {
        alert("String's first character is not uppercase");
    }
};
isFirstLetterUpperCase("Akdksnd");

isFirstLetterUpperCase("Nguyen van Nam");


isFirstLetterUpperCase("NGUYEN VAN NAM");


isFirstLetterUpperCase("nguyen van Nam");