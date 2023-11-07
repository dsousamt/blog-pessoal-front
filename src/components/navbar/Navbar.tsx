function Navbar() {
  return (
    <>
      <nav className="
        w-full bg-indigo-900 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          Blog do Matheus
          <div className="flex gap-4">
            Postagens
            Temas
            Cadastrar tema
            Perfil
            Sair
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar