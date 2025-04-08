(function(){
   function findTwoLineEquation(point1=[],point2=[]) {
   if(point1.length!== point2.length)return 'Please , Enter a valid input';
   
   let [x1,y1]=point1,[x2,y2]=point2;
   let a=y1-y2,b=x2-x1;
   let c=(x1*y2)-(x2*y1);
     // Format the equation in standard form: ax + by + c = 0
   const equation=`${a}x + ${b}y + ${c}=0`;
   
   // calculate slope 
   const m=(y2-y1)/(x2-x1);
   console.log('Slop: ',m)
   return equation;
   }
   
   // Example input 
   let point1=[3,-4];
   let point2=[4,-5];
   console.log('Equation is :' ,findTwoLineEquation(point1,point2))
   
   
    
})();