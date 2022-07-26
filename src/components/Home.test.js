import React from "react";
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Home from './Home';

it('renders', () => {
  render(<Home />)

  const HomeComponent = screen.getByTestId('home')
  expect(HomeComponent).toBeInTheDocument()
})