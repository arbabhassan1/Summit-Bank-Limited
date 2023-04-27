var username=document.getElementById("username");
var password=document.getElementById("password");

// Function to check the Login Data

function login(){
    if(username.value=="admin" && password.value=="184" || username.value=="user184" && password.value=="12345"){
        // window.location.href = "http://127.0.0.1:5500/dashboard.html";
        window.open("./dashboard.html");

    } else if(username.value=="" || password.value==""){
        window.alert("Please fill username & password");
        
    }
    else{
        window.alert("Incorrect Password & username");
    }

}

// Slider

var button=document.getElementById("wave")
var slider=document.getElementById("slider");
function slide_up(){
    button.style.display="none";
    slider.style.left="0px";
    
}

// Function to Logout User

function logout_user(){
    alert("You have been logged out")
    window.location.href = "./index.html";

}

// Functio to close Slider

function close_slider(){
    slider.style.left="-500px";
    button.style.display="flex";
   
}


// Dashboard Script

var current_balance="500";
document.getElementById("balance").textContent="Rs " + current_balance + ".00";

// function to close alert

function close_alert(){
    document.getElementById("alert-box").style.display="none";
}

var cash_amount="0";


// display cash box

function show_cash(){
    document.getElementById("Add-cash-box").style.display="flex";
}

function add_cash(){
    var cash=document.getElementById("amount");
    cash=cash.value;
    cash=parseInt(cash);
    cash_amount=cash;
    
    current_balance=parseInt(current_balance);
    current_balance=parseInt(cash+ current_balance);
    if(current_balance>10000000){
        alert("Your Account Maximum limt is 5 Million");
        location.reload();
        return;
    }
    document.getElementById("balance").textContent="Rs " + current_balance + ".00";
    document.getElementById("Add-cash-box").style.display="none";
     var sound=document.getElementById("cash-sound");
     sound.play();
     Cash_alert();

}
function Cash_alert(){

    document.getElementById("alert-mesg").textContent="Your Account XXX2864DTY83 is debited with PKR " + cash_amount + ". Your Current Balance is " + current_balance;
    document.getElementById("alert-box").style.display="flex";

}
var limit="50000";
limit=parseInt(limit);
function withdraw_alert(){

    document.getElementById("alert-mesg").textContent="Your Account XXX2864DTY83 is withdraw amount PKR " + cash_amount + ". Your Current Balance is " + current_balance;
    document.getElementById("alert-box").style.display="flex";

}
function show_withdraw(){
    document.getElementById("withdraw-cash-box").style.display="flex";
}

function withdraw(){
    var cash=document.getElementById("w-amount");
    cash=cash.value;
    cash=parseInt(cash);
    cash_amount=cash;
    
    current_balance=parseInt(current_balance);
    current_balance=parseInt(current_balance - cash);
    if(cash>limit){
        alert("Your Daily limt is 50,000");
        location.reload();
        return;
    }else if(cash>current_balance){
        alert("You have Insufficient Balance!");
        location.reload();
        return;
    }
    document.getElementById("balance").textContent="Rs " + current_balance + ".00";
    limit=limit-cash;
    document.getElementById("limit").textContent=limit;
    document.getElementById("withdraw-cash-box").style.display="none";
     var sound=document.getElementById("withdraw-sound");
     sound.play();
     withdraw_alert();

}
