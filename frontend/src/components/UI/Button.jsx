import React from 'react'

function Button(props) {

return (
    <button 
        id={props.id} 
        name={props.name} 
        type={props.type || 'button'}
        onClick={props.onClick} 
        className={props.className || 'bg-indigo-500 px-5 py-2 rounded-full text-white hover:bg-indigo-700 cursor-pointer duration-200 mt-4'}
    >
        {props.children}
    </button>
)
}

export default Button