

document.addEventListener('DOMContentLoaded', () => {
  
  
  //.....About Read More ....
  const aboutMore = document.getElementById('about-more');
  const aboutButton = document.getElementById('about-button');

  if (aboutMore && aboutButton) {
    let expanded = false;
    aboutButton.addEventListener('click', () => {
      expanded = !expanded;
      aboutMore.classList.toggle('show', expanded);
      aboutButton.textContent = expanded ? 'Read less' : 'Read more';
    });
  }




  //... Typing Animation ...
  const typingTarget = document.getElementById('typing');
  if (typingTarget) {
    const roles = [
      'Software Engineering Student',
      'Front-End Developer', 
      'Programmer',
      'Problem Solver'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
      const text = roles[roleIndex];

      if (!deleting) {
        charIndex++;
        typingTarget.textContent = text.slice(0, charIndex);
        if (charIndex === text.length) {
          setTimeout(() => {
            deleting = true;
            tick();
          }, 1200);
          return;
        }
        setTimeout(tick, 90);
      } else {
        charIndex--;
        typingTarget.textContent = text.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(tick, 400);
          return;
        }
        setTimeout(tick, 60);
      }
    }
    tick();
  }



  // .... Project Load More ....
  const loadMoreBtns = document.querySelectorAll('.load-more-btn');
  
  loadMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectBox = btn.closest('.project-box');
      const details = projectBox.querySelector('.project-details');
      
      const isVisible = details.classList.contains('show');
      details.classList.toggle('show', !isVisible);
      btn.textContent = isVisible ? 'Load More' : 'Show Less';
    });
  });

  



  const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        

        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });

});