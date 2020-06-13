function calc() {
    var bill = document.getElementById('bill').value;
    var persons = document.getElementById('persons').value;
    var options = document.getElementsByTagName('option');
    var tip = document.getElementById('tip');
    var percentage;

    if (options[0].selected) {
        options[0].innerHTML = "Please Select an Option";
    } else if (options[1].selected) {
        percentage = (bill * 30 / 100) / persons;
    } else if (options[2].selected) {
        percentage = (bill * 20 / 100) / persons;
    } else if (options[3].selected) {
        percentage = (bill * 10 / 100) / persons;
    } else if (options[4].selected) {
        percentage = 0;
    }
    tip.innerHTML = "TIP PER HEAD : " + percentage.toFixed(2) + " $";
}