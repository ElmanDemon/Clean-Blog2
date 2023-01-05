import React from 'react'
import './index.css'
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

function Footer() {
  return (
    <>
    <div className='text-center display-4 icons' >
    <a href='!#'><AiFillTwitterCircle /></a>
    <a href='!#'><BsFacebook /></a>
    <a href='!#'><AiFillGithub /></a>
    <h6 className='py-3'>Copyright © Your Website 2020</h6>
    </div>
    </>
  )
}

export default Footer