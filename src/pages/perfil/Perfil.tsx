import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'

function Perfil() {

  const navigate = useNavigate()

  const { usuario } = useContext(AuthContext)

  useEffect(() => {
    if (usuario.token === "") {
      alert('Você precisa estar logado')
      navigate("/login")
    }
  }, [usuario.token])

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-200'>
      <div className="relative w-full group max-w-md min-w-0 mx-auto mt-6 mb-6 break-words bg-white rounded-xl">
        <div className="flex flex-wrap justify-center w-full">
            <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`}
              className="dark:shadow-xl border-white rounded-full align-middle border-4 absolute -m-16 -ml-18 lg:-ml-16 max-w-[150px]" />
        </div>
        <div className="mt-20 mb-8 text-center">
          <h3 className="mb-1 text-2xl font-bold text-gray-700">{usuario.nome}</h3>
          <span className="text-sm font-bold text-gray-700 font-mono text-xl">{usuario.usuario}</span>
        </div>
      </div>
    </div>
  )
}

export default Perfil