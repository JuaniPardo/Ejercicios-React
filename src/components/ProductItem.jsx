import {useState} from "react";
import '../css/ProductItem.css'

// eslint-disable-next-line react/prop-types
function ProductoItem({ID, nombre, precio, handleTotal}) {

  const [cantidad, setCantidad] = useState(0)


  const handleQty = (e) => {
    // Obtengo el value del input
    const newQty = parseInt(e.target.value)
    setCantidad(newQty)
    handleTotal(setCantidad

    )
  }

  // Calculo el subtotal
  const subTotal = cantidad * precio

  // handleTotal(subTotal)

  return (
    <tr>
      <td> {ID} </td>
      <td> {nombre} </td>
      <td> {precio} </td>
      <td className={"input-group"}>
        <input
          min={0}
          type="number"
          value={cantidad}
          onChange={handleQty}
        />
      </td>
      <td> {subTotal} </td>
    </tr>
  )
}

export default ProductoItem