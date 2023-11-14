import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <nav className="
        w-full bg-indigo-900 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <Link to='/' className='hover:underline'>Blog do Matheus</Link>
          <div className="flex gap-4">
            <Link to='/postagens' className='hover:underline'>Postagens</Link>
            <Link to='/temas' className='hover:underline'>Temas</Link>
            <Link to='/perfil' className='hover:underline'>Perfil</Link>
            <Link to='' className='hover:underline'>Sair</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar