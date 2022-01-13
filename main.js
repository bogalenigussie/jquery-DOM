$(document).ready(function(){
    
    var redDiv= 
            "<div><button style=background:red;width:80px;height:20px></button>\
            <Button id=hide_btn style=background:yellow;border-radius:50%;display:inline>X</button>\
            </div>";
    
    var greenDiv=
        "<div><button style=background:green;width:80px;height:20px></button>\
        <Button id=hide_btn style=background:lime;border-radius:50%;display:inline>X</button>\
        </div>";
    
    //event listeners 
    $("#btn_r").click(function(){ 
            $(".red1").append(redDiv);
    });
    
   $("#btn_g").click(function(){ 
        $(".green1").append(greenDiv);
   });
    
   $(".red1").on("click","#hide_btn",function() {
        console.log("delete button clicked")
        $(this).parent().hide();
    });  
      
    $(".green1").on("click","#hide_btn",function() { 
        console.log("delete button clicked")
        $(this).parent().hide();
     }); 
    
  });  
