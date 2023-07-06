/** @format */

import React, { Component, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductList from './ProductList'

function Shopping() {
  return (
    <div>
      <div className='text-center'>
        <Link
          to={'/shopping/add'}
          className='text-2xl font-extralight text-blue-200 border border-blue-200 hover:text-blue-400'>
          상품등록
        </Link>
        <ProductList />
      </div>
    </div>
  )
}

export default Shopping
