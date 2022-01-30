const Button = ({ color, text }) => {
    const onClick = (e) => {
        console.log('CLICK');
    }


  return (
    <button 
        onClick={onClick}
        style={{ backgroundColor: color }}
        className='btn'
    >
        {text}
    </button>
    )
}

export default Button;