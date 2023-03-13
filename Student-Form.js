function eyeShowHide()
{
    let inputBox=document.getElementById('eye')
    let type=inputBox.type
   
        if(type=='password')
        {
       
        inputBox.setAttribute("type","text")
        }
        else
         {
        inputBox.setAttribute("type","password") 
        }
    
   
   
}
function rajaRani()
{
    let inputBox=document.getElementById('a1')
    let input=document.getElementById('eye')
    let mobile=inputBox.value 
    let length=mobile.length
    if(length>=15)
    {
       
        inputBox.style.color="green"
        input.removeAttribute('disabled')
        window.alert('proceed')
       
    }
    else{
       
        inputBox.style.color="green"
        
    }

}
function percentage()
{
    let percentage=prompt('enter your btech cgpa')
    let strong=document.getElementById('id')
    if(percentage<=9.9&&percentage>=8.9)
    {
        strong.innerHTML="<h1 style='color:black'>Eligible to postgraduation</h1>"

    }
    else if(percentage<=8.0&&percentage>6.0)
    {
    
        strong.innerHTML="<h1 style='color:black'> Eligible to govt jobs</h1>"
        
    }
   else if(percentage<=6.0&&percentage>5.0)
    {
    
        strong.innerHTML="<h1 style='color:red'>Not eligible to It sector</h1>"
    
        
    }
  
    if(percentage==null ||percentage=="")
    {
        strong.innerHTML="<h1 style='color:red'>please enter valid marks</h1>"
        
    }
}
function button()
{
    let radioButtons=document.getElementsByName('answer')
    let div=document.getElementById('raj')
    let status1=radioButtons[0].checked
    let status2=radioButtons[1].checked
    let status3=radioButtons[2].checked
    if(status1==true)
    {
        div.innerHTML="<video src='wipro.mp4'controls style='width:10%px;height:400px'></video>"
    }
    else if(status2==true)
    {
        div.innerHTML="<video src='infosys1.mp4'controls style='width:10%px;height:400px'></video>"
    }
    else if(status3==true)
    {
        div.innerHTML="<video src='deloitee.mp4'controls style='width:10%px;height:400px'></video>"
    }
}
