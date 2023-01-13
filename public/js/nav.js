const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML=`
    <div class="nav">
             <img src="img/dark-logo.png" class="brand-logo" alt="">
             <div class="nav-items">
                <div class="search">
                    <input type="text" class="serch-box" placeholder="marca e produtos">
                    <button class="search-btn">Busca</button>
                </div>
                <a href="#"><img src="img/user.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">feminino</a></li>
            <li class="link-item"><a href="#" class="link">infantil</a></li>
            <li class="link-item"><a href="#" class="link">masculino</a></li>
            <li class="link-item"><a href="#" class="link">acessorios</a></li>
           
        </ul>
    
    `;
}
createNav();