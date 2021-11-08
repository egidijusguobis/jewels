import Jewel from "./Jewel"

function JewelryList ({blings}) {
    
    return (
        <div className="jewelry__list">
            <div className="jewelry__list__bling__header">
                <h3>Product</h3>
                <h3>Quantity</h3>
                <h3>Price</h3>
                <h3>Total value</h3>
                <h3>In stock?</h3>
                <h3>Last order</h3>
            </div>
            {blings.map(bling => <Jewel key={bling.id} bling={bling}></Jewel>)}
        </div>
    )
}

export default JewelryList