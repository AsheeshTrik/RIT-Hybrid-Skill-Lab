var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];

var n = 1;
var x = 0;
var totalPrice = 0;

function AddRow() {
    var AddRown = document.getElementById('show');
    var NewRow = AddRown.insertRow(n);

    // Retrieving data from form
    list1[x] = document.getElementById("itemPurchased").value;
    list2[x] = document.getElementById("qty").value;
    list3[x] = document.getElementById("itemCode").value;
    list4[x] = document.getElementById("itemPrice").value;

    var currQty = parseInt(list2[x]);
    var currPrice = parseInt(list4[x]);

    // Calculating running total
    totalPrice += (currPrice * currQty);

    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);

    // Appending data to the table
    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];

    n++;
    x++;

    // Clearing form after storing data
    document.getElementById("itemPurchased").value = '';
    document.getElementById("qty").value = '';
    document.getElementById("itemCode").value = '';
    document.getElementById("itemPrice").value = '';
}

function ShowTotal() {
    document.getElementById("total").innerHTML = '<span style="font-size:40px;color: green;background-color: orange">Your checkout total is: ' + totalPrice + '</span>';
}