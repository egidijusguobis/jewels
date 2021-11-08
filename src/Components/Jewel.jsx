function Jewel ({bling}) {
    
    return (
        <div className="jewelry__list__bling">
            <div className="jewelry__list__bling__item">
                <span>{bling.product}</span>
                <span>{bling.quantity}</span>
                <span>{bling.price}</span>
                <span>yes or no</span>
                <span>{bling.in_stock}</span>
                <span>{bling.last_order.slice(0,10)}</span>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default Jewel