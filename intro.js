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
      }
    }
  );

function fadeOutIntro() {
   gsap.to("#intro", { opacity: 0, duration: 2, onComplete: () => {
     document.querySelector('#intro').style.display = 'none'; // Hide the element after fade-out is complete
   }});
 }

  document.querySelector('#intro').addEventListener('click', (e) => {
    fadeOutIntro()
})

setTimeout(() => {
  if (document.querySelector('#intro').style.display !== 'none') {
    fadeOutIntro(); // Only fade out if the element isn't already hidden
  }
}, 5000); // 5000 milliseconds = 5 seconds  