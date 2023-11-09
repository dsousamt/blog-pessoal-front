import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <nav className="
        w-full bg-indigo-900 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <Link to='/' className='hover:underline'>Blog do Matheus</Link>
          <div className="flex gap-4">
            Postagens
            <Link to='/temas' className='hover:underline'>Temas</Link>
            <Link to='/cadastroTema' className='hover:underline'>Cadastrar Tema</Link>
            Perfil
            <Link to='' className='hover:underline'>Sair</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar