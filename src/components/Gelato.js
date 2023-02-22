import React from 'react'

const Gelato = (el) => {
  return (
    <section className='gelato col-12 mx-auto col-md-10 col-lg-5 d-flex'>
        <div className='gelato-img'>
            <img src={ el.img } alt={el.img}></img>
        </div>
        <div className='gelato-body'>
            <div className='gelato-body-header p-2'>
                <span className='badge-price'>
                    { (el.prezzo / 100).toFixed(2) } &euro;
                </span>
                <span>{ el.nome }</span>
                <h6 className='gelato-category border-bottom'>{ el.categoria }</h6>
            </div>
            <div className='gelato-body-body'>
                <p >{ el.decrizione }</p>
            </div>
        </div>
        
    </section>
  )
}

export default Gelato