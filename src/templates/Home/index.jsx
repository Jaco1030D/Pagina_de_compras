import { LeftContainer, Navbar, RigthContainer } from '../../components';
import './styles.css';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <LeftContainer />
        <RigthContainer />
      </div>
    </div>
  );
}

export default Home;
