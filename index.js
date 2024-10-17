let time1active = false
let time2active = false
function click1(){
    if(time1active|| time2active){
        return
    }
    if(document.getElementById("input1").value == "" || document.getElementById("input1").value <0 || document.getElementById("input1").value ==0){
      
return false
    }

time1active = true
var result  = document.getElementById("result")
result.style.visibility = "visible"
var time = document.getElementById("input1").value
function updatetime(){
if(time > 0){
    time--
    result.innerHTML = time + "s"
    setTimeout(updatetime,1000)

}
else{
    alert("Time finished")
    result.style.visibility= "hidden"
    time1active= false
  

}

}
updatetime()
}



