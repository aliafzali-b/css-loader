import React, {FC} from 'react';
type props = {
  template_name?: string;
  primary_color?: string;
  secondary_color?: string;
  full_width?: boolean;
  vertical_padding?: number;
  scale?: number;
};
const Loading: FC<props> = (props) => {
  let {template_name, primary_color, secondary_color, full_width, vertical_padding, scale} = props;
  if (!template_name) template_name = 'frcms';
  if (!primary_color) primary_color = '#FF3D00';
  if (!secondary_color) secondary_color = '#FFF';
  const componentPath = `./components/${template_name}/index.tsx`;
  let DynamicComponent;
  try {
    DynamicComponent = require(componentPath).default;
  } catch (error) {
    console.log('error', error);
  }
  if (!DynamicComponent) return null;
  return (
    <div>
      <DynamicComponent primary_color={primary_color} secondary_color={secondary_color} />
    </div>
  );
};
export default Loading;
