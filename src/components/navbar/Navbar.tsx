import { ReactNode, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { toastAlerta } from "../../utils/toastAlerta"

function Navbar() {

  const navigate = useNavigate()
  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      toastAlerta('Usuário deslogado com sucesso', 'sucesso')
      navigate('/login')
  }

  let component: ReactNode;

  if (usuario.token !== '') {    
    component = (
      <nav className="
      w-full bg-indigo-900 text-white flex justify-center py-4">
      <div className="container flex justify-between text-lg">
        <Link to='/' className='hover:underline'>Blog do Matheus</Link>
        <div className="flex gap-4">
          <Link to='/postagens' className='hover:underline'>Postagens</Link>
          <Link to='/temas' className='hover:underline'>Temas</Link>
          <Link to='/perfil' className='hover:underline'>Perfil</Link>
          <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
        </div>
      </div>
    </nav>
    )
  }

  return (
    <>
      {component}
    </>
  )
}

export default Navbar