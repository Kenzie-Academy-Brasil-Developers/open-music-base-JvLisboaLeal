const renderFilters = (categories) => {
    const filterBands = document.getElementById("filter__bands")
    const rangePrice = document.getElementById("range-price")
    const untilPrice = document.getElementById("ultil-price")
  
    categories.forEach((categorie, index) => {
      const button = document.createElement("button")
      button.classList = "type-band button-grey font-text-1-medium"
      button.innerText = categorie
  
      button.addEventListener("click", () => {
        priceActual = Number.parseInt(rangePrice.value)
        genroActual = index
        filtersProducts(genroActual, priceActual)
        buttonsOn()
      })    
      
      filterBands.append(button)
    })
  
    buttonsOn()
  
    rangePrice.addEventListener("change", () => {
      priceActual = Number.parseInt(rangePrice.value)
  
      filtersProducts(genroActual, priceActual)
  
      untilPrice.innerText = `Até ${priceActual.toFixed(0)}`
    })    
  }