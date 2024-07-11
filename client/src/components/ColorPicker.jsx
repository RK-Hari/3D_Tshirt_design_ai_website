import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
      color={snap.color}
      disableAlpha
      presetColors={[
        "#FF6F61", // Coral
        "#6B5B95", // Purple Haze
        "#88B04B", // Greenery
        "#F7CAC9", // Pale Dogwood
        "#92A8D1", // Serenity
        "#955251", // Marsala
        "#B565A7", // Orchid
        "#009B77", // Teal
        "#DD4124", // Tangerine Tango
        "#D65076", // Raspberry Sorbet
        "#45B8AC", // Turquoise
        "#EFC050", // Mimosa
        "#5B5EA6", // Blue Iris
        "#9B2335", // Cabaret
        "#DFCFBE", // Sand
        "#55B4B0", // Limpet Shell
        "#E15D44", // Peach Echo
        "#7FCDCD", // Biscay Bay
        "#BC243C", // Red Pear
        "#C3447A"  // Pink Yarrow
      ]}
      onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker
