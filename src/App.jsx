import '@/assets/scss/App.scss'
import Lheader from '@/components/layouts/Lheader'
import Lfooter from '@/components/layouts/Lfooter'
import LSlide from '@/components/layouts/LSlide'
import LocalShop from '@/components/main/LocalShop'
import Culture from '@/components/main/Culture'
import PopupStore from '@/components/main/PopupStore'
import Banner from '@/components/main/Banner'
import Shopping from '@/components/main/Shopping'
import Contents from '@/components/main/Contents'
import Brand from '@/components/main/Brand'

// import styled from "styled-components";

function App() {
  // const SlideDiv = styled.div`
  //   height: 800px;
  //   background: linear-gradient(122.64deg, #90e0ef -22.07%, #caf0f8 76.17%);
  //   margin: 10px auto;
  //   overflow: auto;
  // `;
  return (
    <div className='l-wrap'>
      <Lheader />
      <LSlide />
      <LocalShop />
      <Culture />
      <PopupStore />
      <Banner />
      <Shopping />
      <Contents />
      <Brand />
      <Lfooter />
    </div>
  )
}

export default App
