import { useState } from 'react';
import Button from 'react-bootstrap/Button';




const Titulo = ({subtituloNuevo}) => {

    const [msj, setMsj] = useState("");

    const mostrarMensaje = () => {
        setMsj("(from changed state)");
        };


    return (
        <>
        
        <h1> Hello {subtituloNuevo} {msj}</h1>
        <Button onClick={mostrarMensaje}>Mostrar Mensaje</Button>
        
        
        </>
    );
};

export default Titulo;