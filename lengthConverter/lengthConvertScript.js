function convert(){

    const cmVal = Number(document.getElementById("input").value)
    const invhVal = cmVal/2.54
    const result= document.getElementById("result")
    result.innerHTML= invhVal.toFixed(2)+ "inches"
    
    }