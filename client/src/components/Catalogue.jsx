import ProductCard from "./ProductCard";
import s from './Styles/Catalogue.module.css';

function Catalogue({ products, addToCart, error }) {

// Este componente va mostrar un arreglo de productos (obtenidos de la API) usando Product Card. Tambien debe posibilitar:

// Poder ordenar los productos en base a su precio, de forma ascendete o descendente.
// Poder filtrar por condicion.

    
  return (
    <div>
      {error ? (
        <div>
          <h5 className="notFound">Ops!!! Product not found!</h5>
          <h5 className="notFound">Search again!</h5>
          <img ></img>
        </div>
      ) : (
        <div className={s.catalogue}>
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                currency_id={product.currency_id}
                available_quantity={product.available_quantity}
                thumbnail={product.thumbnail}
                condition={product.condition}
                permalink={product.permalink}
                addToCart={() => addToCart(product)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Catalogue;