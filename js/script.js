//Custom Javascript

alert('This Blog is in Development Process.');

function today(){
    let date = new Date();
    let dateToday = date.getDate();
    let dayToday = date.getDay();
    let monthToday = date.getMonth();
    let yearToday = date.getFullYear();
    let addOn = "";
    
    if(dateToday === 1  ||  dateToday === 21  ||  dateToday === 31){
        addOn = "st";
    }
    else if(dateToday === 2  ||  dateToday === 22){
        addOn = "nd";
    }
    else if(dateToday === 3  ||  dateToday === 23){
        addOn = "rd";
    }
    else{
        addOn = "th";
    }
    
    switch(monthToday){
        case 0: monthToday = "Jan";
            break;
            
        case 1: monthToday = "Feb";
            break;
            
        case 2: monthToday = "Mar";
            break;
            
        case 3: monthToday = "Apr";
            break;
            
        case 4: monthToday = "May";
            break;
            
        case 5: monthToday = "Jun";
            break;
            
        case 6: monthToday = "Jul";
            break;
            
        case 7: monthToday = "Aug";
            break;
            
        case 8: monthToday = "Sep";
            break;
            
        case 9: monthToday = "Oct";
            break;
            
        case 10: monthToday = "Nov";
            break;
            
        case 11: monthToday = "Dev";
            break;    
            
    }
    
    switch(dayToday){
        case 1: dayToday = "Monday";
            break;
        
        case 2: dayToday = "Tuesday";
            break;
            
        case 3: dayToday = "Wednesday";
            break;
            
        case 4: dayToday = "Thursday";
            break;
            
        case 5: dayToday = "Friday";
            break;
            
        case 6: dayToday = "Saturday";
            break;
            
        case 7: dayToday = "Sunday";
            break;    
    }
    
    let pushDate = document.getElementById('date');
    pushDate.innerHTML = `${dateToday}${addOn} ${monthToday} ${yearToday}, ${dayToday}`;
};
