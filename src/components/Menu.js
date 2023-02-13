import React , {useState} from 'react';
import data from '../fakeData';

const Menu = () => {
    const [product , setProduct] = useState(data);
    // crea un nuovo array di elementi unici dall'array product
    let categories = Array.from(new Set(product.map(el => el.categoria)));
    console.log(categories);

  return (
    <div className='menu'>
        <ul>
            {categories.map(el => {
                return <li> { el.toUpperCase() }</li>
            })}
        </ul>
    </div>
  )
}

export default Menu