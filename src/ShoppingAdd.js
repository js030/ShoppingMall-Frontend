/** @format */

import React, { useCallback, useRef, useState } from 'react'
import logo from './src_assets/name.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ShoppingAdd() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    product_name: '',
    product_price: '',
    city: '',
    about: '',
  })

  const [imgFile, setImageFile] = useState('')

  const inputRef = useRef(null)

  const onUploadImage = useCallback((e) => {
    if (!e.target.files) {
      return
    }
    const file = inputRef.current.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImageFile(reader.result)
    }
  })

  const saveProduct = async (file) => {
    const data = new FormData()

    data.append('file', imgFile)
    data.append('upload_preset', 'plvmtgkg')

    const cloudName = process.env.REACT_APP_IMAGE_CLOUD_NAME

    console.log(cloudName)

    axios
      .post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, data)
      .then(function (response) {
        const url = response.data['secure_url']

        axios
          .post('/api/shopping/save', {
            product_name: product_name,
            city: city,
            price: product_price,
            description: about,
            imgUrl: url,
          })
          .then(function (response) {
            console.log(response.status)
            if (response.status === 200) {
              navigate('/shopping')
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const { product_name, product_price, city, about } = form

  function onChange(e) {
    const { value, name } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    saveProduct(imgFile)
  }

  return (
    <form className='p-10' onSubmit={handleSubmit}>
      <div className='space-y-12'>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-xl font-semibold leading-7 text-gray-900'>
            상품 등록
          </h2>
          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='col-span-full'>
              <label
                htmlFor='product-name'
                className='block text-sm font-medium leading-6 text-gray-900'>
                상품명
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='product_name'
                  id='product-name'
                  value={product_name}
                  onChange={onChange}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-2 sm:col-start-1'>
              <label
                htmlFor='product-price'
                className='block text-sm font-medium leading-6 text-gray-900'>
                가격
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='product_price'
                  id='product-price'
                  value={product_price}
                  onChange={onChange}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-2 sm:col-start-1'>
              <label
                htmlFor='city'
                className='block text-sm font-medium leading-6 text-gray-900'>
                희망 거래 장소
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='city'
                  id='city'
                  value={city}
                  onChange={onChange}
                  autoComplete='address-level2'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='col-span-full'>
              <label
                htmlFor='about'
                className='block text-sm font-medium leading-6 text-gray-900'>
                내용
              </label>
              <div className='mt-2'>
                <textarea
                  id='about'
                  name='about'
                  rows={3}
                  value={about}
                  onChange={onChange}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  defaultValue={''}
                />
              </div>
            </div>

            <div className='col-span-full'>
              <label
                htmlFor='photo'
                className='block text-sm font-medium leading-6 text-gray-900'></label>
            </div>

            <div className='col-span-full'>
              <label
                htmlFor='cover-photo'
                className='block text-sm font-medium leading-6 text-gray-900'>
                상품 이미지
              </label>
              <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
                <div className='text-center'>
                  <img
                    src={imgFile ? imgFile : logo}
                    alt='...'
                    className='h-40 w-40'
                  />
                  <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                    <label
                      htmlFor='file-upload'
                      className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'>
                      <input
                        ref={inputRef}
                        onChange={onUploadImage}
                        id='file-upload'
                        name='file-upload'
                        type='file'
                        accept='image/jpg, image/jpeg, image/png'
                      />
                    </label>
                  </div>
                  <p className='text-xs leading-5 text-gray-600'>
                    PNG, JPG, GIF 10MB까지
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-end gap-x-6'>
        <button
          type='button'
          className='text-sm font-semibold leading-6 text-gray-900'>
          취소
        </button>
        <button
          type='submit'
          className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
          저장
        </button>
      </div>
    </form>
  )
}

export default ShoppingAdd
