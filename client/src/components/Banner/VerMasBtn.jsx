import React from 'react';
import {Link} from 'react-router-dom';
import {MdKeyboardArrowDown} from 'react-icons/md';
// import vector from '../../assets/vector.png';

const VerMasBtn = () => {
    return(
            <Link to='/challenges'>
                <div className='ver-mas'>
                <h5>Ver retos</h5>
                <MdKeyboardArrowDown/>
                </div>
            </Link> 
    )
}

export default VerMasBtn;