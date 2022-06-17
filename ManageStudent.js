window.onload = function() {
    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();

    //Add a zero if one Digit (eg: 05,09)
    if (dd < 10) {
        dd = "0" + dd;
    }

    //Add a zero if one Digit (eg: 05,09)
    if (mm < 10) {
        mm = "0" + mm;
    }

    minYear = yyyy - 60;
    maxYear = yyyy - 17;

    var min = minYear + "-" + mm + "-" + dd;
    var max = maxYear + "-" + mm + "-" + dd;

    document.getElementById("DOB").setAttribute("min", min);
    document.getElementById("DOB").setAttribute("max", max);
};