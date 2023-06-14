function sendMail() {
   
    var params = {
      from_name: document.getElementById("name").value,
      email_id: document.getElementById("email").value,
      gender: document.getElementById("gender").value,
      message: document.getElementById("message").value,

    };
  
    const serviceID = "service_z8lro78";
    const templateID = "template_6zdonwc";

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!(document.getElementById("email").value.match(mailformat)))
    {
        document.getElementById("email").value="";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").placeholder="Invalid email address!";
        
    }
    else if(document.getElementById("name").value=="")
    {
        document.getElementById("name").style.borderColor = "red";
        document.getElementById("name").placeholder="Name cannot be left blank!";
    }
    else if(document.getElementById("message").value=="")
    {
        document.getElementById("message").style.borderColor = "red";
        document.getElementById("message").placeholder="Message cannot be left blank!";
    }
    else
    {
        document.getElementById("name").style.borderColor = "#1d2dfd";
        document.getElementById("email").style.borderColor = "#1d2dfd";
        document.getElementById("message").style.borderColor = "#1d2dfd";
        document.getElementById("gender").style.borderColor = "#1d2dfd";
        document.getElementById("name").placeholder="Name";
        document.getElementById("message").placeholder="Message";
        document.getElementById("email").placeholder="Email";

        emailjs.send(serviceID, templateID, params)
        .then(res=>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        
            console.log(res);
            document.getElementById("send").innerHTML = "Thank you!";
            document.getElementById("send").style.backgroundColor = "#4CAF50";
            
    
        })
        .catch(err=>console.log(err));
        setTimeout(function(){
            window.location.reload(1);
         }, 6000);
    
    }
  










  
  }
  
  