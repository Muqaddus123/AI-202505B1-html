$(document).ready(function(){
    $("#add").click(function(){
        $("p").addClass("bg-info")
    })


      $("#remove").click(function(){
        $("p").removeClass("bg-info")
    })

      $("#toggle").click(function(){
        $("p").toggleClass("highlight")
    })

     $("#after").click(function(){
        $("li").after("<li>hello</li>")
    })

     $("#before").click(function(){
        $("li").before("<li>PHP</li>")
    })

    let item = ['xml/json', 'adv js', 'mysql', 'php', 'laravel']
    let index = 0;
         $("#append").click(function(){

            if(index < item.length){

                $("#list").append("<li>" + item[index] + "</li>")
                index++
            }
            else{
                alert('items added')
            }
})

   
         $("#prepend").click(function(){

            if(index < item.length){

                $("#list").prepend("<li>" + item[index] + "</li>")
                index++
            
            }
            else{
                alert('items added')
            } 
})


})