import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ProductCard = (props) => {

  // const useStyles = makeStyles({
  //   root: {
  //     maxWidth: 345,
  //   },
  // });

  // function ImgMediaCard() {
  //   const classes = useStyles();
  // }

  return (
    
     
      <Card maxWidth="xs">
        <CardActionArea>
        
        <CardMedia
            component="img"
            src={props.thumbnail}
            alt="thumbnail"
            
            onClick={() => window.open(props.permalink, "_blank")}
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            
           {props.title}
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
            
              {/* <b>Price</b>: $ {Intl.NumberFormat("de-DE").format(props.price)}{" "} */}
              {props.currency_id}
            
            </Typography>
          

            <p className="card-text">
              <b>Condition</b>: {props.condition}
            </p>
            <p className="card-text">
              <b>Stock</b>: {props.available_quantity}
            </p>
        </CardContent>
          
            <button className="buttonAdd" onClick={() => props.addToCart()}>
              <span>Add To Cart</span>
            </button>
          
        
          </CardActionArea>
        </Card>
    
  );
};

export default ProductCard;
