function outer(){
  let a = "String";
  let b = {color : "red"}; 

  console.log(a);
  console.log(b);

  function inner(a, b) {  
  
    a = "This is a string";
    b = {car: "BMW"};

    b = {car: "Toyota"};
    
    console.log(a);
    console.log(b);

   
  } 

  inner(a, b);   

console.log(a);
console.log(b);

} 

outer();