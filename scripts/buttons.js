const buttonsOn = () => {
    const typeBands = [...document.querySelectorAll(".type-band")]
    typeBands.forEach((tb, index) => {
      if (genroActual == index) { 
        tb.classList.add("actived")
      } else {
        tb.classList.remove("actived")        
      }
    })
  }