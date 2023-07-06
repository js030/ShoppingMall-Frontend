/** @format */

import React, { Component } from 'react'
import logo from './src_assets/name.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className='flex flex-row justify-around font-bold'>
          <div className='flex-wrap'>
            <Link to={'/'}>
              <img src={logo} alt='...' className='w-4/12 h-/12' />
            </Link>
          </div>
          <nav className='flex-auto mx-0 my-auto'>
            <ul className='flex flex-row justify-evenly text-lg'>
              <li>
                <Link to={'/shopping'} className='hover:text-yellow-300'>
                  중고거래
                </Link>
              </li>
              <li>
                <a href='#' className='hover:text-yellow-300'>
                  맛집정보
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-yellow-300'>
                  동네알바
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-yellow-300'>
                  족보창고
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-yellow-300'>
                  잡담방
                </a>
              </li>
            </ul>
          </nav>
          <div className='flex-auto flex justify-end mr-6'>
            <button className='mr-6'>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='fa-2x' />
            </button>
            <button className='mr-6 text-lg'>로그인</button>
            <button className='mr-6 text-lg'>로그아웃</button>
          </div>
        </div>
      </div>
    )
  }
}
