import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='year'>{new Date().getFullYear()}</div>
        <p> © Copyright</p>
        <div className='repo'>Repo</div>
      </div>
    </div>
  )
}

export default Footer
