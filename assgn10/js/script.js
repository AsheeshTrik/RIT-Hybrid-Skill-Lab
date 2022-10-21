function factorial() {
    var n1 = document.getElementById("input1").value;
    var fact = 1;
    if (n1 < 0)
        alert("Factorial of negative numbers cannot be calculated!");
    else {
        for (var i = 1; i <= n1; i++) {
            fact = fact * i;
        }
        document.writeln("Factorial of " + n1 + " is " + fact);
    }

}
function prime() {
    var n = document.getElementById("input1").value;
    var check = 1;
    for (var i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            check = 0;
            break;
        }
    }
    if (n == 1)
        document.writeln("1 is neither prime nor composite");
    else if (check == 1)
        document.writeln(n + " is a prime number");
    else
        document.writeln(n + " is not a prime number");
}
function fibonacci() {
    var n = document.getElementById("input1").value;
    var arr = [];
    arr[0] = 0;
    arr[1] = 1;
    if (n < 1)
        alert("Invalid entry!");
    else if (n == 1)
        document.writeln("The first number in the Fibonacci series is 0");
    else {
        for (var i = 2; i < n; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
        document.writeln("The first " + n + " numbers in the Fibonacci series are " + arr);
    }


}
function natural() {
    var n = document.getElementById("input1").value;
    var arr = [];
    if (n < 1)
        alert("Invalid entry!");
    else {
        for (var i = 1; i <= n; i++) {
            arr[i - 1] = i;
        }
        document.writeln("The first " + n + " natural numbers are " + arr);
    }

}
function focusFunction() {
    document.getElementById("input1").style.background = "aqua";
}