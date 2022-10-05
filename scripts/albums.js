const createAlbumsCard = (product) => {
    const albumsCard = document.createElement("li")
    albumsCard.classList = "albums__card flex flex-col gap-7 mb-1 bg-color-grey-8"
  
    const image = document.createElement("img")
    image.src = product.img
    image.alt = product.title
  
    const desc = document.createElement("div")
    desc.classList = "card__description flex flex-col gap-4 p-5"
  
    const div = document.createElement("div")
    div.classList = "card__band flex gap-3"
  
    const title = document.createElement("span")
    title.classList = "font-text-2-medium"
    title.innerText = product.band
  
    const year = document.createElement("span")
    year.classList = "font-text-2-medium"
    year.innerText = product.year
  
    const name = document.createElement("strong")
    name.classList = "card__title font-title-2-bold color-grey-1"
    name.innerText = product.title
  
    const price = document.createElement("div")
    price.classList = "card__price band__price flex justify-between items-center"
  
    const productPrice = document.createElement("span")
    productPrice.classList = "font-title-2-bold color-grey-1"
    productPrice.innerText = `R$ ${product.price.toFixed(2)}`
  
    const buy = document.createElement("button")
    buy.classList = "button-grey-1"
    buy.innerText = "Comprar"
  
    price.append(productPrice, buy)
  
    div.append(title, year)
  
    desc.append(div, name, price)
  
    albumsCard.append(image, desc)
  
    return albumsCard
  }
  