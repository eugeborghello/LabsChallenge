import s from './Styles/Cart.module.css'

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className={s.cartContainer}>
      <div className={s.test}>
        <div className={s.empty}>
          {cartItems.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            <div>Your cart have {cartItems.length} different items !</div>
          )}
        </div>
        <div>
          <br />
          {cartItems.length !== 0 && (
            <div className={s.total}>
              Total: ${" "}
              {Intl.NumberFormat("de-DE").format(
                cartItems.reduce(
                  (acc, curr) => acc + curr.price * curr.count,
                  0
                )
              )}
              {" ARS"}
            </div>
          )}
          <br />
          {cartItems.length > 0 ? (
            <div className={s.scroll}>
              <ul>
                {cartItems.map((item) => (
                  <li className={s.productCart} key={item.id}>
                    <img 
                      className={s.img} 
                      src={item.thumbnail} 
                      alt={item.title}>

                    </img>

                    <div className={s.infoDiv}>
                      <div className={s.infoText}>
                        <div>Quantity: {item.count}</div>
                        <div>
                          Price: ${" "}
                          {Intl.NumberFormat("de-DE").format(item.price)}{" "}
                          {item.currency_id}
                        </div>
                        <div>
                          Subtotal: ${" "}
                          {Intl.NumberFormat("de-DE").format(
                            item.price * item.count
                          )}{" "}
                          {item.currency_id}
                        </div>
                      </div>
                      <div className={s.buttonRemove}>
                        <button onClick={() => removeFromCart(item)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Cart;