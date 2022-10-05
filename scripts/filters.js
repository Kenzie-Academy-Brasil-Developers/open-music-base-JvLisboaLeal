const filtersProducts = (id, price) => {
    if (id === 0) {
      filteredProducts = products.filter((product) => product.price <= price)
    } else {
      filteredProducts = products.filter((product) => 
        product.category == id &&
        product.price <= price
      )    
    }
    renderAlbums(filteredProducts)
  }