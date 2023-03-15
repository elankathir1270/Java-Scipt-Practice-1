
function convert(){

    let units= Number(document.getElementById("input").value)
    let result

if(units>=1 && units<=50){
    result=units*0.75
    // console.log(s1)
}
 
else if(units>50 && units<=150){
    let split= units-50
    result= 50*0.75+split*1
    // console.log(s2) 
}
else if(units>150 && units<=250){
    let split2= units-150
    result= 50*0.75+100*1+split2*1.30
    // console.log(s3) 
}

else if(units>250){
    let split3= units-250
    result= 50*0.75+100*1+100*1.30+split3*1.50
    // console.log(s4) 

}

document.querySelector('#result').innerHTML="Your bill amount is Rs. " + result

}
