import './styles/App.scss';

import logo from './assets/logo.png';
import logoText from './assets/logo-text.png'


function App() {

  const menuItems = [
    {
      title:"Dashboard",
      svg:''
    },
    {
      title:"Cash Flow",
      svg:''
    },
    {
      title:"Investments",
      svg:''
    },
    {
      title:"Real Estate",
      svg:''
    },
    {
      title:"Insurance",
      svg:''
    },
    {
      title:"Legal Planning",
      svg:''
    },
    {
      title:"Tax Planning",
      svg:''
    },
    {
      title:"Goals",
      svg:''
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <div className='side-nav-header'>
          <img src={logo} alt="" className='logo'/>
          <img src={logoText} alt="" className='logo-text'/>
        </div>

        <nav className='side-nav'>
            {
              menuItems.map((item,i)=>{
                return (
                  <a href="#" key={i} className='side-nav-link'>
                  <div className='side-nav-title'>
                  <svg data-v-252e6f35="" id="Bashboard-01" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" className="menu-icons"><path data-v-252e6f35="" id="Path_12" data-name="Path 12" d="M13.859,1.156A1.156,1.156,0,0,0,12.707,0H1.156A1.156,1.156,0,0,0,0,1.156V12.707a1.156,1.156,0,0,0,1.156,1.152H12.707a1.156,1.156,0,0,0,1.152-1.152Z" transform="translate(0 0)"></path><path data-v-252e6f35="" id="Path_13" data-name="Path 13" d="M56.939,1.156A1.156,1.156,0,0,0,55.783,0H44.232A1.156,1.156,0,0,0,43.08,1.156V12.707a1.156,1.156,0,0,0,1.152,1.152H55.783a1.156,1.156,0,0,0,1.156-1.152Z" transform="translate(-26.939 0)"></path><path data-v-252e6f35="" id="Path_14" data-name="Path 14" d="M44.232,56.939H55.783a1.156,1.156,0,0,0,1.156-1.156V44.232a1.156,1.156,0,0,0-1.156-1.152H44.232a1.156,1.156,0,0,0-1.152,1.152V55.783a1.156,1.156,0,0,0,1.152,1.156Z" transform="translate(-26.939 -26.939)"></path><path data-v-252e6f35="" id="Path_15" data-name="Path 15" d="M12.707,43.08H1.156A1.156,1.156,0,0,0,0,44.232V55.783a1.156,1.156,0,0,0,1.156,1.156H12.707a1.156,1.156,0,0,0,1.152-1.156V44.232a1.156,1.156,0,0,0-1.152-1.152Z" transform="translate(0 -26.939)"></path></svg>
                  <p className='side-nav-label'>{item.title}</p>
                  </div>
                </a>
                )
              })
            }

        </nav>
      </header>
    </div>
  );
}

export default App;
