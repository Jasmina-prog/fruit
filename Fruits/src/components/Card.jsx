import './Card.css'
import { useState } from 'react'


export function Fruit(props) {

    const [count, setCount] = useState(0)
    const [btnName, setBtnName] = useState('add')
    const handleClick = () =>{
        setCount(count + 1)
        setBtnName(count)
    }

   
    return(
        <div className="card">
            <div className="productImg">
                <img src= {props.data.img} width="100%" height="100%" alt=""/>
            </div>
            <div className="productDetails">
                <div className="product">
                    <h1>{props.data.title}</h1>
                    <button className='initbtn' onClick={handleClick}>{btnName}</button>
                  
                </div>
                <div className="details">
                    <div className="detail">
                        <h2>UOM</h2>
                        <h2>{props.data.uom}</h2>
                    </div>
                    <div className="detail">
                        <h2>Pack Size</h2>
                        <h2>{props.data.size}</h2>
                    </div>
                    <div className="detail">
                        <h2>Per Unit</h2>
                        <h2>{props.data.unit}</h2>
                    </div>
                    <div className="detail">
                        <h2>TOTAL</h2>
                        <h2>{props.data.total}</h2>
                    </div>
                </div>
            </div>
        </div>
    )

    
}
