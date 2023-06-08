async function fetchCategories() {
    const response = await fetch('https://fakestoreapi.com/products/categories')
    const data = await response.json()
    return data
  }

  async function populateCategories() {
    const categories = await fetchCategories()
    const select = document.getElementById('categoria')

    categories.forEach(category => {
      const option = document.createElement('option')
      option.value = category
      option.text = category
      select.appendChild(option)
    });
  }

  populateCategories()