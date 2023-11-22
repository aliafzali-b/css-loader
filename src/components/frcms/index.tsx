import React, {FC} from 'react';
import styles from './index.module.scss';
type props = {
  primary_color: string;
  secondary_color: string;
};
const index: FC<props> = (props) => {
  const {primary_color, secondary_color} = props;
  return (
    <span
      className={`${styles['loader']}`}
      style={{
        backgroundImage: `linear-gradient(${secondary_color} 16px, transparent 0) ,
  linear-gradient(${primary_color} 16px, transparent 0) ,
  linear-gradient(${primary_color} 16px, transparent 0) ,
  linear-gradient(${secondary_color} 16px, transparent 0)`,
      }}
    ></span>
  );
};
export default index;
