
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }, 
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

    //Animações
    const debounce = function(func, wait, immediate) {
      let timeout;
      return function(...args) {
        const context = this;
        const later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };
    
    const target = document.querySelectorAll('[data-anime]');
    const animationClass = 'animate';
    
    function animeScroll() {
      const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
      target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
          element.classList.add(animationClass);
        } else {
          element.classList.remove(animationClass);
        }
      })
    }
    
    animeScroll();
    
    if(target.length) {
      window.addEventListener('scroll', debounce(function() {
        animeScroll();
      }, 200));
    }

  //Alert
  function alert (){
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Compra concluida com sucesso",
      showConfirmButton: true,
      timer: 1500
    });
  }
