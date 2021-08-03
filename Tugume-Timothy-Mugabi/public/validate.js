/* Starting 3 letters , Alphanumeric 7 in length*/
//let Name 
/*not less than 8 characters, no Numerics and must start with Capital letters */
//let Gender
/* A Letter in Capital */
//let dob
/*should be 18 years old */
//let nationalId
/*start with 3 letters and 11 in length*/
//let placeofresidence
//let ZwashID
/*Zwash then 3 random numbers*/
var Register=()=>{
    //Grabs the Error Warning elements by Id which displays our errors
    let error1=document.getElementById("error1")
    let error2=document.getElementById("error2")
    let error3=document.getElementById("error3")
    let error4=document.getElementById("error4")
    let error5=document.getElementById("error5")
    let error6=document.getElementById("error6")

   
    //Washer Name Regex
    //let name=/^([a-zA-Z'-.]+[a-zA-Z'-.]+)$/
    let name=/^([a-zA-Z'-.]{1,16})$/
    let nat=/^([a-zA-Z'-.]{5,20})$/
    let occ=/^([a-zA-Z'-.]{5,50})$/
   
    //Previously used date Regex which runs from 1950 to 2003
    //let date=/^(0[1-9]|1[0-2])-([1-9]|[12][0-9]|3[01])-(19[5-9][0-9]|20[0-4]|2003)$/
    
    let surname=document.getElementById("surname")
    let givenname=document.getElementById("givenname")
    let occupation=document.getElementById("occupation")
    let nationality=document.getElementById("nationality")
    let dob=document.getElementById("dob")
    let category=document.getElementById("category")
    //Previously used an Array to display error Messages
    //let messages=[]
    
    
        
        
    if(surname.value.match(name)){
    surname.style.border="3px solid green"
    }
    else{
    surname.style.border="3px solid red"
    error1.innerHTML="This Field is Required"
    return false
    }
    if(givenname.value.match(name)){
        givenname.style.border="3px solid green"
    }
    else{
        givenname.style.border="3px solid red"
        error2.innerHTML="This Field is Required"
        return false
    }
    if(dob.value==""){
        dob.style.border="3px solid red"
        //messages.push("Input date in format mm/dd/yy")
        error5.innerHTML="This Field is Required"
        return false    
            }else{
                dob.style.border="3px solid green"
            }  
    if(occupation.value.match(occ)){
        occupation.style.border="3px solid green"
    }
    else{
        occupation.style.border="3px solid red"
        error3.innerHTML="This Field is Required"
        return false
    }
    
    if(nationality.value.match(nat)){
        nationality.style.border="3px solid green"
    }
    else{
        nationality.style.border="3px solid red"
        error4.innerHTML="This Field is Required"
        return false
    }
            
    

    if(category.value==""){
        category.style.border="3px solid red"
        //messages.push("Input date in format mm/dd/yy")
        error6.innerHTML="This Field is Required"
        return false    
            }else{
                category.style.border="3px solid green"
            }   
            
    
}