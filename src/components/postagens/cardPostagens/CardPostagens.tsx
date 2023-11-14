import { Link } from "react-router-dom";
import Postagem from "../../../models/Postagem";

interface CardPostagensProps {
  post: Postagem
}

function CardPostagens({ post }: CardPostagensProps) {
  return (
    <>
      <div className="flex flex-col overflow-hidden justify-between">
        <div>
          <div className="flex w-full items-center">
            <img src={post.usuario?.foto} alt="" className="h-12 rounded-full"/>
            <h3>{post.usuario?.nome}</h3>
          </div>
          <div>
            <h4>{post.titulo}</h4>
            <p>{post.texto}</p>
            <p>{post.tema?.descricao}</p>
            <p>{new Intl.DateTimeFormat(undefined, {
              dateStyle: 'full',
              timeStyle: 'medium',
            }).format(new Date(post.data))}</p>
          </div>
        </div>
        <div className="flex">
          <Link to={`/editarPostagem/${post.id}`} className="w-full flex items-center justify-center">
            <button>Editar</button>
          </Link>
          <Link to={`/deletarPostagem/${post.id}`} className="w-full flex items-center justify-center">
            <button>Deletar</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CardPostagens