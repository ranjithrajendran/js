var userDetails = [];

function validatelogin(){
	var x = document.getElementById("username");
	var y = document.getElementById("password");
    var a=0;
   if (x.value.trim() == "") {
       a=1;
       document.getElementById("err").innerHTML="enter username";
        document.getElementById("res").innerHTML="";
   
    }
    else{
        document.getElementById("err").innerHTML="";
    }
    if (y.value.trim() == "") {
        a=1;
    	 document.getElementById("res").innerHTML="";
    	document.getElementById("err1").innerHTML="enter password";
    }
    else{
        document.getElementById("err1").innerHTML="";
    }
    if(a==0){
        userDetails = JSON.parse(localStorage["userDetails"]);
        var valid=0;
        for(var i=0;i<userDetails.length;i++)
        {
          var checkusername =JSON.parse(localStorage["userDetails"])[i].username;
          var checkpassword =JSON.parse(localStorage["userDetails"])[i].password;
    
          if ((checkusername==document.getElementById("username").value) && (checkpassword==document.getElementById("password").value))
            {
              valid=1;
              break;
            }
        }

        if(valid==0)
        {
           document.getElementById("res").innerHTML="INCORRECT CREDENTIALS";
        }    
        else
        {
	  document.getElementById("err").innerHTML="";
          document.getElementById("err1").innerHTML="";
          document.getElementById("res").innerHTML="LOGIN SUCCESSFULL";
          window.open("https://www.qburst.com/")
        }
    }
}

function validatesignup(){
    var x = document.getElementById("username1");
    var y = document.getElementById("password1");
    var e = document.getElementById("email1");
    var em = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var b=0;
   if (x.value.trim() == "" || x.value.length >20 ) {
        b=1;
       document.getElementById("Serr").innerHTML="enter valid username";
        document.getElementById("Sres").innerHTML="";
    }
    else{
        document.getElementById("Serr").innerHTML="";
    }
    if (!(em.test(e.value))){
        b=1
         document.getElementById("Sres").innerHTML="";
        document.getElementById("Serr2").innerHTML="enter valid email id";
    }
    else{
        document.getElementById("Serr2").innerHTML="";
    }
    if ( y.value.trim() == "" || y.value.length < 6 || y.value.length > 16 ) {
        b=1
         document.getElementById("Sres").innerHTML="";
        document.getElementById("Serr1").innerHTML="enter valid password";
    }
    else{
        document.getElementById("Serr1").innerHTML="";
    }
    
    if(b==0) 
    {
      var user = {
      username: x.value,
      email: e.value,
      password: y.value,
    };
    if (localStorage.firstentry)
    {
      userDetails = JSON.parse(localStorage["userDetails"]);
    }
      userDetails.push(user);
      localStorage.setItem("userDetails",JSON.stringify(userDetails));
      localStorage.firstentry += 1;
      document.getElementById("Serr").innerHTML="";
      document.getElementById("Serr1").innerHTML="";
      document.getElementById("Serr2").innerHTML="";
      document.getElementById("Sres").innerHTML="SIGN UP SUCCESSFULL";
      window.open("https://www.qburst.com/");
    }
}
