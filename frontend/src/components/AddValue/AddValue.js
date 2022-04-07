import React, { useContext, useState } from 'react'
import valueContext from '../../context/values/valueContext';
// import Values from '../Values/Values';

const AddValue = () => {
    const context = useContext(valueContext);
    const { addValue } = context;
    const [value, setValue] = useState({ india: "", oman: "", us: "",growth:"", loss:"" })
    const handleClick = (e) => {
        e.preventDefault();
        addValue(value.india, value.oman, value.us, value.growth,value.loss);
        setValue({ india: "", oman: "", us: "",growth:"", loss:""  })
    }
  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
}
  return (
    <div>
        <div className="input">
        <h3>Insert values</h3>
        <div >
          <form action="#" className='value-form'>
            <div className="form-label">
              <label htmlFor="india">India</label>
              <input onChange={onChange} value={value.india} required type="number" id='india' name='india' placeholder='Enter the value' />
            </div>
            <div className="form-label">
              <label htmlFor="oman">Oman</label>
              <input onChange={onChange} value={value.oman} required type="number" id='oman' name='oman' placeholder='Enter the value' />
            </div>
            <div className="form-label">
              <label htmlFor="us">US</label>
              <input onChange={onChange} value={value.us} required type="number" id='us' name='us' placeholder='Enter the value' />
            </div>
            <div className="form-label">
              <label htmlFor="growth">Growth percentage</label>
              <input onChange={onChange} value={value.growth} required type="number" id='growth' name='growth' placeholder='Enter the value' />
            </div>
            <div className="form-label">
              <label htmlFor="loss">Loss percentage</label>
              <input onChange={onChange} value={value.loss} required type="number" id='loss' name='loss' placeholder='Enter the value' />
            </div>
          
          <div className="button">

            <div className="add">
              <button type='submit' onClick={handleClick} className='btn btn-add'>Submit</button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddValue