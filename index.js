particlesJS.load('particles-js','porfolio-config.json');var nav=document.querySelector('#nav');function navToggle(){if(nav.classList.contains('opened')){nav.classList.remove('opened')}else{nav.classList.add('opened')}}function pageTransition(){var tl=gsap.timeline();tl.to('.transition svg path',{duration:0.8,opacity:1,stagger:.05,rotationY:20,transformOrigin:"center"});tl.to('.transition svg path',{duration:1,rotation:0,opacity:0,stagger:.05});if(nav.classList.contains('opened')){navToggle()}}var mySwiper=new Swiper('.swiper-container',{pagination:{el:'.swiper-pagination',type:'bullets'},speed:400,spaceBetween:80,touchEventsTarget:'container'});function copyEmail(){var copyText=document.getElementById("myInput");let copyButt=document.querySelector(".copy-notif");copyText.select();copyText.setSelectionRange(0,25);document.execCommand("copy");copyButt.classList.add("copied");setTimeout(()=>{copyButt.classList.remove("copied")},5000)}function contanimation(){var tl=gsap.timeline()}function delay(n){n=n||2000;return new Promise(d=>{setTimeout(()=>{d()},n)})}barba.init({sync:true,transitions:[{async leave(data){const done=this.async;pageTransition();await delay(1000);done()},async enter(data){contanimation()}}]});barba.hooks.after(()=>{var mySwiper=new Swiper('.swiper-container',{pagination:{el:'.swiper-pagination',type:'bullets'},speed:400,spaceBetween:80,touchEventsTarget:'container'})});