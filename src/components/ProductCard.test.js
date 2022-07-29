import React from "react";
import "@testing-library/jest-dom"
import { screen, render } from '@testing-library/react'
import ProductCard from "./ProductCard";

it('renders a card', () => {
  const product = {}
  render(<ProductCard product={product} />)

  const productCard = screen.getAllByTestId('productCard')

  expect(productCard.length).toBe(1)
})

it('renders a card correctly', () => {
  const product = {
    name: 'product', description: 'a product', img: 'img', stock: 3, id: '0000'
  }
  render(<ProductCard product={product} />)

  const elems = {
    productCard: screen.getByTestId('productCard'),
    productName: screen.getByText('product'),
    productDescription: screen.getByText('a product'),
    productImg: screen.getByAltText('product'),
    productStock: screen.getByText('3')
  }
  
  Object.values(elems).forEach(elem => expect(elem).toBeInTheDocument())
})