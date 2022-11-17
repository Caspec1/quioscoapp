import Image from "next/image"
import { formatearDinero } from '../helpers/index'
import useQuisco from "../hooks/useQuisco"

export default function Producto({producto}) {

    const { nombre, imagen, precio } = producto
    const { handleSetProducto, handleChangeModal, modal } = useQuisco()

  return (
    <div className='border p-3'>
        <Image src={`/assets/img/${imagen}.jpg`} alt={`Imagen Platillo ${nombre}`} width={400} height={500}/>
        <div className="p-5">
            <h2 className="text-2xl font-bold">{nombre}</h2>
            <p className="mt-5 font-black text-4xl text-amber-500">
                {formatearDinero(precio)}
            </p>

            <button type="button" className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold duration-300" onClick={() => {
              handleChangeModal()
              handleSetProducto(producto)
            }}>Agregar</button>
        </div>
    </div>
  )
}
