// Função para carregar o cabeçalho em todas as páginas
function loadHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder')
    const headerURL = '/header.html'
    fetch(headerURL)
      .then(response => response.text())
      .then(data => {
        headerPlaceholder.innerHTML = data
      })
  }
  
  // Função para carregar o rodapé em todas as páginas
  function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder')
    const footerURL = '/footer.html'
    fetch(footerURL)
      .then(response => response.text())
      .then(data => {
        footerPlaceholder.innerHTML = data
      })
  }
  
  loadHeader()
  loadFooter()
  