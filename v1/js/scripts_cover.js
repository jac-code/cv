 /**
   * Hero type effect
   */

  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");

  const textArray = ["hard", "fun", "a journey", "LIFE"];
  const textDelay = 200;
  const erasingDelay = 100; 
  const newTextDelay = 2000;
  
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorSpan.classList.contains("typing")) {
        cursorSpan.classList.add("typing");
      }
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, textDelay);
    }
    else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      if (!cursorSpan.classList.contains("typing")) {
        cursorSpan.classList.add("typing");
      }
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    }
    else {
      cursorSpan.classList.remove("typing");
      
      textArrayIndex++;
      if (textArrayIndex.length) {
        textArrayIndex = 0;
      }
      setTimeout(type, textDelay + 1000);
    }
  }

  // type();

  document.addEventListener('DOMContentLoaded', function() {
    if (textArray.length) {
      setTimeout(type, newTextDelay + 250);
    }
    // type();
  });