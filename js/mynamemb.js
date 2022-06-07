$(function(){
    var logo = $('.menuTop .logo');
    var heart = $('.menuTop .heart .image');
    var group = $('.main.main02 .infoBtm .group');
    var ale = $('.main.main02 .infoBtm .alert');
    var aleimg = $('.main.main02 .infoBtm .alert .image');
    var xx = $('.main.main02 .infoBtm .alert span');
    var chip = $('.main.main03 .chip .image');
    var curtxt = $('.infoBtm .alert p');
    var view = $('.main.main03 .game .view');
    var img = 0,ind = 0, pt = 0;

    curtxt.click(function(){
        alert('dd');
    });

    function heartcli(){
        $(this).css({opacity:'0'});
        setTimeout(function(){
            heart.css({opacity:'1'})},2000);
    }
    
    function htmlview(){
        $('html').animate({scrollTop:0},1250);
    }
    
    function alertcli(){
        ind = $(this).index();
        pt = $(this).attr('data-pt');
        ale.css({zIndex:'5'});
        aleimg.css({backgroundImage:pt});
        if(ind == 0){
            curtxt.text('웹 표준을 준수하고 일관성 있는 문서작업이 가능');
        }else if(ind == 1){
            curtxt.text('ES5/ES6 돔탐색을 명확히 하고 파라미터를 활용하여 함수 재사용이 가능하며 하드코딩이 가능');
        }else if(ind == 2){
            curtxt.text('미디어쿼리를 이용한 다양한 반응형 웹을 제작하고 선택자를 명확히 가져올 수 있으며 hover,keyframes를 사용하여 동적인 요소 사용가능, include, mixin, for를 사용 가능');
        }else if(ind == 3){
            curtxt.text('돔탐색을 명확히 하고 파라미터를 활용하여 함수 재사용이 가능하며 하드코딩이 가능');
        }else if(ind == 4){
            curtxt.text('grid system을 사용하여 웹사이트 시안이 가능하며 이미지 보정, 배경에서 제품 분리 등의 가공이 가능');
        }else if(ind == 5){
            curtxt.text('다양한 스타일의 아이콘을 제작 가능');
        }
    }
    
    function chipclick(){
        img = $(this).attr('data-img');
        view.css({backgroundImage:img});
    }
    
    function xcli(){
        ale.css({zIndex:'-1'});
    }
    
    logo.click(htmlview);
    heart.click(heartcli);
    xx.click(xcli);
    group.click(alertcli);
    chip.click(chipclick);
});