import styles from './navigation-bar.module.scss';

/* eslint-disable-next-line */
export interface NavigationBarProps {}

export function NavigationBar(props: NavigationBarProps) {
  return (
    <nav className="bottom-header">
      <div className="container">
        <div className="bottom-content-wrap row">
          <div className="col-sm-4">
            <div className="site-branding">
              <a href="#">
                <img src="img/logo.png" alt="Brand" />
              </a>
            </div>
          </div>
          <div className="col-sm-8 text-right">
            <ul id="mainmenu" className="nav navbar-nav nav-menu">
              <li className="active">
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Causes</a>
              </li>
              <li>
                <a>Event</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
            <a href="#" className="default-btn">
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
