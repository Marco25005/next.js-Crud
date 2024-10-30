

export const Inputs_Labels = ({id, type, placeholder, textLabel}) => {
   
    return (
        <>
            <label htmlFor={id} className="block text-base mb-2">{textLabel}</label>
            <input type={type} id={id} className="border w-full text-base px-2 py-2 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder={placeholder}/>
        
        </>
  )
}
