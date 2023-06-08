async function FilterByCategories() {
    const query = document.getElementById('categoria').value

    const response = await fetch(`https://fakestoreapi.com/products/category/${query}`)
        const data = await response.json()
        const teste = data.map(product => {
            return {
                title: product.title,
                price: product.price,
                image: product.image,
                rating: Math.round(product.rating.rate * 2) / 2,
                id: product.id
              }
        })
        showProducts(teste)
}

function showProducts(products) {
    const cardsContainer = document.getElementById('cards-container')
    cardsContainer.innerHTML = ''

    products.forEach(product => {
    const card = document.createElement('div')
    card.classList.add('card')

    const title = document.createElement('h3')
    title.textContent = product.title
    card.appendChild(title)

    const image = document.createElement('img')
    image.src = product.image
    image.classList.add('card-image')
    card.appendChild(image)

    const price = document.createElement('p')
    price.textContent = `Price: $${product.price}`
    price.classList.add('card-text')
    card.appendChild(price)

    const ratingText = document.createElement('span')
    ratingText.textContent = 'Rating: '
    card.appendChild(ratingText)
    
    const rating = document.createElement('span')
    rating.innerHTML = getRatingStars(product)
    rating.classList.add('card-rating')
    card.appendChild(rating)

    const detailsButton = document.createElement('button')
    detailsButton.textContent = 'Detalhes'
    detailsButton.classList.add('btn', 'btn-primary', 'details-button', 'mb-2')
    card.appendChild(detailsButton)

    detailsButton.addEventListener('click', () => {
      const productId = product.id;
    
      window.location.href = `detalhes.html?id=${productId}`
    })
    
    cardsContainer.appendChild(card)
  })
}

function getRatingStars(rating) {
    const fullStar = '<img src="svgs/starFill.svg" alt="star">'
    const halfStar = '<img src="svgs/starHalf.svg" alt="half-star">'
    const emptyStar = '<img src="svgs/star.svg" alt="empty-star">'
    
    const fullStarsCount = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    
    let starsHTML = ''
    
    for (let i = 0; i < fullStarsCount; i++) {
      starsHTML += fullStar
    }
    
    if (hasHalfStar) {
      starsHTML += halfStar
    }
    
    const emptyStarsCount = 5 - Math.ceil(rating)
    
    for (let i = 0; i < emptyStarsCount; i++) {
      starsHTML += emptyStar
    }
    
    return starsHTML
  }