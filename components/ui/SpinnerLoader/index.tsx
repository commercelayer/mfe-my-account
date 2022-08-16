import { Wrapper, Spinner } from "./styled"

const SpinnerLoader: React.FC = () => {
  return (
    <Wrapper>
      <Spinner sizepx={100} color="gray">
        <span className="spinner-inner-1"></span>
        <span className="spinner-inner-2"></span>
        <span className="spinner-inner-3"></span>
      </Spinner>
    </Wrapper>
  )
}

export default SpinnerLoader
