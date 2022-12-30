function submitForm(){
    let one=document.getElementById("number").value;
    let two=document.getElementById("name").value;
    let three=document.getElementById("email").value;
    
    
    if(!one||!two||!three)
    {
        return false;
    }
    else{
        
        alert("successfully submited");
    }
    }