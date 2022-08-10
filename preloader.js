document.body.onload = function(){

  setTimeout(function(){
    let preloader = document.querySelectorAll('.preloader');
    preloader.forEach((item) => {
      if( !item.classList.contains('done') ){
        item.classList.add('done');
      }
    })
    // let preloader = document.querySelector('.preloader');
    // if ( !preloader.classList.contains('done') ){
    //   preloader.classList.add('done');
    // }
    
  }, 1000);

}