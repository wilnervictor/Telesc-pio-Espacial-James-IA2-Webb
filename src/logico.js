
    // Função para abrir/fechar o menu
    function menu() {
        const navList = document.querySelector('.nav-list');
        navList.classList.toggle('active'); // Adiciona ou remove a classe 'active'
    }
    let orb = document.getElementById('img2')
    //quando tiver em cima
    orb.addEventListener('mouseover', function(){
        orb.src = "./src/img/or.jpg"
    })
    
    //quanso sair
    orb.addEventListener('mouseout', function(){
        orb.src = "./src/img/orbita.webp"
    })