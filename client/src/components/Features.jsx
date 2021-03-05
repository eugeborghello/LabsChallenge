import { useState } from "react";
import Catalogue from "./Catalogue";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import axios from "axios";
import Filter from "./Filter";
import Pagination from "./Pagination";
import Footer from "./Footer";

import s from './Styles/Features.module.css';

function Features() {
  const [error, setError] = useState(false);
  // Products ------------------------------------------->
  const [products, setProducts] = useState([]);
  const [productsResult, setProductsResult] = useState([]);
  const [input, setInput] = useState("");

  // Condition ------------------------------------------>
  const [condition, setCondition] = useState("");
  const [sort, setSort] = useState("");

 
  // Pagination ----------------------------------------->
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(30);
// Get current product ---------------------------------->
//                30       =  1          *    30
  const indexOfLastProduct = currentPage * productsPerPage;
//                 5       =  35                -      30
  const indexOfFirsProduct = indexOfLastProduct - productsPerPage;
//              (5, 30)          
  const currentProducts = products.slice(
    indexOfFirsProduct,
    indexOfLastProduct
  );
  //Change Page----------------------------------------->
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onSearch = (product) => {

    setInput(product);
    axios
      .get(`http://localhost:3001/api/search?q=${product}`)
      .then((p) => {
        setProducts(p.data);
        setProductsResult(p.data);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });

  };

  
  const sortProducts = (event) => {
    const sort = event.target.value;
    setSort(sort);
    setProducts(
      products.slice().sort((a, b) =>
        sort === "lowest"
          ? a.price > b.price
            ? 1
            : -1
          : sort === "highest"
          ? a.price < b.price
            ? 1
            : -1
          : 
          a.id > b.id
          ? 1
          : -1
      )
    );
  };


  // Filter ----------------------------------------->
  const filterProducts = (event) => {
    let productCondition = event.target.value;

    if (productCondition === "new" || productCondition === "used") {
      setCondition(productCondition);
      setProducts(
        productsResult.filter(
          (product) => product.condition.indexOf(productCondition) >= 0
        )
      );
    } else {
      setCondition(productCondition);
      setProducts(productsResult);
    }
  };

  const [cartItems, setCartItems] = useState([]);
  const itemsCart = cartItems.slice();
  
  const addToCart = (product) => {
    let alreadyInCart = false;
    itemsCart.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      itemsCart.push({ ...product, count: 1 });
    }
    setCartItems(itemsCart);
  };
  const removeFromCart = (product) => {
    setCartItems(itemsCart.filter((x) => x.id !== product.id));
  };


  return (
    <div 
    //className={s.container}
    >
      <div className={s.searchBar}>
        <SearchBar onSearch={onSearch} />
      </div>
      
        <div className={s.filterCategories}>
          <Filter
            count={products.length}
            sort={sort}
            condition={condition}
            sortProducts={sortProducts}
            filterProducts={filterProducts}
            input={input}
          />
        </div>

        <div className={s.pagination}>
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={products.length}
              paginate={paginate}
              key={"#"}
              
            />
          </div>
        
        <div className={s.content}>
          
        <div className={s.catalogue}>
            <Catalogue
              products={currentProducts}
              addToCart={addToCart}
              error={error}
            />
          </div>           

          

          <div className={s.cart}>
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          </div>
        </div>

        <div className={s.footer}>
            <Footer />
        </div>
    </div>
  );
}

export default Features;