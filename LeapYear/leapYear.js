// function isLeap(year) {
//     if (year % 4 === 0){
//     } if (year % 100 === 0){
//     } if (year % 400 ===0){
//         return "Leap year.";
//     } else if(year % 4 != 0){
//         return"Not leap year.";
//     } else if(year % 100 != 0){
//         return "Leap year";
//     } else if(year % 400 != 0){
//         return"Not leap year.";
//     }
// }

// var leapYear = isLeap(1996);
// console.log(leapYear);

//*解答＊//

function isLeap(year) {
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return "Leap year.";
            }else{
                return"Not leap year";
            }
        }else{
            return "leap year";
        }
    }else{
        return "Not leap year";
    }
}

var leapYear = isLeap(1996);
console.log(leapYear);