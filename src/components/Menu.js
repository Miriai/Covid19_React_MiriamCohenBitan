import * as React from 'react';
import {Link} from "react-router-dom";

/**
 *
 * A simple component to display a menu with links
 * @returns {JSX.Element}
 * @constructor
 */
function Menu() {
    return (
        <>
            <br/>
            <div className='row'>

                <div className='d-flex justify-content-center'>
                    <h1>Covid19 - Registration Form</h1>
                </div>

            </div>

            <nav>
                <div className="row">
                    <div className="col-6 d-flex justify-content-end">
                        <Link to="/" className="btn btn-outline-primary">Register</Link>
                    </div>
                    <div className="col-6">
                        <Link to="/summary" className="btn btn-outline-primary">Summary</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}


export default Menu;
