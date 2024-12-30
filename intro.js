let userName =''

document.querySelector('#submit-name').addEventListener('click', () => {
  const name = document.querySelector('#name-input').value.trim();
  if (name) {
    userName = name
    fadeOutIntro();
    document.querySelector('#playerBattleName').textContent = userName; 
    battle.initiated = false;
  } else {
    alert('Please enter a name!');
  }
});


gsap.fromTo("#intro", 
    { 
      width: 0,         // Start with no width
      opacity: 0,       // Start invisible
    }, 
    { 
      width: "700px",   // End at the full width
      opacity: 1,       // Fade in
      duration: 1.5,     // Total animation duration
      ease: "power2.out", // Smooth ease-out effect
      onComplete: function() {
        gsap.fromTo("#intro p", { opacity: 0 }, { opacity: 1, duration: 0.5});
        gsap.fromTo("#name-container", { opacity: 0 }, { opacity: 1, duration: 0.5});
      }
    }
  );

function fadeOutIntro() {
   gsap.to("#intro", { opacity: 0, duration: 2, onComplete: () => {
     document.querySelector('#intro').style.display = 'none'; // Hide the element after fade-out is complete
   }});
 }

  
 