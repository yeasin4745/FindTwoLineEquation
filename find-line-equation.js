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




// circle related 
function circleFromDiameter(point1, point2) {
 const [x1, y1, x2, y2] = [...point1, ...point2];
 
 // console.log([x1,y1,x2,y2])
 // formula 
 // x^+y^2 -(x1+x2)x-(y1+y2)y+(x1x2+y1y2)=0
 /*
 let A = x1 + x2;
 let B = y1 + y2;
 let x = x1 * x2,
  y = y1 * y2;
 let C = x + y;
 
 // make equation 
 equation += ` ${A<0 ? ' + ':' - '}${Math.abs(A)}x ${B< 0 ? ' + ' : ' - '}${Math.abs(B)}y ${C< 0? ' - ' : ' + '}${Math.abs(C)}=0`
 */
 

let D = -(x1 + x2);
let E = -(y1 + y2);
let F = x1 * x2 + y1 * y2;


let equation = 'x^2 + y^2';

// Handle D term
if (D !== 0) {
 equation += D < 0 ? ' - ' : ' + ';
 if (Math.abs(D) !== 1) {
  equation += Math.abs(D);
 }
 equation += 'x';
}

// Handle E term
if (E !== 0) {
 equation += E < 0 ? ' - ' : ' + ';
 if (Math.abs(E) !== 1) {
  equation += Math.abs(E);
 }
 equation += 'y';
}

// Handle F term
if (F !== 0) {
 equation += F < 0 ? ' - ' : ' + ';
 equation += Math.abs(F);
}

equation += ' = 0';


return equation;
 
}


//console.log(circleFromDiameter([1, 2], [3, 4]))
//console.log(circleFromDiameter([0, 5], [3, 0]))
//console.log(circleFromDiameter([0, 0], [2, 0]))





function radiusAndCenterPoint(r, center = []) {
 
 let [h, k] = center;
 let equation = 'x^2 + y^2';
 let C = h ** 2 + k ** 2 - r ** 2;
 let A = 2 * h;
 let B = 2 * k;
 
 equation += `${A>= 0 ? ' - ' : '+'}${Math.abs(A)}x ${B>= 0 ? '-' : '+'}${Math.abs(B)}y ${C>= 0 ? '+':'-'}${Math.abs(C)}=0`;
 
 return equation;
 
 
}

//console.log(radiusAndCenterPoint(5, [5, -3]))

//console.log(radiusAndCenterPoint(0, [ -3,0]))

// circle related 
function circleFromDiameter(point1, point2) {
 const [x1, y1, x2, y2] = [...point1, ...point2];
 
 // console.log([x1,y1,x2,y2])
 // formula 
 // x^+y^2 -(x1+x2)x-(y1+y2)y+(x1x2+y1y2)=0
 /*
 let A = x1 + x2;
 let B = y1 + y2;
 let x = x1 * x2,
  y = y1 * y2;
 let C = x + y;
 
 // make equation 
 equation += ` ${A<0 ? ' + ':' - '}${Math.abs(A)}x ${B< 0 ? ' + ' : ' - '}${Math.abs(B)}y ${C< 0? ' - ' : ' + '}${Math.abs(C)}=0`
 */
 

let D = -(x1 + x2);
let E = -(y1 + y2);
let F = x1 * x2 + y1 * y2;


let equation = 'x^2 + y^2';

// Handle D term
if (D !== 0) {
 equation += D < 0 ? ' - ' : ' + ';
 if (Math.abs(D) !== 1) {
  equation += Math.abs(D);
 }
 equation += 'x';
}

// Handle E term
if (E !== 0) {
 equation += E < 0 ? ' - ' : ' + ';
 if (Math.abs(E) !== 1) {
  equation += Math.abs(E);
 }
 equation += 'y';
}

// Handle F term
if (F !== 0) {
 equation += F < 0 ? ' - ' : ' + ';
 equation += Math.abs(F);
}

equation += ' = 0';


return equation;
 
}


//console.log(circleFromDiameter([1, 2], [3, 4]))
//console.log(circleFromDiameter([0, 5], [3, 0]))
//console.log(circleFromDiameter([0, 0], [2, 0]))





function radiusAndCenterPoint(r, center = []) {
 
 let [h, k] = center;
 let equation = 'x^2 + y^2';
 let C = h ** 2 + k ** 2 - r ** 2;
 let A = 2 * h;
 let B = 2 * k;
 
 equation += `${A>= 0 ? ' - ' : '+'}${Math.abs(A)}x ${B>= 0 ? '-' : '+'}${Math.abs(B)}y ${C>= 0 ? '+':'-'}${Math.abs(C)}=0`;
 
 return equation;
 
 
}

//console.log(radiusAndCenterPoint(5, [5, -3]))

//console.log(radiusAndCenterPoint(0, [ -3,0]))

    










