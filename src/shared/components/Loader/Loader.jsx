import { Triangle } from 'react-loader-spinner';

const Loader = props => {
  return (
    <Triangle
      height="80"
      width="80"
      color="#FFBC33;"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
      {...props}
    />
  );
};

export default Loader;
