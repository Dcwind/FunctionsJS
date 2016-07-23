
function addTogether() {
  var checkNum = function(num){
    
      if(typeof num !== 'number'){
        return undefined;
      }else{
        return num;
      }
    };
  
  if(arguments.length > 1){
    var a = arguments[0];
    var b = arguments[1];
    
      if (checkNum(a) === undefined || checkNum(b) === undefined){
        return undefined;
        
      }else{      
        return a + b;
      }
    
    }else{
      
      var c = arguments[0];
      
      if (checkNum(c)){
        
        return function(secondNum){
          if(checkNum(c) === undefined || checkNum(secondNum) === undefined){
            
            return undefined;
            
          }else{           
            return c + secondNum;
            
          }
          
        };
        
      }
      
    }
}

addTogether(2,3);
