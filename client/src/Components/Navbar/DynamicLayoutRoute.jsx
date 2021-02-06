import React from 'react';
import { BrowserRouter as Route } from "react-router-dom";
import AdminMenu from '../../Containers/AdminMenu/AdminMenu';
import Menu from '../../Containers/Menu/Menu';
import NewFood from '../../Containers/NewFood/NewFood';
import OrderDetails from '../../Containers/OrderDetails/OrderDetails';
import Orders from '../../Containers/Orders/Orders';
import ProductDetails from '../../Containers/ProductDetails/ProductDetails';
import Nav from "./Nav";
import NavHomeOnly from "./NavHomeOnly";

// wrapper component
const DynamicLayoutRoute = props => {
    const { component: RoutedComponent, layout, ...rest } = props;
  
    // depends on the layout, you can wrap Route component in different layouts
    switch (layout) {
      case 'menu': {
        return (
        <>
            <Nav/>
            <Menu/>
        </>
        )
      }
      case 'navHomeOnly-od': {
        return (
        <>
            <NavHomeOnly/>
            <OrderDetails/>
        </>
        )
      }
      case 'navHomeOnly-o': {
        return (
        <>
            <NavHomeOnly/>
            <Orders/>
        </>
        )
      }
      default: {
        return (
        <>
            <Nav/>
            <Menu/>
        </>
        )
      }
    }
  };

  export default DynamicLayoutRoute;