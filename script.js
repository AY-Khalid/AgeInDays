function yearOfBirth() {
    var yearsInDays = prompt("Please enter your birth year");
    var currentYear = document.getDays();
    var getDays = (currentYear-yearsInDays) * 365;
    var getHours = getDays * 24;
    var h1 = document.createElement("h1"); 
    var textAnswer = document.createTextNode("From " + yearsInDays +
     " till date, you are " + getDays + " days " + getHours + " hours " + " old");
    h1.setAttribute("id", "yearOfBirth");
    h1.appendChild(textAnswer);
    document.getElementById("results").appendChild(h1);
}

function reset() {
    document.getElementById("yearOfBirth").remove();
}