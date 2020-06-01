function calendar(){
    var date = document.getElementById("firstDay").innerHTML;
 
    console.log(date);
    
}
function calc (firstDay,month,year){
    
    

    switch (month){
        case 'Jan': 
            if(year%4==0){
                var x = (31-firstDay)+8;
                if(x<31){
                    return Console.log("Your Due date"+x+"October"+year)
                }  else{
                    return console.log("Your Due date"+x+"November"+year)
                }
            }
            else{ var x = (31-firstDay)+7;
                if(x<31){
                    return Console.log("Your Due date is"+x+"October"+year)
                }  else{
                    x=31-x;
                    return console.log("Your Due date is"+x+"November"+year)
                }
             }               
        case 'Feb':
            if(year%4==0){
                var x=firstDay+6;
                if(x<30){
                    return Console.log("Your Due date is"+x+"November"+year)
                }  else{
                    x=30-x;
                    return console.log("Your Due date is"+x+"December"+year)
                }
                
            }
            else{var x=firstDay+5;
                if(x<30){
                    return Console.log("Your Due date is"+x+"November"+year)
                }  else{
                    return console.log("Your Due date is"+x+"December"+year)
                }
            }
        case 'Mar':
        
            var x=firstDay+5;
                if(x<31){
                    return Console.log("Your Due date is"+x+"December"+year);
                }  else{
                    x=31-x;
                    return console.log("Your Due date is"+x+"January"+year+1);
                }
            
        case 'Apr':
            var x=firstDay+5;
                    if(x<31){
                        return Console.log("Your Due date is"+x+"January"+year+1);
                    }  else{
                        x=31-x;
                        return console.log("Your Due date is"+x+"February"+year+1);
                    }
        case 'May': 
            if(year%4==0){
                    var x=firstDay+4;
                    if(x<29){
                        return Console.log("Your Due date is"+x+"February"+year+1)
                    }  else{
                        x=x-29;
                        return console.log("Your Due date is"+x+"March"+year)
                    }
                    
                }
            else{
                 var x=firstDay+4;
                    if(x<28){
                        return Console.log("Your Due date is"+x+"February"+year);
                    }  else{
                        x=28-x;
                        return console.log("Your Due date is"+x+"March"+year+1);
                    }
            }
        case 'June':
        case 'July':
        case 'August':
        case 'Sep':
        case 'Oct':
        case 'Nov':
        case 'Dec':
        default: return;


    }
    
    



}