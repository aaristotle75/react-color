import React from 'react'
import reactCSS from 'reactcss'

export const PhotoshopPreviews = ({ rgb, currentColor }) => {
  const styles = reactCSS({
    'default': {
      swatches: {
        border: '1px solid #B3B3B3',
        borderBottom: '1px solid #F0F0F0',
        marginBottom: '2px',
        marginTop: '1px',
      },
      new: {
        height: '34px',
        background: `rgb(${ rgb.r },${ rgb.g }, ${ rgb.b })`,
        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000',
      },
      current: {
        height: '34px',
        background: currentColor,
        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000',
      },
      label: {
        fontSize: '14px',
        color: '#000',
        textAlign: 'center',
      },
    },
  })

  return (
    <div>
      <div style={ styles.swatches } className='photoshop-picker-preview-group'>
        <div style={ styles.current } className='photoshop-picker-preview-button' />
        <div style={ styles.label } className='photoshop-picker-preview-label'>Current Color</div>
        <div style={ styles.new } className='photoshop-picker-preview-button' />
        <div style={ styles.label } className='photoshop-picker-preview-label'>New Color</div>
      </div>
    </div>
  )
}

export default PhotoshopPreviews
