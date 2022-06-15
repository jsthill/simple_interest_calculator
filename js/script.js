function compute()
{
    // Get the values for each input field.
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Calculate the interest.
    var interest = principal * years * rate / 100;
    
    // Convert the 'No of Years' into the actual year in the future.
    var year = new Date().getFullYear() + parseInt(years);

    // Do some validation before attempting to calculate the result.
    // First check the amount/principal field.
    if (principal <= 0 || principal == '') {
        alert('Enter a positive number');
        document.getElementById("principal").focus();
        return false;
    }

    // Time to output the results.
    var result = document.getElementById("result");
    result.innerHTML = "If you deposit <span id=nums>" + principal + ",<br>" +
                        "</span>at an interest rate of <span id=nums>" + rate + "%</span>.<br>" +
                        "You will receive an amount of <span id=nums>" + interest + "</span>,<br>" +
                        "in the year <span id=nums>" + year + "</span>"
}

function updateRate() {
    // Function to update the label for the rate control.
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval.toString() + "%";
}
