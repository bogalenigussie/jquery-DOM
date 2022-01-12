$(document).ready(function(){
    
    $("#btn_r").click(function(){ 
    var html1= 
    "<div><button style=background:red;width:80px;height:20px></button>\
    <Button id=hide_btn style=background:yellow;border-radius:50%;display:inline>X</button>\
    </div>"   
    $(".red1").append(html1);
 
    });
    var html2=
    "<div><button style=background:green;width:80px;height:20px></button>\
    <Button id=hide_btn style=background:lime;border-radius:50%;display:inline>X</button>\
    </div>"
   $("#btn_g").click(function(){ 
   $(".green1").append(html2);
   });
    
      $(".red1").on("click","#hide_btn",function() { //hide buttton 
        console.log("delete button clicked")
        $(this).parent().hide();
   
   
     });  
      
     $(".green1").on("click","#hide_btn",function() { 
      console.log("delete button clicked")
      $(this).parent().hide();
     });  
    });  
