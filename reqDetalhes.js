const urlParams = new URLSearchParams(window.location.search)
const productId = urlParams.get('id')

// Faz a requisição para obter os dados do produto específico
fetch(`https://fakestoreapi.com/products/${productId}`)
  .then(res => res.json())
  .then(product => {
    const card = document.createElement('div')
    card.classList.add('card', 'mx-auto', 'my-5', 'w-50',)

    const title = document.createElement('h3')
    title.textContent = product.title
    title.classList.add('card-title', 'mx-3')
    card.appendChild(title)

    const image = document.createElement('img')
    image.src = product.image
    image.classList.add('card-img')
    card.appendChild(image)

    const description = document.createElement('p')
    description.textContent = `Descrição: ${product.description}`
    description.classList.add('card-text', 'm-3')
    card.appendChild(description)

    const category = document.createElement('p')
    category.textContent = `Categoria: ${product.category}`
    category.classList.add('card-text')
    card.appendChild(category)

    const price = document.createElement('p')
    price.textContent = `Preço: $${product.price}`
    price.classList.add('card-text')
    card.appendChild(price)

    const ratingText = document.createElement('span')
    ratingText.textContent = 'Rating: '
    card.appendChild(ratingText)
    
    const rating = document.createElement('span')
    rating.innerHTML = getRatingStars(Math.round(product.rating.rate * 2) / 2)
    rating.classList.add('card-rating')
    card.appendChild(rating)

    const productDetails = document.getElementById('product-details')
    productDetails.appendChild(card)
  })
  .catch(error => {
    console.error('Erro ao obter os detalhes do produto:', error)
  })

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