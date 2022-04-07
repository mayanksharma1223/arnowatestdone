import React, { useContext } from 'react'
import {VictoryPie,VictoryBar} from 'victory'
import './valuetaken.css'
import valueContext from '../../context/values/valueContext';
const Valuetaken = (props) => {
  const context = useContext(valueContext);

  const { deleteValue } = context;
  const { value } = props;

  const deleted = () => {
    let confirmdelete = window.confirm("Do you really want to delete?")
    if (confirmdelete) {
      deleteValue(props.value._id);
    }
    else { }
  }
  const myData=[
    {x:"india",y:500},
    {x:"oman",y:200},
    {x:"us",y:400}
  ]
  return (
    <div>
      <div className="values">
        <p>India="{value.india}", Oman="{value.oman}", Us="{value.us}", Growth="{value.growth}%", Loss="{value.loss}%"</p>
        <div className="reset">
          <button onClick={deleted} className='btn btn-reset'>Reset</button>
        </div>
      </div>
      <div className="charts">
        <VictoryPie className='pie' data={myData}
        colorScale={["blue","yellow","red"]}
      radius={50}
    
        />
        <VictoryBar className='bar'
    style={{ data: { fill: "blue"} }}
    data={myData}
    // height={100}
  />
      </div>
      <div className='percentage'>
        <h1>{value.growth}%</h1>
        <h1>{value.loss}%</h1>
      </div>
    </div>
  )
}

export default Valuetaken