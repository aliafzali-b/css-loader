import React, {FC} from 'react';
import styles from './index.module.scss';
type props = {
  width?: string | number;
  height?: string | number;
  primary_color?: string;
  secondary_color?: string;
  center?: boolean;
  vertical_padding?: number | string;
};
const LoadingType1: FC<props> = (props) => {
  const {primary_color, secondary_color, width, height, center, vertical_padding} = props;
  return (
    <div
      className={`${center ? styles.container : ''}`}
      style={
        vertical_padding ? {paddingTop: vertical_padding, paddingBottom: vertical_padding} : {}
      }
    >
      <span
        className={`${styles['loader']}`}
        style={{
          width: width || 48,
          height: height || 48,
          border: `5px solid ${primary_color || '#fff'}`,
          borderBottomColor: secondary_color || '#ff3d00',
        }}
      ></span>
    </div>
  );
};
export default LoadingType1;
