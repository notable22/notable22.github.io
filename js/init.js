
$('.bnslider').bxSlider({
    nextSelector : '.btn_bn_next',
    prevSelector : '.btn_bn_prev',
    pagerCustom:".myPager",
});
$('.cm_slide').bxSlider({
    mode: 'vertical',
    minSlides: 5,
    maxSlides: 5,
    moveSlides:1,
    auto:true,
    pause : 4000,
    mode : 'vertical',
    pager:false,
    nextSelector : '.btn_cm_next',
    prevSelector : '.btn_cm_prev',
});