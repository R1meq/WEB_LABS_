import React ,{useState,useEffect }from "react";
import {getShoesById} from "./api"

function Information(props) {
    const [currentCard,setCurrentCard] = useState([])
        
    useEffect(() => {
        console.log({props})
        getShoesById(props.id)
        .then(resp => {
            setCurrentCard(resp);
        })
    }, []);

    const [value,setVelue] = useState(1)
    
    function handleItems(event) {
        setVelue(event.target.value)
    }

    return (
        <main className="Information">
            <div className="main">
                <img src={currentCard.img_url} alt="img for camera" />
                <div className="textInformation">
                    <div className="textInformation--main">
                        <h1>{currentCard.title}</h1>
                        <span >{currentCard.description}</span>
                    </div>
                    <div className="InformationInput">
                        <div className="information_select-options">
                            <label>Enter a number of shoes</label>
                            <input type="number" id="numberInput" name="numberInput" min="1" max="100" onChange={handleItems} value={value} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="Navigation">
                <p>Price {currentCard.price}$</p>
                <div>
                    <button>Go Back</button>
                    <button 
                    style={{color: '#FFFFFF', background: '#424242'}}
                    >
                    Add to Cart
                    </button>
                </div>
            </div>

        </main>
    )
}

export default Information;