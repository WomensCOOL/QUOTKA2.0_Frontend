import { ICNoriLogo } from '../asset/icon';
import ImgNoriLogo from '../asset/image/noriLogo.png';
import { Header } from '../components/Main';
import StyledForm from '../styles';

const Main = () => {
  return (
    <StyledForm>
      <form>
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Sign In</button>
      </form>
    </StyledForm>
  );
};

export default Main;
