function calculateDays(fecha) {
    var dateStandar = new Date("01/01/2021");
    var date = new Date(fecha);

    var Difference_In_Time = date.getTime() - dateStandar.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    console.log("fecha: " + date +
        "Variable dia = " + Difference_In_Days);

}