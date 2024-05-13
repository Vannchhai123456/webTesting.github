$(document).ready(function(){
    let number=0;
    let number1=0;
    $('#btn').click(function(){
        $('.menu_respon').css({'left': '0'});
       
    })
    $('.logo').click(function(){
        $('.menu_respon').css({'left':'-500px'})
    })
    $('#btn_slide1').click(function(){
         if(number==0){
            number++;
            $('.slider').css({'left': '0'})
            $('.slider1').css({'left':'-2200px'})
            $('.dot1').css({'width':'50px'})
            $('.dot2').css({'width':'100px'})
            $('.dot1').css({'opacity':'0.5'})
            $('.dot2').css({'opacity':'1'})
         }
         else if(number==1){
            $('.slider2').css({'left': '0'})
            $('.slider').css({'left':'-2200px'})
            $('.dot2').css({'width':'50px'})
            $('.dot3').css({'width':'100px'})
            $('.dot2').css({'opacity':'0.5'})
            $('.dot3').css({'opacity':'1'})
            number++;
         }
         else{
            $('.slider').css({'left': '-2200px'})
            $('.slider1').css({'left':'0px'})
            $('.slider2').css({'left': '-2200px'})
            $('.dot1').css({'width':'100px'})
            $('.dot3').css({'width':'50px'})
            $('.dot3').css({'opacity':'0.5'})
            $('.dot1').css({'opacity':'1'})
            number=0;
         }
    })
    $('#btn_slide').click(function(){
        if(number1==0){
            number1++;
            $('.slider2').css({'left': '-2200px'})
            $('.slider').css({'left': '0px'})
            $('.slider1').css({'left':'-2200px'})
            $('.dot1').css({'width':'50px'})
            $('.dot2').css({'width':'100px'})
            $('.dot1').css({'opacity':'0.5'})
            $('.dot2').css({'opacity':'1'})
        }
        else if(number1==1){
            $('.slider').css({'left': '-2200px'})
            $('.slider1').css({'left':'-2200px'})
            $('.slider2').css({'left': '0px'})
            $('.dot2').css({'width':'50px'})
            $('.dot3').css({'width':'100px'})
            $('.dot2').css({'opacity':'0.5'})
            $('.dot3').css({'opacity':'1'})
            number1++;
        }
        else{
            $('.slider').css({'left': '-2200px'})
            $('.slider1').css({'left':'0px'})
            $('.slider2').css({'left': '-2200px'})
            $('.dot1').css({'width':'100px'})
            $('.dot3').css({'width':'50px'})
            $('.dot1').css({'width':'100px'})
            $('.dot3').css({'width':'50px'})
            $('.dot3').css({'opacity':'0.5'})
            $('.dot1').css({'opacity':'1'})
            number1=0;
        }
    })
    $(".search").click(function(){
        $(".popup").css({'top':'0'})
    })
    $(".btn_close").click(function(){
        $(".popup").css({'top':'-130px'})
    })
    $(".login").click(function(){
        $(".popup_login").show();
        $(".bg").show();
    })
    $(".btn_close1").click(function(){
        $(".popup_login").hide();
        $(".bg").hide();
    })
    $(".computer").click(function(){
        $('.computer').css({'color':'black'});
        $('.ass').css({'color':'white'})
        $('.speare_part').css({'color':'white'});
        $('.camera').css({'color':'white'});
    })
    $(".ass").click(function(){
        $('.ass').css({'color':'black'})
        $('.computer').css({'color':'white'});
        $('.speare_part').css({'color':'white'});
        $('.camera').css({'color':'white'});
    })
    $('.speare_part').click(function(){
        $('.speare_part').css({'color':'black'});
        $('.ass').css({'color':'white'})
        $('.computer').css({'color':'white'});
        $('.camera').css({'color':'white'});
    })
    $('.camera').click(function(){
        $('.camera').css({'color':'black'});
        $('.speare_part').css({'color':'white'});
        $('.ass').css({'color':'white'})
        $('.computer').css({'color':'white'});
    })
    $('.home').click(function(){
        $('.camera').css({'color':'white'});
        $('.speare_part').css({'color':'white'});
        $('.ass').css({'color':'white'})
        $('.computer').css({'color':'white'});
    })
    $(".veiw_btn").click(function(){
        $(".viewmore").slideToggle();
    })
})