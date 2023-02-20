import React , {useState} from 'react';
import data from '../fakeData';
import Gelato from './Gelato';

const Menu = () => {
    const [product , setProduct] = useState(data);
    // crea un nuovo array di elementi unici dall'array product
    let categories = Array.from(new Set(product.map(el => el.categoria)));
    // aggiunge all come primo elemento dell'array
    categories.unshift('All');

  return (
    <div className='menu'>
        <ul>
            {categories.map(el => {
                return <li key={el.id}> { el.toUpperCase() }</li>
            })}
        </ul>
        <div className=' my-5 row row-cols-2 justify-content-center gap-5'>
          {product.map(el => <Gelato key={el.id} {...el} />)}
        </div>
    </div>
    
  )
}

export default Menu