function showHideSidebarOnSmallDevices()
{
    if (jQuery("sidebar-btn-show").is(":visible"))
    {
        jQuery(".sidebar_content").addClass("sidebar-show");
        jQuery(".sidebar_content").removeClass("sidebar-hide");
        jQuery(".sidebar-btn").toggleClass("sidebar-hide");
    }else
    {
        jQuery(".sidebar_content").addClass("sidebar-hide");
        jQuery(".sidebar_content").removeClass("sidebar-show");
        jQuery(".sidebar-btn").toggleClass("sidebar-hide");
    }

}