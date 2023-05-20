import React from 'react'
import Slider from '../../components/Hero/Slider'
import Order from '../../components/Hero/Order'
import Category from '../../components/Category/Category'
import Product from '../../components/Product/Product'

const Home = () => {
  return (
    <>
    <Slider/>
    <Order />
    <Category />
    <Product />
    </>
  )
}

export default Home