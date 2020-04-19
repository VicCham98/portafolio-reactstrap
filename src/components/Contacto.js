import React, {Fragment} from 'react';
import ContactImg from '../assets/set/contact.svg'

const Contacto = () => {
    return (
        <Fragment>
            <div className="p-5" id="contact">
                <h3>Contactame</h3>
                <img src={ContactImg} alt="Contacto" style={{
                    width: 200,
                    height: 200
                }} className="float-left" />
                <ul className="">
                    <li className="d-lg-inline-block d-md-block d-sm-block d-block text-center px-5">
                        <strong>
                            Correo
                        </strong>
                        <p>
                            vchambilla@gmail.com
                        </p>
                    </li>
                    <li className="d-lg-inline-block d-md-block d-sm-block d-block text-center px-5">
                        <strong>
                            Whatsapp
                        </strong>
                        <p>
                            (+051) 943 190 301
                        </p>
                    </li>
                    <li className="d-lg-inline-block d-md-block d-sm-block d-block text-center px-5">
                        <strong>
                            Facebook
                        </strong>
                        <p>
                            visitar perfil!
                        </p>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
};

export default Contacto;