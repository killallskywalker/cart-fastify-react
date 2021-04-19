import React from 'react';

const Cart = (props) => {
    return ( 
        <div>
            <div>
                <div className="flex justify-between border-b-2 mb-2">
                    <div className="text-lg py-2">
                        <p>{props.title}</p>
                    </div>
                    <div className="text-lg py-2">
                        <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                            <button disabled={(props.total === 0)} className={`${(props.total === 0) ? "bg-gray-500" : "bg-pink-700 hover:bg-pink-800"} text-white font-bold py-1 px-1 rounded-full inline-flex items-center focus:outline-none`} onClick={props.deleteCart}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                                </svg>
                            </button>
                            <p> {props.total} </p>
                            <button  className="bg-pink-700 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center focus:outline-none" onClick={props.addCart}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;


    
                        
