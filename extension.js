function showHideSidebarOnSmallDevices()
{
    if (jQuery("#sidebar-btn-show").is(":visible"))
    {
        jQuery(".sidebar_block").addClass("sidebar-show");
        jQuery(".sidebar_block").removeClass("sidebar-hide");
        jQuery(".sidebar-btn").toggleClass("sidebar-hide");
    }else
    {
        jQuery(".sidebar_block").addClass("sidebar-hide");
        jQuery(".sidebar_block").removeClass("sidebar-show");
        jQuery(".sidebar-btn").toggleClass("sidebar-hide");
    }

}