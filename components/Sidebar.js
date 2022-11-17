import Image from "next/image"
import useQuisco from '../hooks/useQuisco'
import Categoria from '../components/Categoria'

export default function Sidebar() {

    const {categorias} = useQuisco()

  return (
    <>
        <Image width={100} height={100} src="/assets/img/logo.svg" alt="Imagen Logo" className="mx-auto pt-5"/>

        <nav className="mt-10">
            {categorias.map(categoria => (
                <Categoria key={categoria.id} categoria={categoria}/>
            ))}
        </nav>
    </>
  )
}
