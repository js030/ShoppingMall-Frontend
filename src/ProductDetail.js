/** @format */

import axios from 'axios'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function ProductDetail() {
  const location = useLocation()
  const navigate = useNavigate()

  const data = location.state

  function deleteProduct() {
    axios
      .post('/api/shopping/delete', null, {
        params: {
          id: data.id,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          navigate('/shopping')
        }
      })
  }

  return (
    <div className='mx-auto'>
      <div class='flex flex-col lg:mx-auto text-center items-center md:flex-col md:space-x-10'>
        <div class='relative'>
          <img id='image' class='w-100 h-80' src={data.url} alt='' />
          <div class='arrows w-full absolute inset-y-1/2 flex justify-between px-3'>
            <button id='prev'>
              <i class='fa-solid fa-chevron-left'></i>
            </button>
            <button id='next'>
              <i class='fa-solid fa-chevron-right'></i>
            </button>
          </div>
        </div>
        <div class='space-y-3 p-20'>
          <h1 class='text-3xl font-bold'>{data.name}</h1>
          <h2 class='text-xl font-bold'>{data.price}원</h2>
          <h2 class='text-xl font-bold'>{data.city}</h2>
          <p class='text-sm'>{data.description}</p>

          <div class='flex items-center space-x-5'>
            <button class='flex items-center space-x-2 border border-yellow-400 px-5 py-2 rounded-md hover:bg-yellow-200 hover:text-white'>
              <i class='fa-regular fa-heart text-xl'></i>
              <span>수정</span>
            </button>
            <button
              onClick={deleteProduct}
              class='flex items-center space-x-2 border border-rose-400 px-5 py-2 rounded-md text-black  hover:bg-rose-300 hover:border hover:border-gray-600'>
              <i class='fa-solid fa-cart-shopping text-xl'></i>
              <span>삭제</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
