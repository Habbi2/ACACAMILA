import React from 'react';
import {Link} from 'react-router-dom';

const EmprendedorBtn = () => {
    return(
        <button style={{backgroundColor: "#9a0a4e", border: "none"}} className='button-emp'>
            <Link to='/form-entrepreneur-login' className="btn-a">Participar cómo emprendedor</Link>
        </button>
    )
}

export default EmprendedorBtn;