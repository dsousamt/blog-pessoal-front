import { Popup } from "reactjs-popup";
import FormularioPostagem from "../formularioPostagem/FormularioPostagem";

import 'reactjs-popup/dist/index.css';
import './ModalPostagem.css'

function ModalPostagem() {
  return (
    <>
      <Popup
        trigger={
          <button>
            Nova Postagem
          </button>
        }
        modal
      >

        <FormularioPostagem/>
      </Popup>
    </>
  )
}

export default ModalPostagem