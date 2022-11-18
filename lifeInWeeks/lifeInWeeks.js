// function lifeInWeeks(age) {
    
    
//         var daysToNinety = 365 * 90;
//         var daysToCurrentAge = 365 * age;
//         restOfDays = daysToNinety - daysToCurrentAge;
        
//         var weeksToNinety = 52 * 90;
//         var weeksToCurrentAge = 52 * age;
//         var restOfWeeks = weeksToNinety - weeksToCurrentAge;
        
//         var monthsToNinety = 12 * 90;
//         var monthsToCurrentAge = 12 * age;
//         var restOfMonths = monthsToNinety - monthsToCurrentAge;
        
        
        
//         console.log("You have " + restOfDays + " days, " + restOfWeeks + " weeks, and " + restOfMonths + " months left.");
//     }
    
    
    
//     lifeInWeeks(26);

function lifeInWeeks(age) {
    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var months = yearsRemaining * 52;
    var yeas = yearsRemaining * 12;

    console.log("You have " + days + " days, " + months + " weeks, and " + yeas + " months left.");
    
}

lifeInWeeks(26);