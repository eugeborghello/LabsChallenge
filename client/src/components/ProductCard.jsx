import React from 'react';

import s from './Styles/ProductCard.module.css';

const ProductCard = (props) => {

  
  return (
    
     
      <div className={s.cardContainer}>
        <div className={s.card}>
        
        <img
            component="img"
            src={props.thumbnail}
            alt="thumbnail"
            className={s.cardImg}
            width="20%" 
            height="20%"
            
            
        />
        
        <div className={s.cardBody}>
          <div className={s.cardTitle} gutterBottom variant="h5" component="h2">
            {props.title}
           </div>
          <div className={s.cardBody} variant="body2" color="textSecondary" component="p">
            <p className={s.cardText}>
              <b>Price</b>: ${Intl.NumberFormat("de-DE").format(props.price)}{" "} 
            </p>

            <p className={s.cardText}>
              <b>Condition </b>: {props.condition}
            </p>
            
            <p className={s.cardText}>
              <b>Stock</b>: {props.available_quantity}
            </p>
          </div>
          
            <button className={s.buttonAdd} onClick={() => props.addToCart()}>
              <span>Add To Cart</span>
            </button>
          
            </div>
          </div>
        </div>

      
      
    
  );
};


export default ProductCard;


