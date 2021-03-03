import s from './Styles/Filter.module.css';

function Filter(props) {
  return (
    <div className={s.filterContainer}>
      <div className={s.all}>
        <div className={s.order}>
        
          <select value={props.sort} onChange={props.sortProducts}>
            <option value="price">Price</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
          
        </div>
        <div className={s.order}>
        
          <select value={props.condition} onChange={props.filterProducts}>
            <option>Condition</option>
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
          <div className={s.results}>
            <div className={s.input}>
              <b>{props.input}</b>
            </div>
            <div className={s.result}>{props.count} Results </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Filter;