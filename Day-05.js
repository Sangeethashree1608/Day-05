//Day-05:

//1. Print odd numbers in an array

//Anonymous fuction:

var A=[];
var odd= function(arr){
for(i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
        A.push(arr[i]);
    }

}
return A;
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]));

//IIFE:

var A=[];
(function odd(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            A.push(arr[i]);
        }
    }
    console.log(A);
})
([1,2,3,4,5,6,7,8,9,10]);

//Arrow function:

var A=[];
var odd=(arr)=>{
    for(i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
        A.push(arr[i]);
    }
}
return A;
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]));

//2. Convert all strings to title caps in a string array:

//Anonymous:

var tcase=function(arr){
    for(vari=0;i<arr.length;i++){
        arr[i]=arr[i].toLowerCase();
        arr[i]= arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
    
    }
    return arr;
}
console.log(tcase(["Banana","appLe","piNeApple"]));

//IIFE:

(function titlecase(array){
    for (var i=0;i<array.length;i++){
        array[i]=array[i].toLowerCase();
        array[i]=array[i].charAt(0).toUpperCase()+array[i].slice(1);
    }
    console.log(array);
})  (["English", "taMil"]);


//Arrow function:

var titlecase= array=>{
for (var i=0; i<array.length; i++){
    array[i]=array[i].toLowerCase();
    array[i]=array[i].charAt(0).toUpperCase()+array[i].slice(1);
}
return array;
}
console.log(titlecase(["Guvi","Pineapple"]));


//3. To find sum of an array:

//Anonymous:

var A=0;
var result=function(arr){
    for(i=0;i<arr.length;i++){
        A=A+arr[i];
    
}
return A;
} 
console.log(result([10,20,30]));

//IIFE:
var A=0;
(function sum(arr){
for(i=0;i<arr.length;i++){
    A=A+arr[i];
}
console.log(A);
})
([1,2,3]);

//Arrow:

var A=0;
var result=(arr)=>{
    for(i=0;i<arr.length;i++){
        A=A+arr[i];
    }
    return A;
}
console.log(result([2,3,4]));

//4. Return all prime numbers in array:

//anonymous function:
var tempo = []; 
  var prime = function(num){
      if(num<2) return false;       
      for(var l=2; l<num; l++){
            if(num %l ==0){
                return false;
            }
        }
        return true;
      }
      
  var is_prime = function(array){      
      for(var i=0; i<array.length; i++){
          if(prime(array[i])){
              tempo.push(array[i]);
          }
      }
    return tempo;
  }    
  console.log(is_prime([ 1,2,3,4,5,6,7,8,9,10]));
                  
//IIFE:
var tempo = []; 
  var prime = (num) =>{
      if(num<2) return false; 
      
      for(var l=2; l<num; l++){
            if(num %l ==0){
                return false;
            }
        }
        return true;
      }      
  (function is_prime(array){
      
      for(var i=0; i<array.length; i++){
          if(prime(array[i])){
              tempo.push(array[i]);
          }
      }
    console.log(tempo);
  }) ([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
                  
//Arrow:
 tempo = []; 
  var prime = (num) =>{
      if(num<2) return false;      
      for(var l=2; l<num; l++){
            if(num %l ==0){
                return false;
            }
        }
        return true;
      }      
  var is_prime = (array) => {
      
      for(var i=0; i<array.length; i++){
          if(prime(array[i])){
              tempo.push(array[i]);
          }
      }
    return tempo;
  }    
  console.log(is_prime([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//5. Return all the palindromes in an array:
//Anonymous:

var tempo = [];
  var pal = function(array){
      for(var i=0; i<array.length; i++){
          var str = array[i];
          var res = array[i].split("").reverse().join("");
          
          if(str == res){
             tempo.push(str);
          }
      }
    return tempo;
  }
  console.log(pal(["565", "909", "dad"]));
                           
//IIFE:
var tempo = [];
  (function pal(array){
      for(var i=0; i<array.length; i++){
          var str = array[i];
          var res = array[i].split("").reverse().join("");
          
          if(str == res){
             tempo.push(str);
          }
      }
    console.log(tempo);
  }) (["565", "909", "dad"]);

            

//Arrow:

var tempo = [];
  var pal = (array) => {
      for(var i=0; i<array.length; i++){
          var str = array[i];
          var res = array[i].split("").reverse().join("");
          
          if(str == res){
             tempo.push(str);
          }
      }
    return tempo;
  }
  console.log(pal(["565", "909", "dad"]));

  //Remove duplicates from an array:
  //Anonymous function:
  var tempo = [];
  var dup = function(array){
      for(var i=0; i<array.length; i++){
          var count=0;
          for(var j=i; j<array.length; j++){
              if(array[i] == array[j]){
                  count++;
              }
          }
          if(count<=1){
            tempo.push(array[i]);  
          }
      }
      return tempo;
  }
  console.log(dup(["English", "Tamil","Maths","English","Tamil"]));


  //IIFE:
  var tempo = [];
  (function dup(array){
      for(var i=0; i<array.length; i++){
          var count=0;
          for(var j=i; j<array.length; j++){
              if(array[i] == array[j]){
                  count++;
              }
          }
          if(count<=1){
            tempo.push(array[i]);  
          }
      }
      console.log(tempo);
  }) ( ["English", "Tamil","Maths","English","Tamil"]);

  //8. Rotate an array by k times:
//Anonymous:

var rotate = function(array,k){
     for(var i=0; i<k; i++){
         array.unshift(array.pop());
     }
    return array;
 }
 console.log(rotate([10,20,30],2));
                   
//IIFE:
(function rotate (array,k){
     for(var i=0; i<k; i++){
         array.unshift(array.pop());
     }
    console.log(array);
 }) ([10,20,40],2);

