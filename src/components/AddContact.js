import { useState } from 'react';
export default function AddContact(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    let adder = () => {
        if (name === "" || gender === "" || email === ""  || !(gender.includes("M") || gender.includes("F") || gender.includes("m") || gender.includes('f')) || !email.includes("@") || !email.includes(".com"))
        { alert('Fill fields properly') }
        else{
            setName('');
            setGender('');
            setEmail('');
            props.addToList(name,gender,email);
           
        }
    }
    return (
        <>
            <div className="mb-3 mt-4 row">
                <div className="col-3">
                </div>
                <div className="col-5">
                    <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        placeholder='Enter your Name.'
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                        value={name}

                    />
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col-3">
                </div>
                <div className="col-5">
                    <input
                        type="text"
                        className="form-control"
                        id="inputGender"
                        placeholder='Enter your Gender.'
                        onChange={(e) => {
                            setGender(e.target.value)
                        }}
                        value={gender}
                    />
                </div>
            </div>

            <div className="mb-3 row">
                <div className="col-3"></div>
                <div className="col-5">
                    <input 
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder='Enter your Email.'
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    value={email} />
                </div>
            </div>
            <div className="text-center">
                <button className="me-4 btn btn-primary px-4" onClick={adder}>Add to List</button>
            </div>
        </>)
}

