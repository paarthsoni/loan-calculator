function calculate()
{
var amount=parseInt(document.getElementById("amount").value);
var interest=parseInt(document.getElementById("interest").value);
var timeperiod=parseInt(document.getElementById("months").value);
if (amount<0)
{
    alert("Please enter a positive amount value");

}
else if (interest<0)
{
    alert("Please enter a positive interest value");
}
else if(timeperiod<0)
{
    alert("Please enter a positive value in the month field");
}
else{
var totalamount=(amount*(interest/100))+amount;
var installment=(totalamount/timeperiod);
installment=installment.toFixed(2);
document.getElementById('display1').innerHTML = "Monthly Installment is of ₹ "+installment;
}
}