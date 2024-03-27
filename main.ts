import inquirer from "inquirer"

let myBalance = 10000; // Dollar

let myPin = 1234;

let PinAnswer =await inquirer.prompt(
  [
    {

        name:"Q1",
        message:"Enter your pin",
        type:"number",
    }
  ]
);

// 12345 === 1234 - false
if (PinAnswer.pin === myPin){
    console.log("Correct pin code!!!");

    let operationAns = await inquirer.prompt(
        [
            {
                name : "operation",
                message :"please select option",
                type:"list",
                choices :["withdraw","check balance"]
            }
        ]
    );
    console.log(operationAns);

    if (operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
           [
             {
                 name : "amount",
                 message:"Enter your amount",
                 type:"number"
             }
           ]       
       )
       // =, -=, +=
       myBalance -= amountAns.amount;

       console.log("your remanining balance is:" + myBalance);
    }else if(operationAns.operation === "check balance"){
        console.log("your balance is:" + myBalance);
    }

}

else{
    console.log("Incorrect pin number");
}
