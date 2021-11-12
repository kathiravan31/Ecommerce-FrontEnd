import logo from './logo.svg';
import './App.less';
import AppBar from './components/appBar';
// import Body from './components/body';
import ProductFeed from './components/productsFeed';
import NavBar from './components2/navBar';
import Body from './components2/body';

import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Banner from './components2/banner';
import SideBar from './components2/sideBar';
import { useState, useEffect } from 'react';
import SideBarMobile from './components2/sideBar-mobile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Pay from './test/pay';
import Success from './test/success';
import Home from './pages/home';
import ProductDetails from './pages/productDetails';
import history from './history';
import { Layout } from 'antd';
import Footer from './components2/Footer';
import Cart from './pages/cart';
import NabvBar2 from './components2/navBar2';


// const { Header, Content, Footer, Sider } = Layout;
const AuthRoute = ({component:Component, cart, ...rest}) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [mobileSideBar, setMobileSideBar] = useState(false);

  useEffect(()=>{
      const el = document.getElementById('body-container')
      var preScrollpos = el.scrollTop;
      el.onscroll = function () {
          var currentScrollPos = el.scrollTop;
          if(preScrollpos > currentScrollPos){
              document.getElementById('navbar').style.top = "0";
          }else{
              document.getElementById('navbar').style.top = '-145px'
          }
          preScrollpos = currentScrollPos;
      }
  },[])
  return (
    <Route {...rest}
      render={(props)=>{
        return (
          <div className="bg-gray-100" id="main">
            <div id = "body-container" style={{height:'100vh', overflowY:'scroll'}}>
              {cart == true ? 
                <NabvBar2/>
                :
                <NavBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} mobileSideBar={mobileSideBar} setMobileSideBar={setMobileSideBar}/>}
                {showSideBar && <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>}
                {mobileSideBar && <SideBarMobile mobileSideBar={mobileSideBar} setMobileSideBar={setMobileSideBar}/>}
              <Component {...props}/>
              {/*<Footer/>*/}
            </div>
          </div>
        )
      }}
    />
  )
}

function App() {

  return (
    <>
      {/*<AppBar/>
      <div>
        <Body/>
        <ProductFeed/>
      </div>*/}
      <Router history={history}>
        <Switch>
          {/*<Route exact path="/">
            {/*<Pay/>
            <Home/>
          </Route>*/}
          <AuthRoute exact path="/" component={Home}/>
          <AuthRoute exact path="/product/:id" component={ProductDetails}/>
          <AuthRoute exact path="/cart" component={Cart} cart={true}/>
          <Route exact path="/checkout" component={Pay}/>
          {/*<Route exact path="/product/:id">
            {/*<Success/>
            <ProductDetails/>
        </Route>*/}
        </Switch>
      </Router>
    </>
  );
}

export default App;
