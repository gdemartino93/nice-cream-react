import React , {useState} from 'react';
import data from '../fakeData';
import Gelato from './Gelato';

const Menu = () => {
    const [products , setProducts] = useState(data);
    // crea un nuovo array di elementi unici dall'array product
    let categories = Array.from(new Set(products.map(el => el.categoria)));
    // aggiunge all come primo elemento dell'array
    categories.unshift('all');
    const [selected , setSelected] = useState(0);
    // questo state lo usiamo per creare un array dei prodotti selezionati in base alla categoria
    const [filterProducts , setFilterProducts] = useState(products);

    const filterProductFunction = (category , index) => {
      // passo l'index per la selected
      setSelected(index);
      // se category è uguale ad all allora mostra tutti i gelato
      if (category === "all"){
        setFilterProducts(products);
      }else{
        // se non è uguale ad all filtriamo i prodotti con un ternario
        setFilterProducts(products.filter( el => el.categoria === category ? el : ""))
      }
    }

  return (
    <div className='menu'>
        <ul>
            {categories.map((el,index) => {
                return <li onClick={()=> filterProductFunction(el,index)} key={el.id} className={index == selected ? "underline" : "no"}> { el.toUpperCase() }</li>
            })}
        </ul>
        <div className=' my-5 row row-cols-2 justify-content-center gap-5'>
          {filterProducts.map(el => <Gelato key={el.id} {...el} />)}
        </div>
    </div>
    
  )
}

export default Menu