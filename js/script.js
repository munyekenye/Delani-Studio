$(document).ready(function () {
    $(document).ready(function(){

        $("#dotext").hide(); 
       
        $("#dotext2").hide();
       
        $("#dotext3").hide(); 
       
       $(".imagetoggle0 , .imagetoggle1").click(function(){
       
       $("#dotext").toggle();
       
       $(".imagetoggle0").toggle();
       
       });
       
       $(".imagetoggle2 , .imagetoggle3").click(function(){
       
       $("#dotext2").toggle();
       
       $(".imagetoggle2").toggle();
       
       });
       
       $(".imagetoggle4 , .imagetoggle5").click(function(){
       
       $("#dotext3").toggle();
       
       $(".imagetoggle4").toggle();    
       
       });
       
       });
       
       
       
       $(document).ready(function(){
       
       $("form").submit(function(){
       
       alert("Thanks  for being our client ,your message has been received");
       
       });
       
       