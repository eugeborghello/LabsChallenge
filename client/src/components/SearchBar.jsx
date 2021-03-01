import { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';
import s from './Styles/SearchBar.module.css';
import logoML from '../assets/logoML.png'

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");
    

  return (
    <div className={s.searchBar}>
      <div className={s.navLogo}>
        <Link to="/">
          
          <img  
                id="logo" 
                src={logoML} 
                className={s.img} 
                width="20%" 
                height="20%" 
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
