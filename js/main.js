
 var owl = $('.owl-carousel');
 owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
   autoplayHoverPause:true,
   dots:true,
   responsive:{
    0:{
        items:1,
        nav:true
    },
    700:{
        items:3,
        nav:false
    },
   
}
 
});
 $('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
 $('.stop').on('click',function(){
     owl.trigger('stop.owl.autoplay')
 })

