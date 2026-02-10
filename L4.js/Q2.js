// WAP for print days , just like if user enter 1 then output Sunday , if if user enter 2 then output Monday 
const prompt = require("prompt-sync")();
let num = prompt("Enter Number = ")
switch(num){
    case '1':
        console.log("Sunday")
        break
case'2':
console.log("Monday")
    break
    case '3':
    console.log("Tuesday")
    break
    case '4':
        console.log("Wednesday")
        break
        case '5':
            console.log("Thursady")
            break
            case '6':
                console.log("Friday")
                break
                case '7':
                    console.log("Saturday")
                    break
                    default:
                        console.log("Worng input")
                        break
}