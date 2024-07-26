import React from 'react'
import { CartWrapper } from './style'
import Products from '../../components/Products'

const Cart = ({cart, length,addToCart }) => {

  function sayHi() {
    alert("Hi")
  }

  return (
    <>

    {cart.length === 0 ? <h1>Cart is empty</h1> : 
      <>
          <CartWrapper>
      <h2 className='cart__title'>
        Savatingiz,<span> {length} mahsulot</span>
      </h2>


      <div className='cart__inner'>
          {/* LEFT  START */}
          <div className="cart__inner--left">
           {/* TOP START */}
           <div className='cart__inner--top'>
             {/* SELECT START */}
             <div className='cart__inner--left--top'>
              <label htmlFor="selectAll"></label>
              <input type="checkbox" id='selectAll' name='selectAll' />
            </div>
            {/* SELECT END */}

            {/* DELIVERY START */}
            <div className='cart__inner--right--top'>
                <span>Yetkazib berishning eng yaqin sanasi:</span>
                <button>24-iyul (Ertaga)</button>
            </div>
            {/* DELIVERY END */}
           </div>
           {/* TOP END */}


          {/* BOTTOM START  */}
            <div className='cart__inner--bottom'>
              <div className='top'>
                <span>Uzum Market omborida</span>
                <h6>24-iyul orasida yetkazamiz</h6>
              </div>

              <div className='bottom'>
                <input type="checkbox" />
                <div>
                        {cart.map((item) => {
                          return (
                              <div className='bottom--wrapper'>
                                   <div className='image'>
                                      <img src={item.image} alt={item.title} />
                                   </div>

                                    <div>
                                          <div  className='bottom--wrapper--top'>
                                            <h6>{item.title}</h6>
                                              <button onClick={sayHi}>
                                                <i class="fa-solid fa-trash"></i>
                                              <span>Yo'q qilish</span>
                                              </button>
                                          </div>

                                          <div className='bottom--wrapper--bottom'>
                                            <p><span>Sotuvchi</span> DYNAMIC SYSTEM DISTRIBUTION</p>


                                              <div>
                                              <button>-</button>
                                              <button>1</button>
                                              <button>+</button>
                                              </div>
                                              <div>
                                                <h3>{item.price}</h3>
                                                <span>{item.oldPrice}</span>
                                              </div>
                                          
                                          </div>
                                    </div>
                              </div>          
                          )
                         })}
                </div>
              </div>
            </div>
          {/* BOTTOM END */}
          </div>
          {/* LEFT END */}

          {/* RIGHT  START */}
          <div className="cart__inner--right">
            {/* TOP START */}
              <div className="cart__inner--right--top">
                <h6>Buyurtmangiz</h6>

                <p>
                  <span>Mahsulotlar {length}:</span>
                  <span>9 800 000 so'm</span>
                </p>
                <button>Yetkazib berish 24-iyul</button>

               <div>
                    <p>Jami:</p>
                  <h6>6 998 000 so'm</h6>
                  <span>Tejovingiz: 2 802 000 so'm</span>
               </div>

               <button>Rasmiylashtirishga oʻtish</button>
              </div>
            {/* TOP END */}

            {/* BOTTOM START */}
              <div className="cart__inner--right--bottom">
                <p> Buyurtmalarni topshirish punktiga yoki kuryer orqali bepul yetkazib beramiz</p>
                <i class="fa-solid fa-question"></i>
               <p>
                <span>1 000 000 so'm</span>
               <i class="fa-solid fa-house"></i>
               </p>
              </div>
            {/* BOTTOM END */}

          </div>  
          {/* RIGHT END */}
      </div>
    </CartWrapper>
    <Products  addToCart={addToCart}/ >
      </>

    }
  
    
    
   </>
  )
}

export default Cart