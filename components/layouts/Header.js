import React, { useContext } from 'react';
import Buscar from '../UI/Buscar';
import Navegacion from './Navegacion';
import Link from 'next/link';
import styled from '@emotion/styled';
import Boton from '../UI/Boton';
import { FirebaseContext } from '../../firebase';

const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;

const HeaderLine = styled.header`
    border-bottom: 2px solid var(--gris3);
    padding: 1rem 0;
`;

const Logo = styled.p`
    color: var(--naranja);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;

    &:hover {
        cursor: pointer;
    }
`;

const DivSesion = styled.div`
    display: flex;
    align-items: center;
`;

const SaludoUsuario = styled.p`
    margin-right: 2rem;
`;

const Navegacion_Navbar = styled.div`
    display: flex;
    align-items: center;
`;

const Header = () => {

    const { usuario, firebase } = useContext(FirebaseContext);

    return ( 
        <HeaderLine>
            <ContenedorHeader>
                <Navegacion_Navbar>
                    <Link href="/">
                        <Logo>P</Logo>
                    </Link>
                    
                    <Buscar />

                    <Navegacion />
                </Navegacion_Navbar>

                <DivSesion>
                    { usuario ? (
                        <>
                            <SaludoUsuario>Hola {usuario.displayName}</SaludoUsuario>

                            <Boton type="button"
                                bgColor="true"
                                onClick={() => firebase.cerrarSesion()}
                            >Cerrar Sesión</Boton>
                        </>
                    ) : (
                    <>
                        <Link href="/login">
                            <Boton
                                bgColor="true"
                            >Login</Boton>
                        </Link>
                        <Link href="/crear-cuenta">
                            <Boton>Crear Cuenta</Boton>
                        </Link>
                    </>
                    ) }
                </DivSesion>
            </ContenedorHeader>
        </HeaderLine>
     );
}
 
export default Header;