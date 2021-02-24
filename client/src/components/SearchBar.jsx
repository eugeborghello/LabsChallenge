import { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';
import s from './Styles/SearchBar.module.css'

//import purple from '@material-ui/core/colors/purple';
//import green from '@material-ui/core/colors/green';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

//import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';




// const useStyles = makeStyles(theme => ({
//   offset: theme.mixins.toolbar,
//   menuSpaces: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1
//   },
  
// }))


function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");
  //const classes = useStyles()

  

  return (
    <div className={s.searchBar}>
      <div>
        <Link to="/">
          <h3 className={s.text}>Home</h3>
        </Link>
      </div>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(input);
          setInput("");
        }}
      >
        <input className="button-submit" type="submit" value="Search" />
        <input
          type="search"
          placeholder="Search product..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
      <ShoppingCartOutlinedIcon className={s.cart}/>
    </div>
  );
}

export default SearchBar;
