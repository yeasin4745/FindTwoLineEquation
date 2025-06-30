(function(){
   function twoPointEquation(p1 = [], p2 = []) {
 let [x1, y1] = p1;
 let [x2, y2] = p2;
 
 // formula => x(y₁ - y₂) - y(x₁ - x₂) = x₂y₁ - x₁y₂
 
 const A = y1 - y2;
 const B = x1 - x2;
 
 // correct constant term: x1*y2 - x2*y1
 const constant = x1 * y2 - x2 * y1;
 
 // formatting 
 // equation => Ax+By=constant
 let equation = '';
 if (A === 0 && B === 0) {
  equation = "0 = 0"; // same point
 } else {
  equation =
   (A !== 0 ? `${A}${B > 0 ? 'x - ' : 'x + '}` : '') +
   (B !== 0 ? `${Math.abs(B)}y` : '') +
   ` = ${constant}`;
 }
 
 // if ( x1 == x2 , then slope =undefined)
 const slope = (x1 === x2) ?
  undefined :
  (y2 - y1) / (x2 - x1);
 
 return { equation, slope };
}

//console.log(twoPointEquation([4, 1], [1, 10]));



// one point and slope
function equation(point = [], m) {
 let [x1, y1] = point;
 

 // formula => y=mx-(mx1-y1)
 let constant=m*x1-y1;
 let equation='';
 if(m==0){
  equation=`y=${constant >=1? ' - '+constant:  Math.abs(constant)}`
 } else {
  equation=`y=${m}x ${constant > 0 ? '- '+ constant: '+ '+ Math.abs(constant)}`
 }
 return equation ;
}

//console.log(equation([2, 4], 0))









    
})();
