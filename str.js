
function marks(){
     let nam = document.getElementById("nam").value
     let rol = document.getAnimations("roll").value
     let mats = parseInt(document.getElementById("maths").value)
     let phs = parseInt(document.getElementById("phy").value)
     let ens = parseInt(document.getElementById("eng").value)
     let urds = parseInt(document.getElementById("urdu").value)

if( mats > 100 || phs > 100 || ens > 100 || urds > 100 ){
    alert("Please enter correct number")

   

}
else{
    document.getElementById("nami").innerHTML = nam;
    
    let totals =  mats + phs + ens + urds;

    document.getElementById("obt").innerHTML = "maths " +mats+ "<br> Phyiscs " +phs+ " <br> English " +ens+ " <br> Urdu " +urds+  "<br> TOTAL MARKS  " + totals+ "";
  
}



}

function perc(){
    let nam = document.getElementById("nam").value
    let rol = document.getAnimations("roll").value
    let mats = parseInt(document.getElementById("maths").value)
    let phs = parseInt(document.getElementById("phy").value)
    let ens = parseInt(document.getElementById("eng").value)
    let urds = parseInt(document.getElementById("urdu").value)

if( mats > 100 || phs > 100 || ens > 100 || urds > 100 ){
   alert("Please enter correct number")

  

}
else{
    let totals =  mats + phs + ens + urds;
   let percentage =(totals/400)*100;

   document.getElementById("per").innerHTML  = Math.floor( percentage) +"%";
}



}

function grade(){
    let nam = document.getElementById("nam").value
   //  let rol = document.getAnimations("roll").value
    let mats = parseInt(document.getElementById("maths").value)
    let phs = parseInt(document.getElementById("phy").value)
    let ens = parseInt(document.getElementById("eng").value)
    let urds = parseInt(document.getElementById("urdu").value)

if( mats > 100 || phs > 100 || ens > 100 || urds > 100 ){
   alert("Please enter correct number")

  

}
else{

   document.getElementById("nami").innerHTML = nam;
   let totals =  mats + phs + ens + urds;

   let percentage =(totals/400)*100;


   if(percentage<100 && percentage>=90){
    document.getElementById("grd").innerHTML = "A+"
    }
    else if(percentage<90 && percentage>=80){
        document.getElementById("grd").innerHTML = "A"
    }
    else if (percentage<80 && percentage>=70){
        document.getElementById("grd").innerHTML = "B"
    }
    else if (percentage<70 && percentage>=60){
        document.getElementById("grd").innerHTML = "C"
    }
    else{
        document.getElementById("grd").innerHTML = "Fail"
    }
  
}



}








// 
