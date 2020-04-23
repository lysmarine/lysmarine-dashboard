jQuery(document).ready(function(){
    jQuery('.menu-elem-container').slideDown('slow')

    //Open and close the menu from the handle.
    jQuery('.menuHandle').on('click',function(e){
        jQuery('.menuContainer').slideToggle('fast');
        // lnk = jQuery(this).attr('iloc');
        // console.log(lnk);

        // jQuery('iframe').attr('src',lnk)
    });

    jQuery('.menu-elem').on('click',function(e){

        jQuery('.menuContainer').slideUp('slow');

        let target = jQuery(this).attr('id').replace('btn-','frame-');
        console.log(jQuery(this).attr('id'))
console.log(target)
        jQuery('iframe').hide();
        jQuery('#'+target).show();


    });
});
