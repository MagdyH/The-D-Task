export const Utilities = {
    convertDate(date){
    var date1 = new Date(date);
    date1.setHours(0,0,0,0);
    return date1;
}
}

export default Utilities;