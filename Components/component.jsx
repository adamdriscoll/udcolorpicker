import React from 'react';
import { withComponentFeatures } from 'universal-dashboard'
import {
  AlphaPicker,
  BlockPicker,
  ChromePicker,
  CirclePicker,
  CompactPicker,
  GithubPicker,
  HuePicker,
  MaterialPicker,
  PhotoshopPicker,
  SketchPicker,
  SliderPicker,
  SwatchesPicker,
  TwitterPicker
} from 'react-color'

const UDComponent = props => {
  const onChange = val => {
    props.setState({ color: val })
    if (props.onChange) {
      props.onChange(val);
    }
  }

  switch (props.variant) {
    case "alpha":
      return <AlphaPicker {...props} onChangeComplete={onChange} />
    case "block":
      return <BlockPicker {...props} onChangeComplete={onChange} />
    case "chrome":
      return <ChromePicker {...props} onChangeComplete={onChange} />
    case "circle":
      return <CirclePicker {...props} onChangeComplete={onChange} />
    case "compact":
      return <CompactPicker {...props} onChangeComplete={onChange} />
    case "github":
      return <GithubPicker {...props} onChangeComplete={onChange} />
    case "hue":
      return <HuePicker {...props} onChangeComplete={onChange} />
    case "material":
      return <MaterialPicker {...props} onChangeComplete={onChange} />
    case "photoshop":
      return <PhotoshopPicker {...props} onChangeComplete={onChange} />
    case "sketch":
      return <SketchPicker {...props} onChangeComplete={onChange} />
    case "slider":
      return <SliderPicker {...props} onChangeComplete={onChange} />
    case "swatches":
      return <SwatchesPicker {...props} onChangeComplete={onChange} />
    case "twitter":
      return <TwitterPicker {...props} onChangeComplete={onChange} />
  }
}

export default withComponentFeatures(UDComponent)