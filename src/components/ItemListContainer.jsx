import React from "react";
import ItemList from "./ItemList";
import { Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState } from "react"; 

const ItemListContainer = () => {
  const {categoria} = useParams()
console.log(categoria)
const {filterProduct, setFilterProduct} = useState([]);



  const productos = [
    {
      id: 1,
      categoria: "accesorios",
      nombre: "Buff 9z",
      marca: "9z",
      color: "violeta / negro",
      precio: 7000,
      imagen: "../public/images/9z buff.png",
      descripcion: "Buff original de 9z, ideal para viajes largos",
      cantidad: 1,
    },
    {
      id: 2,
      categoria: "camisetas",
      nombre: "Camiseta v1",
      marca: "9z",
      color: "dorado",
      precio: 10000,
      imagen: "../public/images/9z camiseta dorado.png",
      descripcion: "Camiseta edicion limitada v1",
      cantidad: 4,
    },
    {
      id: 3,
      categoria: "camisetas",
      nombre: "Camiseta v2",
      marca: "9z",
      color: "blanco",
      precio: 10000,
      imagen: "../public/images/9z camiseta blanca.png",
      descripcion: "Camiseta edicion limitada v2",
      cantidad: 15,
    },
    {
      id: 4,
      categoria: "gaming",
      nombre: "Mousepad v1",
      marca: "9z",
      color: "negro",
      precio: 12000,
      imagen: "../public/images/mousepad 9z.jpeg",
      descripcion: "Mousepad original 9z Speed",
      cantidad: 5,
    },
    {
      id: 5,
      categoria: "accesorios",
      nombre: "Gorra 9z",
      marca: "9z",
      color: "violeta",
      precio: 4000,
      imagen: "../public/images/9z gorra.png",
      descripcion: "Gorra original 9z",
      cantidad: 7,
    },
    {
      id: 6,
      categoria: "gaming",
      nombre: "Mousepad v2",
      marca: "9z",
      color: "negro",
      precio: 12000,
      imagen: "../public/images/mousepad 2 9z.jpg",
      descripcion: "Mousepad original 9z Control",
      cantidad: 5,
    },
  ];
  
  const obtenerProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject("No se encontraron productos");
    }
  });

  obtenerProductos
    .then((resultado) => {
    })
    .catch((error) => {
      console.log(error);
    });
    
   
  const filteredProduct = productos.filter((producto) => producto.categoria == categoria);
    
    
  return (
    <>
      <Center className= "itemListContainer" p = "1rem">
      {categoria ? <ItemList productos={filteredProduct} /> : <ItemList productos={productos} />}
      </Center>
    </>
  );
};

export default ItemListContainer;
