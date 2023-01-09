import styles from '../styles/products.module.css'
function handlelowToHigh(dispatch){
  console.log('Low to HIgh');
  dispatch ({
    type : 'lowToHigh'
  });
}
function handleHighToLow(dispatch){
  dispatch ({
    type : 'HighToLow'
  });
}
function handleBikesClick(dispatch){
  dispatch ({
    type : 'BikesClick'
  });
}
function handleAccessoriesClick(dispatch){
  dispatch ({
    type : 'AccessoriesClick'
  });
}
export default function FilterUI({filterState,dispatch}){
  return(
    <div className={styles.filter}>
      <p className={styles.filterTitle}> Produtct Filter </p>
      <div className={styles.filteBtnContainer}>
        <button type="button" className={styles.filterBtn+ " "+
          (filterState.isAscending ?  styles.active : styles.inactive)}
          onClick={() => handlelowToHigh(dispatch)}>Low To High
        </button>
        <button type="button" className={styles.filterBtn+ " "
          +(filterState.isAscending ? styles.inactive : styles.active)}
          onClick={() => handleHighToLow(dispatch)}>High To Low
        </button>

        <button type="button" className={styles.filterBtn+ " "+
          (filterState.bikes ? styles.active : styles.inactive)}
          onClick={() => handleBikesClick(dispatch)}>Bikes
        </button>
        <button type="button" className={styles.filterBtn+ " "+
          (filterState.accessories ? styles.active : styles.inactive)}
          onClick={() => handleAccessoriesClick(dispatch)}>Accessories
        </button>
      </div>

    </div>
      )
}
