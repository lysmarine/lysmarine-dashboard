jQuery(document).ready(function(){
    //On load, open the menu to begin.
    jQuery('.menu-elem-container').slideDown('slow')

    // On init, set the base url of the iframe src
    jQuery('iframe').each( (i,e)=>{
        let url = jQuery(e).attr('src')
        jQuery(e).attr('src','//'+window.location.hostname+url)
    })

    //Open and close the menu from the handle.
    jQuery('.menuHandle').on('click',function(e){
        jQuery('.menuContainer').slideToggle('fast');
    });

    // When click on the menu element, close the menu and reload iframe.
    jQuery('.menu-elem').on('click',function(e){
        let target = jQuery(this).attr('id').replace('btn-','frame-');
        jQuery('.menuContainer').slideUp('slow');
        jQuery('iframe').hide();
        jQuery('#'+target).show();
    });

});
