import React from 'react'

import CustomButton from './CustomButton';

const AIPicker = ({prompt,setPrompt,generatingImg,handleSubmit}) => {

  return (
    <div className='aipicker-container'>
      <textarea
      placeholder='Ask AI to generate a design for you..'
      rows={5}
      value={prompt}
      onChange={(e)=> setPrompt(e.target.value)}
      className='aipicker-textarea'
      />
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <CustomButton
          type="outline"
          title="Generating the design..."
          customStyles="text-xs"
          />
        ) : (

          // Once you have purchased paid for the API key , generate one and uncomment the commented handleClick function
          <>
          <CustomButton
          type="outline"
          title="Generate Logo"
          handleClick={() => handleSubmit('logo')}
          // handleClick={handleButtonClick}
          customStyles="text-xs"
          />
          <CustomButton
          type="filled"
          title="Generate design"
          handleClick={() => handleSubmit('full')}
          // handleClick={handleButtonClick}
          customStyles="text-xs"
          />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker
