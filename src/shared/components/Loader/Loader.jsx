import { ThreeDots } from 'react-loader-spinner';

const Loader = props => {
  return (
    <ThreeDots
      width="100"
      radius="9"
      color="#ffbc33"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
      }}
      wrapperClassName=""
      visible={true}
      {...props}
    />
  );
};

export default Loader;
