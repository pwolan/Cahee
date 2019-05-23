$("a.nav-link").click(function (){
    //serching where to scroll from href propertie
    //but only in #place format
    let a_href = $(this).attr('data-href');

    //converting #place format into number
    let whereScroll = $(a_href).position();

    //define shift
    whereScroll.top -= 78;

    window.scroll('0', whereScroll.top); 
    console.log(whereScroll);
    console.log(a_href);

    //collapsing mobile menu after scrolling
    document.querySelector('div.nav__main').classList.remove("show");
})



   

