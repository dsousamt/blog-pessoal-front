import CardTemas from "../cardTemas/CardTemas";
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dna } from 'react-loader-spinner';

import { buscar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/AuthContext';

import Tema from '../../../models/Tema';
import { toastAlerta } from "../../../utils/toastAlerta";

function ListaTemas() {

    const [temas, setTemas] = useState<Tema[]>([]);

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarTemas() {
        try {
            await buscar('/temas', setTemas, {
                headers: { Authorization: token },
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info');
            navigate('/login');
        }
    }, [token])

    useEffect(() => {
        buscarTemas()
    }, [temas.length])




  return (
    <>
      {temas.length === 0 && (
          <Dna
              visible={true}
              height="200"
              width="200"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper mx-auto"
          />
      )}

      <div className="justify-center w-full my-4 flex">
          <div className="container flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {temas.map((tema) => (
                    <>
                        <CardTemas key={tema.id} tema={tema} />
                    </>
                ))}
              </div>
          </div>
      </div>
      <div className="justify-center w-full my-4 flex">
            <Link to='/cadastroTema' className='
            rounded text-slate-100 bg-indigo-400 
            hover:bg-indigo-800 w-1/2 py-2 mx-auto block text-center'>
                Cadastrar Novo Tema
            </Link>
      </div>
    </>
  )
}

export default ListaTemas