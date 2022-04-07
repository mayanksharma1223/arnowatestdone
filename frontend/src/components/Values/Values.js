import React, { useContext, useEffect, } from 'react'
import AddValue from '../AddValue/AddValue'
import { useNavigate } from "react-router-dom";
import valueContext from '../../context/values/valueContext';
import Valuetaken from '../Valuetaken/Valuetaken';

const Values = () => {
    const context = useContext(valueContext);
    let navigate = useNavigate();
    const { values, getValues } = context;
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getValues();
        }
        else {
            navigate("/login")
        }
        // eslint-disable-next-line
    }, [])
    return (<>
        <div>
            <AddValue />
            </div>
            <div>
                
        {values.map((value) => {
            return <Valuetaken key={value._id} value={value} />
        })}
    </div>
    </>
    )
}

export default Values