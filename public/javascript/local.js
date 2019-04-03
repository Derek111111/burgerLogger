$(function(){
    $(document).ready(function(){


                
                $(document).on("click","#devour-button",function(event){

                    console.log("i got clicked");
            
                    var burgerId = $(this).data("id");
                    var idToSend = {burgerId:burgerId};
                    $.ajax("/devour",{
                        type:"PUT",
                        data:idToSend
                    }).done(function(result){

                        window.location.reload();

                    });

                });

                $("#burger-submit").on("click",function(event){
                    console.log("i got clicked2");
                    
                    var dataToSend = {burgerName: $("#burger-name-inp").val().trim() };
                    $.ajax("/insert",{
            
                        type:"POST",
                        data:dataToSend
            
                    }).done(function(result){

                        window.location.reload();

                    });
            
                });

    });


});