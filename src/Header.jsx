
function Header() {
    return (
      <div className="headerBar">
        <div className="headerMenu">
          <img src="./location.svg" alt="location" />
          <div className="citys">
            <a className="city" href="#">
              Shahar: <p style={{ textDecoration: "underline", display: "inline" }}>Qarshi</p>
            </a>
            <a className="punkt" href="#">
              Topshirish punktlari
            </a>
          </div>
        </div>
  
        <div className="headerInfo">
          <p> Buyurtmangizni 1 kunda bepul yetkazib beramiz! </p>
        </div>
  
        <div className="headerLinks">
          <a href="#">Savol-javoblar</a>
          <a href="#">Buyurtmalarim</a>
  
          <div className="leangue">
            <img src="./icon.svg" alt="icon" />
            <a href="#">O'zbekcha</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;
  