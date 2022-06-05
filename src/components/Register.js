import React, {useState} from "react";
import Constants from "../Constants";
import axios from 'axios';

/**
 * a component which handles a form to add Location to the list
 * @param props list a list of Location class
 * addToList is a function to add to the list
 * errors in case of errors show them on the form
 * checkInput a function to validate the input in the form
 * @returns {JSX.Element}
 * @constructor
 */
export default function Register(props) {
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [BirthDay, setDayOfBirth] = useState('');
    const [Address, setAddress] = useState('');
    const [City, setCity ] = useState('');
    const [ZipCode, setZipCode] = useState('');
    const [LandLine, setLandLine] = useState('');
    const [Phone, setCellphone] = useState('');
    const [isInfected, setInfected] = useState(false);
    const [isDiabetes, setDiabetes] = useState(false);
    const [isCardio, setCardio] = useState(false);
    const [isAllergic, setAllergic] = useState(false);
    const [other, setOther] = useState(false);
    const [otherInput, setOtherInput] = useState('');
    const [error, setError] = useState('');



    /**
     * happens when the user presses submit form
     * @param event
     */
    const handleSubmit  = async event =>{
        event.preventDefault();

        const data = {
            FirstName, LastName, BirthDay, Address, City, ZipCode,LandLine, Phone, isInfected, isDiabetes, isCardio, isAllergic, otherInput
        }
        // Send the data to the server
        console.log(data)
        try{
            await axios.post('http://localhost:8000/personalDetails', data);
        } catch(e){
            setError(e.response.data.message);
        }
    };


    return (
        <div className="container">
            <form className="border p-3" onSubmit={handleSubmit}>

                <div className="mb-3 col">
                    <label htmlFor="firstName" className="form-label">First Name:</label>
                    <input type="text" name="firstName" className="form-control" id="firstName"
                           onChange={e => setFirstName(e.target.value)}
                           required
                    />

                </div>

                <div className="mb-3 col">
                    <label htmlFor="lastName" className="form-label">Last Name:</label>
                    <input type="text" name="lastName" className="form-control" id="lastName"
                           onChange={e => setLastName(e.target.value)}
                           required
                    />

                </div>

                <div className="mb-3 col">
                    <label htmlFor="dateOfBirth" className="form-label">Date Of Birth:</label>
                    <input type="date" format="dd/MM/yyyy" name="dateOfBirth" className="form-control" id="dateOfBirth"
                           onChange={e => setDayOfBirth((e.target.value))}
                           required
                    />

                </div>

                <div className="mb-3 col">
                    <label htmlFor="address" className="form-label">Address:</label>
                    <input type="text" name="address" className="form-control" id="address"
                           onChange={e => setAddress(e.target.value)}
                           required
                    />

                </div>

                <div className="mb-3 col">
                    <label htmlFor="city" className="form-label">City:</label>
                    <input type="text" name="city" className="form-control" id="city"
                           onChange={e => setCity(e.target.value)}
                           required
                    />

                </div>



                <div className="mb-3 col">
                    <label htmlFor="zipCode" className="form-label">Zip Code:</label>
                    <input type="number" className="form-control" id="zipCode" name="zipCode"
                           onChange={e => setZipCode(e.target.value)}
                           required
                    />

                </div>

                <div className="mb-3 col">
                    <label htmlFor="landLine" className="form-label">Land Line:</label>
                    <input type="number" className="form-control" id="landLine" name="landLine"
                           onChange={e => setLandLine(e.target.value)}
                           required
                    />

                </div>

                <div className="mb-3 col">
                    <label htmlFor="cellphone" className="form-label">Cellphone:</label>
                    <input type="number" className="form-control" id="cellphone" name="cellphone"
                           onChange={e => setCellphone(e.target.value)}
                           required
                    />
                </div>



                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox" value="option2"
                           onChange={() => setInfected(!isInfected)}/>
                    <label className="form-check-label" htmlFor="inlineCheckbox2"> have been infected by COVID-19 before</label>
                </div>

                <br/><br/>
                <h4>previous conditions:</h4>

                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"
                    onChange={() => setDiabetes(!isDiabetes)}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Diabetes</label>
                </div>
                <br/>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"
                    onChange={() => setCardio(!isCardio)}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox2">Cardio-Vascular problems</label>
                </div>
                <br/>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"
                    onChange={() => setAllergic(!isAllergic)}/>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Allergies</label>
                </div>
                <br/>


                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="other"
                    onChange={() => setOther(!other)}/>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Other</label>

                </div>
                <div>
                    <input hidden={!other} className="mx-2 mt-3" id="filled-error"
                               label="Add conditions" variant="filled" onChange={e => setOtherInput(e.target.value)} />
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">{Constants.messages.register}</button>
            </form>
        </div>

    );
}
