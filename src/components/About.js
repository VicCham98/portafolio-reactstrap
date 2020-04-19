import React, {Fragment} from 'react';
import AboutImg from '../assets/set/about.svg'


const About = () => {
    return (
        <Fragment>
            <div className="p-5" id="about">
                <h2 className="text-right mr-lg-4 mr-md-4 mr-sm-4">Acerca de mi</h2>
                <img src={AboutImg} alt="about" className="float-right mt-lg-0 mt-md-5" style={{
                    width: 200,
                    height: 200
                }} />
                <p >
                    Hola, soy desarrollador web :D uso Html 5, CSS, Javascript,
                    JSX, ReactJs, para el Front-end y para el desarrollo movil
                    Android Studio - Java, experimentado en construir aplicaiones
                    CRUD, RESTful APIs usando PHP, tambien haciendo uso del framework CodeIgniter 3,
                    Laravel, uso librerias comunes como : Bootstrap 4, MDBootstrap, Reactstrap,
                    Axios, Ajax, JQuery
                </p>
                <p>
                    Tambien hago uso del controlador de versiones: Git, Github, para la
                    Base de datos usualmente suelo usar MySQL, hize integraciones de
                </p>
            </div>
        </Fragment>
    );
};

export default About;