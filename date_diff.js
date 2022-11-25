function date_diff(start_day, start_month, start_year, end_day, end_month, end_year) {
    let days   = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let anneeBissextile = 0;

    if(((start_year % 4 == 0 && start_year % 100 != 0) || start_year % 400 == 0)) {
        anneeBissextile = 1;
    }
    
    let nbDays = 0;
    let nbDaysBissextile = 0;
    let nbMonths = 0;
    let year_diff = end_year - start_year;
    if(year_diff > 0) {
        for(let i = 0; i < year_diff; i++) {
            nbMonths += 12;
        }
        for(let i = start_year; i < end_year; i++) {
            if((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
                nbDaysBissextile += 1;
            }
        }
    } else {
        nbDaysBissextile = anneeBissextile;
    }
    let month_diff = (end_month + nbMonths) - start_month;
    if (month_diff > 0) {
        let index_month = (start_month - 1);
        for(let i = 0; i < month_diff; i++) {
            let incr = 0;
            if(i > 0) incr = 1;
            index_month = index_month + incr;
            if(index_month > 11) index_month = index_month - 12;
            nbDays += days[index_month];
        }
    }
    let day_diff = (end_day + nbDays + nbDaysBissextile) - start_day;
    
    return day_diff;
}