import NavbarItem from './NavbarItem';
import { footerLinks } from '../utils/index';
import logo from '../assets/icon.png';

const FooterNav = ({ id, menu, title, data }) => (
  <div id={`brxe-${id[0]}`} className='brxe-block'>
    <div id={id[1]} className='brxe-text-basic'>
      {title}
    </div>
    <div id={`brxe-${id[2]}`} className='brxe-nav-menu'>
      <nav className='bricks-nav-menu-wrapper never'>
        <ul id={`menu-menu-footer-brxe-${menu}`} className='bricks-nav-menu'>
          {data.map((link, index) => (
            <NavbarItem key={link.title} index={index} {...link} />
          ))}
        </ul>
      </nav>
    </div>
  </div>
);

const Footer = () => {
  const { company, products, tuned } = footerLinks;
  return (
    <footer id='brx-footer'>
      <section id='brxe-fczqkj' className='brxe-section'>
        <div id='brxe-uvadjh' className='brxe-container'>
          {/* Logo */}
          <div id='brxe-fdwplh' className='brxe-block'>
            <a id='brxe-qkumnp' className='brxe-div' href='http://openai.com' target='_blank'>
              <img id='brxe-nkhgib' className='brxe-image css-filter size-full' src={logo} alt='' />
              <div id='brxe-gdidui' className='brxe-div'>
                <div id='brxe-gcvdwc' className='brxe-text-basic'>
                  Open{' '}
                  <span id='brxe-cbrhzw' className='brxe-text-basic rad-color'>
                    AI
                  </span>
                </div>
              </div>
            </a>
          </div>
          <FooterNav id={['hnfnrh', 'djmjoo', 'gzrroy']} menu='company' title='Company' data={company} />
          <FooterNav id={['doknxr', 'nucyxi', 'dylwoj']} menu='products' title='Products' data={products} />
          <FooterNav id={['iyxmln', 'nucyxi', 'dylwoj']} menu='tuned' title='Stay Tuned!' data={tuned} />
        </div>
      </section>
    </footer>
  );
};
export default Footer;
