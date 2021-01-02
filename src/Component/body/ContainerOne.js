import React from 'react'
import {Jumbotron,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import FullName from '../Profile/FullName';


function ContainerOne() {
    return (
        <div class='coontainerOne'>
            <Jumbotron>
  <FullName/>
  <p>
  je suis développeur web, je fais de la programmation back-end et front-end, et de la configuration et gestion de serveurs. J’hésite à dire « full stack developer », terme popularisé il y a quelque temps, qui est devenu sujet à controverse.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
 
</Jumbotron>

        </div>
    )
}

export default ContainerOne
