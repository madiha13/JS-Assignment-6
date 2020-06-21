// ________________________________________________________________________________________________
//**********************Assignment # 21-25 (STRING METHODS)**********************
// ________________________________________________________________________________________________

// Qno#1:Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

	// var first = prompt("Enter your first name: ","Madiha");
	// var last = prompt("Enter your last name: "," Moin");
	// var fullname = first + last;
	// alert("Asalam Walikum "+fullname+" How are you");

	// Qno#2:Write a program to take a user input about his favorite mobile phone model. Find and display the length of user
	//       input in your browser
	
	// var mobile = prompt("Select Mobile Phone","Huawei y5");
    // document.write("My Favorite Phone is:  "+mobile+"<br>Length of the String "+mobile.length);

	// Qno#3:Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

	// var string = "Pakistani";
    // var n = string.indexOf("n");
    // document.write("String "+string +"<br>");
    
	// document.write("Index of n: "+n);
	
	// Qno#4:Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
	
	// var string = "Hello World";
	// var last = string.lastIndexOf("l");
	// document.write("<h3>String: "+string+"</h3>");
	// document.write("<h3>Last index of 'l': "+last+"</h3>");

	// Qno#5:Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
	   
	//    var string = "Pakistani";
	//    var text = string.charAt(3);
	//    document.write("<h3>String: "+string+"</h3>" );
	//    document.write("<h3>Character at index 3 : "+text+"</h3>");
	   
	// Qno#6:Repeat Q1 using string concat() method.

	// var First = prompt("Enter First Name","Madiha");
    // var Last = prompt("Enter Last Name","Moin");
    // var fullname = First.concat(" ",Last) ;
    // alert("Assalam Walikum "+fullname);

	// Qno#7:Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
		
	// var city = "Hyderabad";
	// var after = city.replace("Hyder","Islam");
	// document.write("<h3>City: "+city+"</h3>");
	// document.write("<h3>After Replacement: "+after+"</h3>");
	// var message = "Ali and Sami are best friends. They play cricket and football together.";
	// var text = message.replace("and","&");
	// alert(text);
	   
	// Qno#8:Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
    // var message = “Ali and Sami are best friends. They play cricket and football together.”;
	   
	// var message = "Ali and Sami are best friends. They play cricket and football together.";
	// var text = message.replace(/and/g,"&");
	// document.write("<h3>"+text+"</h3>");
	   
	// Qno#9:Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
    // var message = “Ali and Sami are best friends. They play cricket and football together.”;
	   
	// var integerString = "472"
    // var num = Number(integerString);
    // document.write("<h1>Value: "+integerString+"<br>Type: string <br>Value:"+num+"<br>Type: number</h1>")
	   
	// Qno#10:Write a program that takes user input. Convert and show the input in capital letters.
	   
	// var user = prompt("Enter your input: ","Peanuts");
	// var upper = user.toUpperCase();
	// document.write("<h3>User input: "+user+"</h3>");
	// document.write("<h3>Upper case: "+upper+"</h3>");

	// Qno#11:Write a program that takes user input. Convert and show the input in title case.

	// var user = prompt("Enter your input: ","javascript");
    // document.write("<h3>User input: "+user+"</h3>");
	// var upper = user.slice(0,1);
	// user = user.slice(1);
	// upper = upper.toUpperCase();
	// upper = upper + user;
	
	// document.write("<h3>Title case: "+upper+"</h3>");

	// Qno#12:Write a program that converts the variable num to string.
	// var num = 35.36 ; Remove the dot to display “3536” display in your browser.
	
	// var num = 35.36;
	// document.write("<h3>Number: "+num+"</h3>");
	// var b = num.toString();
	// var after = b.replace(".","");
	// document.write("<h3>Result: "+after+"</h3>");

	// Qno#13:

	// var username = prompt("Enter a string");
	// for (var i = 0; i < username.length; i++) {
	// 	 if (username.charAt(i) === "@" || username.charAt(i) === "!" || username.charAt(i) === "."|| username.charAt(i) === ",") {
	// 		 alert("Please enter a valid username");
	// 		 break;
	// 		 }
	//    }

	// Qno#14:

	// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
    // var item = prompt("Wellcome to ABC Barkery. What do you Want to order sir/ma'am? ");
    // var matchfound = "false";
    // item = item.toLowerCase();
    
    // for (var i = 0; i <= a.length; i++)
    //  {
    // 	if (item==a[i]) 
    // 	{
    //        alert(item+ " is available in index " +i+ " in our bakery");
    //        matchfound = true;
           
    //     }
    //  }
    //   if(matchfound == "false"){
    // 		 alert( " We are sorry " +item+ " is not available in our bakery");
    // 		}

	// Qno#15:
  
 	//    var pass = prompt("Enter password");
	//    document.write("<h1>Enter Password: "+pass+"<br></h1>");
    //    var first = pass.slice(0,1);

    //    var a = [0,1,2,3,4,5,6,7,8,9];
    //    for(i=0; i <= a.length; i++) {
    //       if(first == a[i] ) {
    //     document.write("<h1>Password can not begin with a number<br></h1>");
    //     document.write("<h1>Please enter a valid password<br></h1>");
    //     break;
    //     }
    //     else if(pass.length < 6 ) {
    //     document.write("<h1>Password must be at least 6 digit<br></h1>");
    //     document.write("<h1>Please enter a valid password<br></h1>");
    //     break;
    //     }

    //     }

	// Qno#16:Write a program to convert the following string to an array using string split method.
    // var university = “University of Karachi”;
	// Display the elements of array in your browser.
	
	// var university = "University of Karachi";
	// var res = university.split("");
	// for(var i = 0; i < res.length; i++)
	// 		   {
	//   document.write("<br />  " + res[i]);
	// 		   }
	

	// Qno#17:Write a program to display the last character of a user input.

	// var name = prompt("Enter any input String:");
	// var lastChar = name.charAt(name.length - 1);
	// document.write("<h3>User input: "+name+"</h3>");
	// document.write("<h3>Last Character of input: "+lastChar+"</h3>" )

	// Qno#18:You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of 
	// occurrences of word “the” in given string.

	// var temp = "The quick brown fox jumps over the lazy dog.";
	// document.write("<h3>"+temp+"</h3>");
	// var convert = temp.toLowerCase();
	// var count = (convert.match(/the/g)).length;
	// document.write("<h3>There are "+count+" occurrence(s) of  word 'the'</h3>");

// ________________________________________________________________________________________________
//**********************Assignment # 26-30 (MATH METHODS)**********************
// ________________________________________________________________________________________________

// Qno#1:Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

//   var a =prompt("Enter a positive/negative number ");
//         document.write("Given number is : " + a +"<br/>");
//         var b = Math.round(a);
//         document.write("Round off value is : " + b + "<br/>");
//         var c = Math.floor(a);
//         document.write("Floor  value is : " + c + "<br/>");
//         var d = Math.ceil(a);
//         document.write("Ceil value is : " + d + "<br/>");


// Qno#2:Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// Qno#3:Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var a =prompt("Enter a positive number ");
//      var b= Math.abs(a);
//      document.write("absolute value of " +a+" is "+b);

// Qno#4:Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

// var a = Math.random();
// var improvNum = (a * 6) + 1;
// var numberOfDice = Math.floor(improvNum);
// document.write("Random Dice value" + numberOfDice);

// Qno#5:Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

// var a = Math.random();
// var improvNum = (a * 2) + 1;
// var numberOfCoins = Math.floor(improvNum);
// if(numberOfCoins == 1)
// {
// 	document.write(numberOfCoins + "<br/>" + "Random coin value : Tails");
// }
// else
// {
// 	 document.write(numberOfCoins + "<br/>" + "Random coin value : Head");
// }    

// Qno#6:Write a program that shows a random number between 1 and 100 in your browser.

//  var a = Math.random();
//  var improvNum = (a * 100) + 1;
//  var count = Math.floor(improvNum);
//  document.write("Random number b/w 1 and 100 : " + count);

// Qno#7:Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

//           var a =prompt("Enter your weight in kilograms ");
//           var qWght=parseInt(a);
//           document.write("your wght is " +qWght+ " kilo gram ");


// Qno#8:Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret number, congratulate the user.

//     var num = prompt("Enter a number from 1 to 10");
//     var a = Math.random();
//     var improvNum = (a * 10) + 1;
//     var numberOfDice = Math.floor(improvNum);
//     if(num == numberOfDice){
//     document.write("Congratulations you have won ");
//      }
//      else {
//    	document.write("try again!!!!!");
//       }


// ________________________________________________________________________________________________
//**********************Assignment # 31-34 (DATE METHODS)**********************
// ________________________________________________________________________________________________

// Qno#1:Write a program that displays current date and time in your browser.

//    var rightnow = new Date();
//    document.write(rightnow);

// Qno#2:Write a program that alerts the current month in words. For example December.

//    var a = new Date();
//    var month = ["January", "February","March","April","May","June","July","August","September","October","November","December"];
//    var b = month[a.getMonth()];
//    alert("Current Month : "+b);

// Qno#3:Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

//    var a = new Date();
//    var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
//    var b = day[a.getDay()];
//    var c = b.slice(0,3);
//    alert("Today is "+c);

// Qno#4:Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

//    var a = new Date();
//    var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
//    var b = day[a.getDay()];
//    if(day[0] == b || day[6]== b)
//     {
//       alert("It's Fun day");
//      }
//    else
//     {
//       alert("It's not Fun day");
//      }

// Qno#5:Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.

//   var a = new Date();
//   var b = a.getDate();

//     if(b < 16)
//     {
// 	alert("First Fifteen Day of the Month ");
//      }
//     else
//     {
// 	alert("Last Fifteen Days of the Month");
//      }

// Qno#6:Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like to represent the Date object.

//     var a = new Date();
//     var b = a.getMinutes();
//     var c = a.getTime();
//     var d = c / (1000 * 60);
//     document.write("Current Date: "+a+"<br>");
//     document.write("Elapsed Minutes Since Januaury 1, 1970: "+d);
//     document.write("<br>Elapsed Milliseconds Since Januaury 1, 1970: "+c); 

// Qno#7:Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

//    var a = new Date();
//    var b = a.getHours();

//    if(b >= 12 )
//     {
//     alert("It's PM")
//      }
//    else
//     {
// 	alert("It's AM")
//      }

// Qno#8:Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.



// Qno#9:Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? 
// Note: 1st Ramadan was on June 18, 2015



// Qno#10:Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.



// Qno#11:Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.



// Qno#12:Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?



// Qno#13:Write a program to ask the user about his age. Calculate and show his birth year in your browser



// Qno#14:Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// ________________________________________________________________________________________________
//**********************Assignment # 35-38 (FUNCTION)**********************
// ________________________________________________________________________________________________


// Qno#1:Write a function that displays current date & time in your browser.

//   var rightnow = new Date();
//   document.write(rightnow);

// Qno#2:Write a function that takes first & last name and then it greets the user using his full name.

//    var first=prompt("Enter First Name","Enter First Name");
//    var last=prompt("Enter Last Name","Enter Last Name");
//    var fullname=first + last;
//    alert("Assalam O alaikum "+fullname+" Hope You Are Good");
// Qno#3:Write a function that adds two numbers (input by user) and returns the sum of two numbers.

//   function sumoftwo(x,y) {
// 	 var x = +prompt("Enter First Number");
// 	 var y = +prompt("Enter Second Number");
// 	 var result = x + y;
// 	 return result;	
//    }
//   alert(sumoftwo(4,8))

// Qno#4:Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and
// show the desired result in your browser.

// let num1 = prompt("Enter First Number");
// let num2 = prompt("Enter Second Number");
// let operator = prompt(
//   "Enter a number \n 1 For Addition \n 2 for Subtraction \n 3 for Multiplication \n 4 for Division \n 5 for Remainder  "
// );

// function calculate(num1, num2, expression) {
//   let total;
//   switch (expression) {
// 	case "1":
// 	  total = Number(num1) + Number(num2);
// 	  break;
// 	case "2":
// 	  total = Number(num1) - Number(num2);
// 	  break;
// 	case "3":
// 	  total = Number(num1) * Number(num2);
// 	  break;
// 	case "4":
// 	  total = Number(num1) / Number(num2);
// 	  break;
// 	case "5":
// 	  total = Number(num1) % Number(num2);
// 	  break;
// 	default:
// 	  total = "Does not Provide Valide Operator";
//   }

//   return total;
// }

// let result = calculate(num1, num2, operator);
// if (isNaN(result)) {
//   document.write("<b>Please Provide Valid Numbers</b>");
// } else {
//   document.write("<b>Result is:", result, "</b>");
// }

// Qno#5:Write a function that squares its argument.

//    let num = prompt("Enter a number");
//     num = Number(num);

//     square = (num) => num * num;
//     if (!isNaN(num)) {
//       let result = square(num);
//       document.write("<b>Result is: ", result, "</b>");
//     }else{
//         document.write("<b>Please Provide Valid Number</b>");
//     }

// Qno#6:Write a function that computes factorial of a number.

// let num = prompt("Enter a number");
// function factorial(n) {
//   return n ? n * factorial(n - 1) : 1;
// }
// if (!isNaN(num) && num >= 0) {
//   document.write("<b> Result is: ", factorial(num), "</b>");
// } else {
//   document.write("<b>Please Provide Valid Number</b>");
// }

// Qno#7:Write a function that take start and end number as inputs & display counting in your browser.

// let start = prompt("Enter a starting number");
// let end = prompt("Enter a ending number");
// function counting(start, end) {
//   for (let i = Number(start) + 1; i < end; i++) {
// 	document.write("<b>Counting is: ", i, "</b><br />");
//   }
// }
// if (!isNaN(start) && !isNaN(end)) {
//   if (Number(end) > Number(start) && Number(start) + 1 !== Number(end)) {
// 	counting(start, end);
//   } else {
// 	document.write(
// 	  "<b>Start number must be smaller than end number or atleast two number difference</b>"
// 	);
//   }
// } else {
//   document.write("<b>Please Provide Valid Number</b>");
// } 

// Qno#8:Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// let base = prompt("Enter a Base");
// let per = prompt("Enter a Perpendicular");
// function calcHypotenus(base, per) {
//   return Math.sqrt(base * base + per * per);
// }
// if (!isNaN(base) && !isNaN(per)) {
//   document.write("<b> Hypotenuse is: ", calcHypotenus(base, per), "</b>");
// } else {
//   document.write("<b>Please Provide Valid Number</b>");
// }

// Qno#9:Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// let width = prompt("Enter a width number");
// let height = prompt("Enter a height number");
// function area(width, height) {
//   return width * height;
// }
// if (!isNaN(width) && !isNaN(height)) {
//   let values = area(5, 5);
//   document.write("Area Arguments as values is:", values);
//   let variables = area(width, height);
//   document.write("<br />Area Arguments as Variable is:", variables);
// } else {
//   document.write("<b>Please Provide Valid Number</b>");
// }

// Qno#10:Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

// function check_Palindrome(str_entry) {
// 	// Change the string into lower case and remove  all non-alphanumeric characters
// 	var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
// 	var ccount = 0;
// 	// Check whether the string is empty or not
// 	if (cstr === "") {
// 	  document.write("<b>Nothing Found.</b><br />");
// 	  return false;
// 	}
// 	// Check if the length of the string is even or odd
// 	if (cstr.length % 2 === 0) {
// 	  ccount = cstr.length / 2;
// 	} else {
// 	  // If the length of the string is 1 then it becomes a palindrome
// 	  if (cstr.length === 1) {
// 		document.write("<b>Entry is a palindrome.</b><br />");
// 		return true;
// 	  } else {
// 		// If the length of the string is odd ignore middle character
// 		ccount = (cstr.length - 1) / 2;
// 	  }
// 	}
// 	// Loop through to check the first character to the last character and then move next
// 	for (var x = 0; x < ccount; x++) {
// 	  // Compare characters and drop them if they do not match
// 	  if (cstr[x] != cstr.slice(-1 - x)[0]) {
// 		document.write("<b>Entry is not a palindrome.</b><br />");
// 		return false;
// 	  }
// 	}
// 	document.write("<b>Entry is a palindrome.</b><br />");
// 	return true;
//   }
//   check_Palindrome("madam");
//   check_Palindrome("nurses run");
//   check_Palindrome("fox");

// Qno#11:Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// let str = prompt("Enter a string value");

// function titleCase(str) {
//   var wordsArray = str.toLowerCase().split(/\s+/);
//   var upperCased = wordsArray.map(function (word) {
// 	return word.charAt(0).toUpperCase() + word.substr(1);
//   });
//   return upperCased.join(" ");
// }
// let result = titleCase(str);
// document.write("<b>", result, "</b>");
 
// Qno#12:Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development

// let str = prompt("Enter a string value");
// function longestWord(string) {
//   var str = string.split(" ");
//   var longest = 0;
//   var word = null;
//   for (var i = 0; i <= str.length - 1; i++) {
// 	if (longest < str[i].length) {
// 	  longest = str[i].length;
// 	  word = str[i];
// 	}
//   }
//   return word;
// }

// document.write("<b>Longest Word is: ", longestWord(str), "</b>");

// Qno#13:Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of
// occurrences of the specified letter within the string.Sample arguments : 'JSResourceS.com', 'o'

// function char_count(str, letter) {
// 	var letter_Count = 0;
// 	for (var position = 0; position < str.length; position++) {
// 	  if (str.charAt(position) == letter) {
// 		letter_Count += 1;
// 	  }
// 	}
// 	return letter_Count;
//   }

//   document.write(
// 	"<b>Character Count is: ",
// 	char_count("w3resource.com", "o"),
// 	"</b>"
//   );

// Qno#14:The Geometrizer

// var pi = 3.14;
// let radius = prompt("Enter Radius Value");
// function circumference(radius) {
//   return 2 * pi * radius;
// }
// function areaCalculate(radius) {
//   return pi * (radius * radius);
// }
// if (!isNaN(radius)) {
//   document.write(
// 	"<b>The circumference is: ",
// 	circumference(radius).toFixed(2),
// 	"</b><br/>"
//   );
//   document.write(
// 	"<b>Area of circle: ",
// 	areaCalculate(radius).toFixed(2),
// 	"</b><br/>"
//   );
// } else {
//   document.write("<b>Please Provide Valid Radius</b>");
// }
