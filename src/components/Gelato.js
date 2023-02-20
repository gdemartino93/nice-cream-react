import React from 'react'

const Gelato = (el) => {
  return (
    <section className='gelato col-5 d-flex'>
        <div className='gelato-img'>
            <img src={ el.img }></img>
        </div>
        <div className='gelato-body'>
            <div className='gelato-body-header p-2'>
                <h5>{ el.nome }</h5>
                <h6 className='gelato-category'>{ el.categoria }</h6>
            </div>
            <div className='gelato-body-body'>

            </div>
        </div>
        
    </section>
  )
}

export default Gelato