

var passwordInput = document.querySelector("#password").value;
var signUpButton = document.querySelector("#sign-up");
var userPasswordSpan = document.querySelector("#user-password");


var P9Input=document.querySelector('#password9')
var userPasswordSpan9= document.querySelector('#user-password9')
var signUpButton9=document.querySelector('#sign-up9')

var P10Input=document.querySelector('#password10')
var userPasswordSpan10= document.querySelector('#user-password10')
var signUpButton10=document.querySelector('#sign-up10')

var P11Input=document.querySelector('#password11')
var userPasswordSpan11= document.querySelector('#user-password11')
var signUpButton11=document.querySelector('#sign-up11')

var P12Input=document.querySelector('#password12')
var userPasswordSpan12= document.querySelector('#user-password12')
var signUpButton12=document.querySelector('#sign-up12')

var P1Input=document.querySelector('#password1')
var userPasswordSpan1= document.querySelector('#user-password1')
var signUpButton1=document.querySelector('#sign-up1')

var P2Input=document.querySelector('#password2')
var userPasswordSpan2= document.querySelector('#user-password2')
var signUpButton2=document.querySelector('#sign-up2')

var P3Input=document.querySelector('#password3')
var userPasswordSpan3= document.querySelector('#user-password3')
var signUpButton3=document.querySelector('#sign-up3')

var P4Input=document.querySelector('#password4')
var userPasswordSpan4= document.querySelector('#user-password4')
var signUpButton4=document.querySelector('#sign-up4')

renderLastRegistered();
$(document).ready(function() {
  var now =moment();
  $("#now").text(now.format(''))
})

  // get Item
  function renderLastRegistered() {
   
    var password = localStorage.getItem("password");
    userPasswordSpan.textContent = password;

    var password9=localStorage.getItem('password9');
    userPasswordSpan9.textContent=password9

    var password10=localStorage.getItem('password10');
    userPasswordSpan10.textContent=password10
    
    var password11=localStorage.getItem('password11');
    userPasswordSpan11.textContent=password11

    var password12=localStorage.getItem('password12');
    userPasswordSpan12.textContent=password12
    
    var password1=localStorage.getItem('password1');
    userPasswordSpan1.textContent=password1
    
    var password2=localStorage.getItem('password2');
    userPasswordSpan2.textContent=password2
    
    var password3=localStorage.getItem('password3');
    userPasswordSpan3.textContent=password3

    var password3=localStorage.getItem('password4');
    userPasswordSpan4.textContent=password3
    
    

  }
  //8
  signUpButton.addEventListener("click", function(event) {
    event.preventDefault();
  
    var password = document.querySelector("#password").value;
  
      
      localStorage.setItem("password", password);
      renderLastRegistered();
  }
  );
  //9
  signUpButton9.addEventListener("click", function(event) {
    event.preventDefault();
  
    var password = document.querySelector("#password9").value;
  
      
      localStorage.setItem("password9", password);
      renderLastRegistered();
  }
  );
//10

signUpButton10.addEventListener("click",function(event){
  event.preventDefault();

  var password=document.querySelector("#password10").value


localStorage.setItem('password10',password)
renderLastRegistered();
})

//11


signUpButton11.addEventListener("click",function(event){
  event.preventDefault();

  var password=document.querySelector("#password11").value


localStorage.setItem('password11',password)
renderLastRegistered();
})

//12


signUpButton12.addEventListener("click",function(event){
  event.preventDefault();

  var password=document.querySelector("#password12").value


localStorage.setItem('password12',password)
renderLastRegistered();
})


//1

signUpButton1.addEventListener("click",function(event){
  event.preventDefault();

  var password=document.querySelector("#password1").value


localStorage.setItem('password1',password)
renderLastRegistered();
})


signUpButton2.addEventListener("click",function(event){
  event.preventDefault();

  var password=document.querySelector("#password2").value


localStorage.setItem('password2',password)
renderLastRegistered();
})

signUpButton3.addEventListener("click",function(event){
  event.preventDefault();

  var password=document.querySelector("#password3").value


localStorage.setItem('password3',password)
renderLastRegistered();
})





signUpButton4.addEventListener("click",function(event){
  event.preventDefault();

  var password=document.querySelector("#password4").value


localStorage.setItem('password4',password)
renderLastRegistered();
})






//highlights
  $(document).ready(function(){
    $(".btn-light").click(function(){
      $(".x").css("background-color", "green");
    });
  });

  $(document).ready(function(){
    $(".btn-dark").click(function(){
      $(".x").css("background-color", "white");
    });
  });


  
  $(document).ready(function(){
    $("#nine").click(function(){
      $(".nine").css("background-color", "green");
    });
  });

  $(document).ready(function(){
    $("#ninen").click(function(){
      $(".nine").css("background-color", "white");
    });
  });
  
    
  
      
       
  $(document).ready(function(){
    $("#ten").click(function(){
      $(".ten").css("background-color", "green");
    });
  });

  $(document).ready(function(){
    $("#tenn").click(function(){
      $(".ten").css("background-color", "white");
    });
  });


   
  $(document).ready(function(){
    $("#eleven").click(function(){
      $(".eleven").css("background-color", "green");
    });
  });

  $(document).ready(function(){
    $("#elevenn").click(function(){
      $(".eleven").css("background-color", "white");
    });
  });
  

     
  $(document).ready(function(){
    $("#twelve").click(function(){
      $(".twelve").css("background-color", "green");
    });
  });

  $(document).ready(function(){
    $("#twelven").click(function(){
      $(".twelve").css("background-color", "white");
    });
  });

  $(document).ready(function(){
    $("#one").click(function(){
      $(".one").css("background-color", "green");
    });
  });

  $(document).ready(function(){
    $("#onen").click(function(){
      $(".one").css("background-color", "white");
    });
  });


  $(document).ready(function(){
    $("#two").click(function(){
      $(".two").css("background-color", "green");
    });
  });

  $(document).ready(function(){
    $("#twon").click(function(){
      $(".two").css("background-color", "white");
    });
  });

  $(document).ready(function(){
    $("#three").click(function(){
      $(".three").css("background-color", "green");
    });
  });

  $(document).ready(function(){
    $("#threen").click(function(){
      $(".three").css("background-color", "white");
    });
  });

  $(document).ready(function(){
    $("#four").click(function(){
      $(".four").css("background-color", "green");
    });
  });

  $(document).ready(function(){
    $("#fourn").click(function(){
      $(".four").css("background-color", "white");
    });
  });




  $("#tabs").tabs({
    activate: function (event, ui) {
        var active = $('#tabs').tabs('option', 'active');
        $("#tabid").html('the tab id is ' + $("#tabs ul>li a").eq(active).attr("href"));

    }
}

);