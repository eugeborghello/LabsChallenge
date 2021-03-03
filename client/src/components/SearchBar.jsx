import { useState } from "react";
import { Link } from "react-router-dom";
import s from './Styles/SearchBar.module.css';
import logoML from '../assets/logoML.png'

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

//crear un formulario controlado con un input de búsqueda, que dispare los requests a la API (a nuestro BACK-END)

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");
    

  return (
    <div className={s.searchBar}>
      <div className={s.navLogo}>
        <Link to="/">
          
          <img  
                id="logo" 
                src={logoML} 
                className={s.imgLogo} 
                alt="" 
                />
            
        </Link>
      </div>
      <form
        className={s.form}
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(input);
          setInput("");
        }}
      >
        
        <input className={s.input}
          type="search"
          placeholder="Search product..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <input className={s.buttonSubmit} type="submit" value="Search" />
      </form>
      <div className={s.contenedorCart}>
        <ShoppingCartOutlinedIcon className={s.cart}/>
      </div>
    </div>
  );
}

export default SearchBar;
