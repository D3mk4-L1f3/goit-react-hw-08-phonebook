import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => (
  <ThreeCircles
    height="150"
    width="150"
    color="#808080"
    wrapperStyle={{
      position: 'absolute',
      top: '25%',
      left: 'calc(50% - 50px)',
    }}
    visible={true}
    ariaLabel="three-circles-rotating"
  />
);
