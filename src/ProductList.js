/** @format */

import Product from './Product'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ProductList() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('/api/shopping/getall')
      .then((response) => {
        setData(response.data)
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2'>
      {data.map((product) => {
        return (
          <Link
            to={`/shopping/${product.id}`}
            state={{
              id: `${product.id}`,
              name: `${product.product_name}`,
              city: `${product.city}`,
              price: `${product.price}`,
              description: `${product.description}`,
              url: `${product.imgUrl}`,
            }}>
            <Product
              key={product.id}
              name={product.product_name}
              city={product.city}
              price={product.price}
              description={product.description}
              url={product.imgUrl}
            />
          </Link>
        )
      })}
    </div>
  )
}

export default ProductList
