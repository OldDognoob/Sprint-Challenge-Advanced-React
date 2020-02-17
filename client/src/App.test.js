import React from "react";
// import { render } from '@testing-library/react';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";



describe('App', () => {
  it('renders an element with specific text', () => {
    // 1- setup, render app to the virtual dom
    const wrapper = rtl.render(<App />);
    // 2- capture the element of interest
    const element = wrapper.queryByText(/List of Players/i);
    // wrapper.debug()
    // 3- assert thing in DOM
    expect(element).toBeInTheDocument();
  })
    it('renders a header', () =>{
      const wrapper = rtl.render(<App/>);
      const element=wrapper.getByText(/Players/i);
      expect(element).toBeTruthy()
    })
})
