$(function(){
    var group = $('.main.main02 .infoBtm .group');
    var ale = $('.main.main02 .infoBtm .alert');
    var aleimg = $('.main.main02 .infoBtm .alert .image');
    var xx = $('.main.main02 .infoBtm .alert span');
    var chip = $('.main.main03 .chip .image');
    var view = $('.main.main03 .game .view');
    var img = 0,ind = 0, pt = 0;

    
    function alertcli(){
        ind = $(this).index();
        pt = $(this).attr('data-pt');
        ale.css({zIndex:'5'});
        aleimg.css({backgroundImage:pt});
    }
    
    function chipclick(){
        img = $(this).attr('data-img');
        view.css({backgroundImage:img});
    }
    
    function xcli(){
        ale.css({zIndex:'-1'});
    }
    
    xx.click(xcli);
    group.click(alertcli);
    chip.click(chipclick);
});