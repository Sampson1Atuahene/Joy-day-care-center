// Small script for mobile navigation toggle + testimonials + FAQ
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if(btn && nav){
    btn.addEventListener('click', ()=> nav.classList.toggle('open'));
  }

  // Testimonials rotation
  const items = document.querySelectorAll('#testimonials .testimonial');
  let ti = 0;
  if(items.length){
    setInterval(()=>{
      items[ti].classList.remove('active');
      ti = (ti+1) % items.length;
      items[ti].classList.add('active');
    }, 5000);
  }

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', ()=>{
      const parent = btn.parentElement;
      const answer = parent.querySelector('.faq-a');
      const isOpen = answer.style.display === 'block';
      document.querySelectorAll('.faq-a').forEach(a=> a.style.display='none');
      if(!isOpen) answer.style.display = 'block';
    });
  });

  // Mobile-friendly dropdown toggles
  document.querySelectorAll('.nav-dropdown .nav-link').forEach(btn => {
    btn.addEventListener('click', (e)=>{
      const dd = btn.nextElementSibling;
      if(window.innerWidth <= 900){
        e.preventDefault();
        dd.style.display = dd.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
});