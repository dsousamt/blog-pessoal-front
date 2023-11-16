import { FormEvent, ChangeEvent, useContext, useState, useEffect} from 'react';
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from "../../models/UsuarioLogin";
import { RotatingLines } from 'react-loader-spinner';
import BaseInput from '../../components/input/baseInput/BaseInput';
import Button from '../../components/button/Button';
import { toastAlerta } from '../../utils/toastAlerta';
function Login() {
    
    const navigate = useNavigate()
    const { usuario, handleLogin, isLoading } = useContext(AuthContext);
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    );

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }
    
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold ">
                <form className="flex flex-col gap-4 p-6"onSubmit={login} >
                    <h2 className="text-slate-900 text-5xl ">Entrar</h2>
                    
                    <BaseInput label='Login' id='usuario' name='usuario'
                    value={usuarioLogin.usuario}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <BaseInput type='password' label='Senha' id='senha' name='senha'
                    value={usuarioLogin.senha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <Button type='submit' category='primary'>
                    {isLoading ? <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}/> : <span>Entrar</span>}
                    </Button>

                    <hr className="border-slate-800 w-full" />

                    <p>
                        Ainda não tem uma conta?{' '}
                        <Link to="/cadastro" className="text-indigo-800 hover:underline">Cadastre-se</Link>
                    </p>
                </form>
                <div className="fundoLogin hidden lg:block"></div>
            </div>
        </>
    )
}

export default Login