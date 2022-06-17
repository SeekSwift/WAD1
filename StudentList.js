function filterTable(){
    document.getElementById("department");
    var select = document.getElementById('department');
    var value = select.options[select.selectedIndex].value;
    let students = ['Mobile Application Development', 'Web Application Development', 'Programming', 'Data Science'];
    let filteredStudents = students.filter(department => department == value);

    if(filteredStudents.includes("Mobile Application Development")){
        document.getElementById('3').style.display='none';
        document.getElementById('4').style.display='none';
        document.getElementById('5').style.display='none';
    }
    else if(filteredStudents.includes("Web Application Development")){
        document.getElementById('1').style.display='none';
        document.getElementById('2').style.display='none';
        document.getElementById('4').style.display='none';
        document.getElementById('5').style.display='none';
    }
    else if(filteredStudents.includes("Programming")){
        document.getElementById('1').style.display='none';
        document.getElementById('2').style.display='none';
        document.getElementById('3').style.display='none';
        document.getElementById('5').style.display='none';
    }
    else if(filteredStudents.includes("Data Science")){
        document.getElementById('1').style.display='none';
        document.getElementById('2').style.display='none';
        document.getElementById('3').style.display='none';
        document.getElementById('4').style.display='none';
    }
    else{
        window.alert("Your applied filter did not result in any students! Reload the page and try again.");
    }
}

function filterTableDate(){
    var select = document.getElementById('semester');
    var value = select.options[select.selectedIndex].value;

    if(value == "summersemester"){
        document.getElementById('4').style.display='none';
        document.getElementById('5').style.display='none';
    } else{
        document.getElementById('1').style.display='none';
        document.getElementById('2').style.display='none';
        document.getElementById('3').style.display='none';
    }
}