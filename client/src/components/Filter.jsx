import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function Filter(props) {
  return (
    <div>
      <div className="all">
        <div className="order">
        
          <select value={props.sort} onChange={props.sortProducts}>
            <option value="price">Price</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
          
        </div>
        <div className="order">
        
          <select value={props.condition} onChange={props.filterProducts}>
            <option>Condition</option>
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
          <div className="results">
            <div className="input">
              <b>{props.input}</b>
            </div>
            <div className="result">{props.count} Results </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Filter;