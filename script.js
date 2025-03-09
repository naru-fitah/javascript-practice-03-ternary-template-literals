// 01 Rewrite this string concatenation using template literals:
// let product = "Laptop";
// let price = 999;
// console.log("The price of the " + product + " is $" + price + ".");

let product = "Laptop"; 
let price = 999;
console.log(`The price of the ${product} is $${price}.`);

// 02 Convert this if...else statement into a ternary operator with template literals:
// let temp = 35;
// if (temp > 30) {
   // console.log("🔥 It's super hot outside!");
// } else if (temp >= 20) {
  //  console.log("😊 The weather is nice.");
// } else {
   // console.log("❄️ It's cold outside.");
// }

let temp = 35;
console.log(
    temp > 30 
        ? `🔥 It's super hot outside!` 
        : temp >= 20 
        ? `😊 The weather is nice.` 
        : `❄️ It's cold outside.`
);

// 03 Convert this if...else statement into a ternary operator with template literals:
// let balance = 200;
// if (balance > 1000) {
   // console.log("💰 You're rich!");
// } else if (balance > 100) {
 //   console.log("🙂 You have a decent balance.");
// } else {
  //  console.log("😢 Your balance is low.");
// }

let balance = 200;
console.log(
    balance > 1000 
        ? `💰 You're rich!` 
        : balance > 100 
        ? `🙂 You have a decent balance.` 
        : `😢 Your balance is low.`
);

// 01. Categorize Numbers
// Write a function categorizeNumber(num) that:
// - Returns "Small" if num is between 1 and 10.
// - Returns "Medium" if num is between 11 and 100.
// - Returns "Large" if num is above 100.

let num = 200
function categorizeNumber(num) {
   return num <= 10
    ? `Small`
    : num <= 100
    ? `Medium`
    : `Large`
}
console.log(categorizeNumber(num))

// 02. Age Group
// Write a function ageGroup(age) that:
// - Returns "Child" if age is 0-12.
// - Returns "Teen" if age is 13-17.
// - Returns "Adult" if age is 18-64.
// - Returns "Senior" if age is 65+.

let age = 18
function ageGroup(age) {
    return age <= 12
    ? `Child`
    : age <= 17
    ? `Teen`
    : age <= 64
    ? `Adult`
    : `Senior`
}
console.log(ageGroup(age))

// 03. Discount Checker
// Write a function getDiscount(day) that:
// - Returns "50% off" on Monday and Wednesday.
// - Returns "30% off" on Friday.
// - Returns "No discount" on other days.

function getDiscount(day) {
    let lowercaseDay = day.toLowerCase(); // Convert input to lowercase
    return lowercaseDay === "monday" || lowercaseDay === "wednesday"
        ? `50% off`
        : lowercaseDay === "friday"
        ? `30% off`
        : `No discount`;
}
console.log(getDiscount("Friday")); // "30% off"
console.log(getDiscount("monday")); // "50% off"
console.log(getDiscount("SUNDAY")); // "No discount"


// 04. Grade Calculator
// Write a function getGrade(score) that:
// - Returns "A" if score is 90+.
// - Returns "B" if score is 80-89.
// - Returns "C" if score is 70-79.
// - Returns "D" if score is 60-69.
// - Returns "F" if score is below 60.

function getGrade(score) {
    return score >= 90
    ? `A`
    : score >= 80
    ? `B`
    : score >= 70
    ? `C`
    : score >= 60
    ? `D`
    : `F`
}
console.log(getGrade(60))

// 05. Driving License Eligibility
// Write a function canApplyForLicense(age, country) that:
// - Returns "Eligible" if age is 18+ in "USA", "UK", "Canada", and "France".
// - Returns "Eligible" if age is 16+ in "Brazil" and "South Africa".
// - Returns "Not Eligible" otherwise.

function canApplyForLicense(age, country) {
    let countries18 = ["USA", "UK", "Canada", "France"];
    let countries16 = ["Brazil", "South Africa"];
    
    return age >= 18 && countries18.includes(country)
        ? `Eligible`
        : age >= 16 && countries16.includes(country)
        ? `Eligible`
        : `Not Eligible`;
}

console.log(canApplyForLicense(18, "South Africa")); // "Eligible"
console.log(canApplyForLicense(15, "USA")); // "Not Eligible"
console.log(canApplyForLicense(20, "Canada")); // "Eligible"

// 06. Season Finder
// Write a function getSeason(month) that:
// - Returns "Winter" for December, January, February.
// - Returns "Spring" for March, April, May.
// - Returns "Summer" for June, July, August.
// - Returns "Fall" for September, October, November.

function getSeason(month) {
    let monthsWinter = ["december", "january", "february"];
    let monthsSpring = ["march", "april", "may"];
    let monthsSummer = ["june", "july", "august"];
    let monthsFall = ["september", "october", "november"];

    let formattedMonth = month.toLowerCase(); // Convert input to lowercase

    return monthsWinter.includes(formattedMonth)
        ? `Winter`
        : monthsSpring.includes(formattedMonth)
        ? `Spring`
        : monthsSummer.includes(formattedMonth)
        ? `Summer`
        : monthsFall.includes(formattedMonth)
        ? `Fall`
        : `Please enter a valid month`;
}

console.log(getSeason("September")); // ✅ Outputs: "Fall"
console.log(getSeason("september")); // ✅ Works with lowercase
console.log(getSeason("DECEMBER")); // ✅ Works with uppercase
console.log(getSeason("Hello")); // ✅ Outputs: "Please enter a valid month"

// 07. Language Detector
// Write a function detectLanguage(code) that:
// - Returns "English" for "en".
// - Returns "Spanish" for "es".
// - Returns "French" for "fr".
// - Returns "Unknown" for any other value.

function detectLanguage(code) {
    let formattedCode = code.toLowerCase();
 
   return formattedCode === "en"
   ? `English`
   : formattedCode === "es"
   ? `Spanish`
   : formattedCode === "fr"
   ? `French`
   : `Unknown`
}
console.log(detectLanguage("En"))

// OR for better scalability

function detectLanguage(code) {
    let languages = { en: "English", es: "Spanish", fr: "French" };
    return languages[code.toLowerCase()] || "Unknown";
}
console.log(detectLanguage("En")); // ✅ "English"
console.log(detectLanguage("ES")); // ✅ "Spanish"
console.log(detectLanguage("de")); // ✅ "Unknown"



// 08. Time of Day
// Write a function getTimeOfDay(hour) that:
// - Returns "Morning" if hour is 5-11.
// - Returns "Afternoon" if hour is 12-17.
// - Returns "Evening" if hour is 18-21.
// - Returns "Night" otherwise.

function getTimeOfDay(hour) {
    if (hour < 0 || hour > 23) return "Invalid hour. Use 0-23.";

    return hour >= 5 && hour <= 11
        ? `Morning`
        : hour >= 12 && hour <= 17
        ? `Afternoon`
        : hour >= 18 && hour <= 21
        ? `Evening`
        : `Night`;
}

console.log(getTimeOfDay(22)); // ✅ "Night"
console.log(getTimeOfDay(-3)); // ✅ "Invalid hour. Use 0-23."
console.log(getTimeOfDay(30)); // ✅ "Invalid hour. Use 0-23."

// 09. Even or Odd with Range
// Write a function checkNumberType(num) that:
// - Returns "Even and Small" if num is even and less than 10.
// - Returns "Even and Large" if num is even and 10 or more.
// - Returns "Odd and Small" if num is odd and less than 10.
// - Returns "Odd and Large" otherwise.

function checkNumberType(num) {
    return num % 2 === 0 && num < 10
    ? `Even and Small`
    : num % 2 === 0 && num >= 10 // Fixed: Use `>= 10` instead of `> 10`
    ? `Even and Large`
    : num % 2 !== 0 && num < 10 // Fixed: `num % 2 !== 0` properly checks for odd
    ? `Odd and Small`
    : `Odd and Large`;
}

console.log(checkNumberType(21)); // ✅ "Odd and Large"
console.log(checkNumberType(8));  // ✅ "Even and Small"
console.log(checkNumberType(10)); // ✅ "Even and Large"
console.log(checkNumberType(3));  // ✅ "Odd and Small"


// 10. Movie Ticket Pricing
// Write a function getTicketPrice(age) that:
// - Returns "$5" if age is under 10.
// - Returns "$10" if age is 10-17.
// - Returns "$15" if age is 18-64.
// - Returns "$8" if age is 65+.

function getTicketPrice(age) {
    return age < 10
    ? `$5`
    : age <= 17
    ? `$10`
    : age <= 64
    ? `$15`
    : `$8`
}
console.log(getTicketPrice(65))

// Truthy OR Falsy ?

if ("hello") {
    console.log("This will run because 'hello' is truthy.");
}
// Output: This will run because 'hello' is truthy.

function checkDiscountCode(discountCode) {
    // Remove extra spaces and convert input to uppercase
    let formattedCode = discountCode.trim().toUpperCase(); 

    if (formattedCode === "") {
        console.log("❌ No discount entered.");
    } else if (formattedCode === "SAVE10" || formattedCode === "DISCOUNT20") {
        console.log("🎉 Discount applied!");
    } else {
        console.log("❌ Invalid code. No discount applied.");
    }
}

// Test cases
checkDiscountCode("save10");    // ✅ "🎉 Discount applied!"
checkDiscountCode("  DISCOUNT20  "); // ✅ "🎉 Discount applied!" (trim removes spaces)
checkDiscountCode("");         // ❌ "No discount entered."
checkDiscountCode("random123"); // ❌ "Invalid code. No discount applied."


let email = "world@gmail.net"; 
let formattedEmail = email.trim();

console.log(
    !formattedEmail 
    ? "❌ Please enter a valid email." 
    : !formattedEmail.includes("@") 
    ? "❌ Invalid email format."
    : !(formattedEmail.endsWith(".com") || formattedEmail.endsWith(".net") || formattedEmail.endsWith(".org"))
    ? "❌ Email must end in .com, .org, or .net"
    : "✅ Email saved!"
);

