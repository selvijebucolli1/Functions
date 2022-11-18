
  //1.Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second, 1 if it is vice versa, and 0 if they are equal.

  function compareNumbers(a,b){
    if(a<b){
        console.log("-1");
    }else if(a>b){
        console.log("1");
    }else 
    console.log("0");
  }

  compareNumbers(4,5);

  //2.Write a function that counts the factorial of a given number. 
 
  function factorial(a){
    let ft=1;
    for(let i=1;i<=a;i++){
        ft *= i;
    }
    console.log(ft);
    }
   factorial(2);

   //3.Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.
   
   function threeDigits(a,b,c){
    console.log(a+""+b+""+c);
   }
   threeDigits(3,3,4);
   
   //4.Write a function that accepts the width and length of a rectangle and calculates its area. If there is only one parameter given, it counts as a square. 
   
   function calculateArea(width,height){
    height=height==undefined ? height=width : height=height;
    console.log(width*height);
   }
   calculateArea(10,20);

 //7.Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss. If the seconds are not given, they should be displayed as 00.

   function time(hours,minutes,seconds){
    seconds=seconds==undefined ? seconds=00: seconds=seconds;
    console.log(hours+":"+minutes+":"+seconds);
   }
   time(30,20);

   //8.Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.
   function timeInSeconds(hours,minutes,seconds){
    h=hours*3600;
    m=minutes*60;

    totalSeconds=h+m+seconds;
    console.log(totalSeconds + " seconds");
   }
   timeInSeconds(10,10,10);

   //9.Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.
   function secondsToTime(s){
    hours = Math.floor(s/3600);
    s%=3600;
    minutes = Math.floor(s/ 60);
    seconds = s%60;
    console.log(hours+":"+minutes+":"+seconds);
   }
   secondsToTime(36610);









