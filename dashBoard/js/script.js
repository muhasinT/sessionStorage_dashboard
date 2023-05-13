// dashboard details script below//



let userData;


//session accesing
let tempmail  = "session";      //accessing datas create a temporay mail
let dataBytemp = localStorage.getItem(tempmail);
let datMail    = JSON.parse(dataBytemp); // parse the data

////session end

//data geting from local storage
if ( tempmail in localStorage) {
    let dataFromLocalstorage = localStorage.getItem(datMail);
    userData = JSON.parse(dataFromLocalstorage);

}
let user_name = userData.userName;

$("#dashUser").html(user_name);



// logout session removing
function session_remove(){
    localStorage.removeItem("session"); 

}
// //account number
const accountNnumber=userData.account
$("#account_number").html(accountNnumber)

// acocount balance 

const balance=userData.balance;
$("#account_balance").html(balance)


// transfer fund details



$("#transferBtn").click(function(e){
    e.preventDefault();

    let transAccnt = $("#trnsferAccount").val();
    let transAmnt  = $("#trnsferAmount").val();
    let amount = parseInt(transAmnt);

    
let users = Object.values(window.localStorage);

let transferAcntDetails = {};

for(let item of users){
   let itemJs =  JSON.parse(item);


    if(itemJs["account"] == transAccnt ){

        transferAcntDetails =  itemJs["email"];

    }else{
    }
}
   

 if(transferAcntDetails in localStorage){
    let transDataFrmlcl = localStorage.getItem(transferAcntDetails);

    let transData = JSON.parse(transDataFrmlcl);


    if(userData.balance >= amount){
        let transferBal = parseInt(transData.balance)

         transferBal += amount;
         transData.balance = transferBal;

        let creditObj = {};

        creditObj.userName =userData.userName;
        creditObj.amnt  = amount;
        creditObj.frmAccnt = userData.account;
        console.log(transData);

        transData.transactions[0].credit.push(creditObj)

        let for_stringify = JSON.stringify(transData);
        localStorage.setItem(transferAcntDetails, for_stringify);

        userData.balance -= amount;

        let debitObj = {}
        debitObj.name = transData.userName;
        debitObj.amount =amount;
        debitObj.toAccnt = transData.account;
        userData.transactions[1].debit.push(debitObj)

        let con_verting = JSON.stringify(userData)

        localStorage.setItem(datMail, con_verting)
        window.alert("TRANSACTION SUCCESS!!!!")

        transData.credit.push(creditObj);
 
    } else {
      window.alert("insuficiant balance")
    }
 }else{
    window.alert("invalid accno")
 }


});
let baLance = userData.balance
$("#account_balance").html(balance)