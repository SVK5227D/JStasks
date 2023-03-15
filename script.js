
//Checking the value is ODD or Even
function oddeven() {

    //Getting value from the input field
    let value = document.getElementById("oddeven").value;

    if (value % 2 == 0) {
        document.getElementById("oddevenout").innerHTML = (value + " is a even number");
    }
    else {
        document.getElementById("oddevenout").innerHTML = (value + " is a odd number");
    }
}


//Checking the value is Prime or Not prime number
function prime() {

    //Getting value from the input field
    let value1 = document.getElementById("prime").value;
    var empty = true;

    for (i = 2; i < value1; i++) {
        if (value1 % i == 0) {
            empty = false;
            break;
        }

        if (empty == true) {
            document.getElementById("primeout").innerHTML = (value1 + " is a Prime Number");
        }
        else {
            document.getElementById("primeout").innerHTML = (value1 + " is not a Prime Number");

        }
    }
}

//Checking fibonacci series

function fibon() {

    let value2 = document.getElementById("fibon").value;
    let x = 0, y = 1, empty2;

    document.write('Fibonacci Series : ');
    document.write("\t" + x); // print 0
    document.write("\t" + y); // print 1

    empty2 = x + y;

    while (empty2 <= value2) {

        // print the next term
        document.write("\t" + empty2);

        x = y;
        y = empty2;
        empty2 = x + y;
    }

}

function sum() {

    let value3 = [2, -9, 0, 5, 12, -25, 22, 9, 8, 12];
    let empty4 = 0;

    value3.forEach(element => {
        empty4 = element + empty4;

    });
    document.write(empty4 + " is the sum of array");
    let avg;
    let length = value3.length;
    avg = empty4 / length;
    document.writeln("---------------" + avg + " is the average of array");

}

function pattern1() {
    let value4 = document.getElementById("pattern1").value; // height of pattern
    let string = "";
    for (let i = 1; i <= value4; i++) {
        for (let j = 1; j <= i; j++) {
            string += j;
        }
        string += "\n";
    }
    console.log(string);
}

function pattern2(){
    let value5 = document.getElementById("pattern2").value;
    let string2 = "";
    let count = 1;
    for(let i = 1 ; i<=value5;i++){
        for(let j = 1 ; j<=i ; j++){
            string2 += count;
            count++;
        }
        string2 += "\n";
    }
    console.log(string2);
}

function pattern3(){
    let value6 = document.getElementById("pattern3").value;
    let string3 = "";
    for(let i = 1 ; i<=value6;i++){
        for(let j = 1 ; j<=i ; j++){
            string3 += '*';
        }
        string3 += "\n";
    }
    console.log(string3);
}

function pattern4(){
    let value7 = document.getElementById("pattern4").value;
    let string4 = "";
    for(let i = 1 ;i<=value7;i++){
        let z = value7 - i;
        for(let j=1; j <= z ;j++){
            string4 += " ";
        }
        for(let k = 1;k<=i;k++){
            string4 += "*";
        }
        string4 +="\n";
    }
    console.log(string4);
}