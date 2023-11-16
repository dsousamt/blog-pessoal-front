import { LinkedinLogo, FacebookLogo, InstagramLogo } from "@phosphor-icons/react"
import { ReactNode, useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

function Footer() {

  const { usuario} = useContext(AuthContext);
  let component: ReactNode;

  if (usuario.token !== '') {
    component = (
      <footer className="flex justify-center bg-indigo-900 text-white">
      <div className="container flex flex-col items-center py-4">
        <p className="text-xl font-bold">Blog do Matheus | Copyright: {}</p>
        <p className="text-lg">Acesse minhas redes sociais</p>
        <div className="flex gap-2">
          <LinkedinLogo size={32} weight="bold" />
          <InstagramLogo size={32} weight="bold" />
          <FacebookLogo size={32} weight="bold" />
        </div>
      </div>
    </footer>
    )
  }

  return (
    <>
  	  {component}
    </>
  )
}

export default Footer