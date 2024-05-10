import ProductoItem from "./ProductItem.jsx";
import {productos} from "../data/data.js";
import {useState} from "react";

function ProductList() {

  const [total, setTotal] = useState(0)

  const handleTotal = (currentSubTotal,newSubTotal) => {
    setTotal(total - currentSubTotal + newSubTotal)
  }

  return (
    <>
      <h1>Tabla de productos</h1>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
        </tr>

        </thead>
        <tbody>
        {productos.map((producto) => (
          <ProductoItem
            key={producto.ID}
            ID={producto.ID}
            nombre={producto.nombre}
            precio={producto.precio}
            totalUpdater={handleTotal}
          />)
        )
        }
        </tbody>
        <tfoot>
        <tr>
          <th colSpan={4}>TOTAL</th>
          <td>
            {total.toLocaleString('es-AR', {style:"currency", currency:"ARS"})}
          </td>
        </tr>
        </tfoot>
      </table>
    </>
  )
}

export default ProductList