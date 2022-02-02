import Logo from '../images/SimplifireLogo.png';

const Home = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px'}}>
          <img src={Logo} alt="Simplifire logo" width="200" height="200" />
        </div>
      );
};

export default Home;
