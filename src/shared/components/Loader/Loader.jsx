import { RotatingLines } from 'react-loader-spinner';

const Loader = props => {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
      {...props}
    />
  );
};

export default Loader;
