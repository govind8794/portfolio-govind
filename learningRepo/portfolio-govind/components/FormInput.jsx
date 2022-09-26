import React from 'react'

const FormInput = ({mainClassName, title, inputType, Message, nameType}) => {
  return (
    <div className={`flex flex-col ${mainClassName}`}>
                <label className={`uppercase text-sm py-2`}>
                  {title}
                </label>
               { !Message  && <input type={inputType} name={nameType} className ='border-2 rounded-lg p-3 flex border-gray-300'/>}
                {Message && <textarea className='border-2 rounded-lg p-3 border-gray-300' name={nameType} rows={10}></textarea>}
              </div>
  )
}

export default FormInput