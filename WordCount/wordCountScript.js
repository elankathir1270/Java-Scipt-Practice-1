function convert(){

    const para = document.getElementById("input").value
    const splitResult = para.split(' ')
    const output= splitResult.length
    const result= document.getElementById("result")
    result.innerHTML= output
    
    }
