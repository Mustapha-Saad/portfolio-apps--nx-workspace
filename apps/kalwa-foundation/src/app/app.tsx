import HomePage from './home-page/home-page';
import NavigationBar from './navigation-bar/navigation-bar';
import TopHeader from './top-header/top-header';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function App() {
  return (
    <>
      <header id="header" className="header-section">
        <TopHeader></TopHeader>
        <NavigationBar></NavigationBar>
      </header>

      <div className="header-height"></div>

      <HomePage></HomePage>
    </>
  );
}

export default App;
