import Jewel from "./Jewel"

function JewelryList ({blings}) {
    
    return (
        <div className="jewelry__list">
            {blings.map(bling => <Jewel key={bling.id} bling={bling}></Jewel>)}
        </div>
    )
}

export default JewelryList