import React, { useState } from 'react';
import axios from 'axios';
import Gelato from './Gelato';
import Loader from './Loader';

axios.defaults.baseURL ='https://react-corso-api.netlify.app/.netlify/functions/'

const Menu = () => {
  const [products, setProducts] = useState();

  const [categories , setCategories] = useState([]);
  // let categories = Array.from(new Set(products.map(el => el.categoria)));

  const [selected, setSelected] = useState(0);
  // questo state lo usiamo per creare un array dei prodotti selezionati in base alla categoria
  const [filterProducts, setFilterProducts] = useState(products);
  
  // state loading ed error
  const [isLoading , setIsLoading] = useState(true);
  const [isError , setIsError] = useState(false);

  const filterProductFunction = (category, index) => {
    // passo l'index per la selected
    setSelected(index);
    // se category è uguale ad all allora mostra tutti i gelato
    if (category === "all") {
      setFilterProducts(products);
    } else {
      // se non è uguale ad all filtriamo i prodotti con un ternario
      setFilterProducts(products.filter(el => el.categoria === category ? el : ""))
    }
  }
React.useEffect(()=>{
// funzione eseguita immediatamente tra parentesi 
  (async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await axios.get('gelateria');
      setProducts(response.data.data.default);
      setFilterProducts(response.data.data.default);
        // creo un array di categorie uniche dalla risposta dell'API.
      const newCategories = Array.from(new Set(response.data.data.default.map(el => el.categoria)));
        // aggiunge all come primo elemento dell'array
      newCategories.unshift('all');
      setCategories(newCategories);

      setIsError(false);
      setIsLoading(false);

    }catch(err){
      setIsError(true);
      setIsLoading(true);
      console.log(err);
    }

  })();
},[])
  return (
    <div className='menu'>
      {
        (!isLoading && !isError) ? <>      <ul>
        {categories.map((el, index) => {
          return <li onClick={() => filterProductFunction(el, index)} key={el.id} className={index == selected ? "underline" : "no"}> {el.toUpperCase()}</li>
        })}
      </ul>
      <div className=' my-5 row row-cols-2 justify-content-center gap-5'>
        {filterProducts.map(el => <Gelato key={el.id} {...el} />)}
      </div></> : (!isLoading && isError) ? <h1 className='text-danger' style={{ fontSize : "100px" , textAlign : "center" }} > There is an error!</h1> : <Loader />
      }

    </div>

  )
}

export default Menu