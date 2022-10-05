const renderAlbums = (products) => {
    const albumsCards = document.getElementById("albums__cards")
  
    albumsCards.innerHTML = ""
  
    products.forEach((product) => {
      const bodyAlbumsCard = createAlbumsCard(product)
      albumsCards.append(bodyAlbumsCard)
    })
  }