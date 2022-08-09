const arr=[];
function writeCards(arr,event){
const arr2=[];
for(let i=0; i<arr.length; i++){
    arr2.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
}
return arr2;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(number){
    while(number>0 || number===0){
        console.log(number);
        number--;
    }
}
countDown(10);