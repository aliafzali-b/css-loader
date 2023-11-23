import React, {FC, Suspense, lazy} from 'react';
const TEMPLATES_NAMES = ['frcms', 'temp3'] as const;
type props = {
  template_name?: (typeof TEMPLATES_NAMES)[number];
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
  const componentPath = `./components/${template_name}`;
  let DynamicComponent;
  try {
    DynamicComponent = lazy(() => import(componentPath));
  } catch (error) {
    console.log('error', error);
  }
  if (!DynamicComponent) return null;
  return (
    <div className='react-css-loadings'>
      <Suspense fallback={null}>
        <DynamicComponent primary_color={primary_color} secondary_color={secondary_color} />
      </Suspense>
    </div>
  );
};
export default Loading;
