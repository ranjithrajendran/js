function validatelogin(){
	var x = document.getElementById("username");
	var form= document.getElementById("form");
	var y = document.getElementById("password");
   if (x.value.trim() == "") {
       document.getElementById("err").innerHTML="enter username";
       document.getElementById("err1").innerHTML="";
        document.getElementById("res").innerHTML="";
   
    }
    else if (y.value.trim() == "") {
    	 document.getElementById("res").innerHTML="";
    	document.getElementById("err").innerHTML="";
    	document.getElementById("err1").innerHTML="enter password";
    }
    else{
    	document.getElementById("err").innerHTML="";
    	document.getElementById("err1").innerHTML="";
    	document.getElementById("res").innerHTML="LOGIN SUCCESSFULL";
    }
}


function validatesignup(){
    var x = document.getElementById("username1");
    var y = document.getElementById("password1");
    var e = document.getElementById("email1");
    var em = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if (x.value.trim() == "" || x.value.length >20 ) {
       document.getElementById("Serr").innerHTML="enter valid username";
       document.getElementById("Serr1").innerHTML="";
        document.getElementById("Sres").innerHTML="";
        document.getElementById("Serr2").innerHTML="";
   
    }
    else if (!(em.test(e.value))){
         document.getElementById("Sres").innerHTML="";
        document.getElementById("Serr").innerHTML="";
        document.getElementById("Serr1").innerHTML="";
        document.getElementById("Serr2").innerHTML="enter valid email id";
    }
    else if ( y.value.trim() == "" || y.value.length < 6 || y.value.length > 16 ) {
         document.getElementById("Sres").innerHTML="";
        document.getElementById("Serr").innerHTML="";
        document.getElementById("Serr2").innerHTML="";
        document.getElementById("Serr1").innerHTML="enter valid password";
    }
    
    else {
        document.getElementById("Serr").innerHTML="";
        document.getElementById("Serr1").innerHTML="";
        document.getElementById("Serr2").innerHTML="";
        document.getElementById("Sres").innerHTML="SIGN UP SUCCESSFULL";
    }
    

}