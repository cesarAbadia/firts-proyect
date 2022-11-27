import React,{useState,useEffect} from 'react';

import Footer from "../../components/footer/Footer";

function Home() {

    const [scrollHeight,setScrollHeight] = useState(0);

  const handlreScroll=()=>{
    const position = window.pageYOffset;
    setScrollHeight(position);
  }
  useEffect(()=>{
    window.addEventListener("scroll", handlreScroll);

  },[scrollHeight] );

  return (
    <div className="App">
  
     <Footer />
    </div>
  );
}

export default Home