
function Hero() {
    return (
        <div className="hero">
            <div className="heroIcon">
            <img src="./uzum.webp" style={{ width: "30px", height: "30px", borderRadius: "20px" }} alt="" />
            <h2>uzum market</h2>
            </div>
            <div className="heroSearch">
                <div className="btn">
                <img src="./catalog.svg" alt="" />
                <p>Katalog</p>
                </div>
                <input type="text" id="searchInp" placeholder="Mahsulotlar va turkumlar izlash"/>
            </div>
            <div className="heroService">
                <div className="accaountMenu">
                <img src="./account.svg" alt="" />
                <a href="#">Kirish</a>
                </div>
                <div className="savedMenu">
                <img src="./heart.svg" alt="" />
                <a href="#">Saralangan</a>
                </div>
                <div className="bagMenu">
                <img src="./bag.svg" alt="" />
                <link>
                    <a href="#">Savat</a>
                </link>
                </div>
            </div>
        </div>
    )
}

export default Hero;