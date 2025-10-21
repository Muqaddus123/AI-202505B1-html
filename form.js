$(document).ready(function(){


    // name validation
    $("#name").keyup(function(){
        let name = $(this).val()
        let nameRE = /^[a-zA-Z\s]{5,}$/
        
        if(!nameRE.test(name)){
            $(this).next("span").show().text("only allow alphabets").css("color", "red")
            $(this).css("border", "2px solid red")
        }else{
            $(this).next("span").hide()
             $(this).css("border", "2px solid green")
        }
    })


      // email validation
      $("#email").keyup(function(){
        let email = $(this).val()
        let emailRE = /^[a-z0-9\.\-\_]{5,}[@][a-z]{5}[.][a-z]{3}$/
        
        if(!emailRE.test(email)){
            $(this).next("span").show().text("only allow alphabets").css("color", "red")
            $(this).css("border", "2px solid red")
        }else{
            $(this).next("span").hide()
             $(this).css("border", "2px solid green")
        }
    })
})