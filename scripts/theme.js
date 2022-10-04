const imageSourceChange = (darkMode) => {
    if (darkMode) {
      imgDarkLigh.src = "../../assets/img/sun.png"
    } else {
      imgDarkLigh.src = "../../assets/img/moon.png"
    }
  }
  
  const themeChange = () => {
    darkMode = !darkMode
  
    body.classList.toggle(theme)
  
    localStorage.setItem(theme, darkMode);
  
    imageSourceChange(darkMode)
  }
  
  const themePrefenceAnalysis = () => {
    darkMode = JSON.parse(localStorage.getItem(theme))
  
    if (darkMode) {
      body.classList.add(theme)
    }
  }
  
  const imgDarkLigh = document.getElementById("dark-ligh")
  const body = document.body
  
  let darkMode
  const theme = "dark-mode"
  imgDarkLigh.addEventListener("click", themeChange)
  
  themePrefenceAnalysis()