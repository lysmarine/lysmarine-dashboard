
jQuery(document).ready(function(){

    jQuery('.menuHandle').on('click',function(e){
        jQuery('.menuContainer').slideDown('fast');
        jQuery('iframe').hide()
    });

    jQuery('.menu-elem').on('click',function(e){
        let frameID  = jQuery(this).attr('frameId')
        jQuery('.menuContainer').hide( "puff" )

        if(jQuery('#'+frameID).attr('src') ==='' ){
            let frameUrl = jQuery(this).attr('frameUrl')
            jQuery('#'+frameID).prop('src','http://'+window.location.hostname+frameUrl)
        }
        jQuery('#'+frameID).show();
    });

});
