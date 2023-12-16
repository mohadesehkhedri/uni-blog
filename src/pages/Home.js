import React from 'react';

//components
import HeroSection from 'src/components/HeroSection';
import AboutApp from 'src/components/AboutApp';
import AppFeatures from 'src/components/AppFeatures';
import CheckoutApp from 'src/components/CheckoutApp';
import AppUse from 'src/components/AppUse';
import AppTeam from 'src/components/AppTeam';
import AppCustomers from 'src/components/AppCustomers';
import RecentBlog from 'src/components/RecentBlog';
import FooteFooterBox from 'src/components/FooterBox';
import 'src/App.css';


function Home() {
  return (

    <div className="Home">
      <HeroSection />
      <AboutApp />
      <AppFeatures />
      <CheckoutApp />
      <AppUse />
      <AppTeam />
      <AppCustomers />
      <RecentBlog />
      <FooteFooterBox />
    </div>

  );
}

export default Home;
