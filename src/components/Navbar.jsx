import React from "react";
import CartWidget from "./CartWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Flex>
        <Box p="4">
          {/* Brand */}
          <Link to={"/"}>
            <h1><img class="logo" src="../public/images/logo 9z.png" alt="" /></h1>
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton className="btnCategorias">Categorias</MenuButton>
            <MenuList className="dropdownCategorias">
              <Link to={`/categoria/${"camisetas"}`}>
                <MenuItem>Camisetas</MenuItem>
              </Link>
              <Link to={`/categoria/${"accesorios"}`}>
                <MenuItem>Accesorios</MenuItem>
              </Link>
              <Link to={`categoria/${"gaming"}`}>
                <MenuItem>Gaming</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box p="4">
          {/*Carrito */}
          <CartWidget />
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
