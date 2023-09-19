import '@scss/main/Contents.scss'
import Marquee from "react-fast-marquee";
const Shopping = () => {
  const slideData = [
    {
      id: 1,
      tag: '매거진',
      url: '/image/content_img1.png',
    },
    {
      id: 2,
      tag: '매거진',
      url: '/image/content_img2.png',
    },
    {
      id: 3,
      tag: '매거진',
      url: '/image/content_img3.jpg',
    }
  ]
  const slideData2 = [
    {
      id: 1,
      tag: '유튜브',
      url: '/image/content_img4.jpg',
    },
    {
      id: 2,
      tag: '블로그',
      url: '/image/content_img5.jpg',
    },
    {
      id: 3,
      tag: '매거진',
      url: '/image/content_img6.jpg',
    },
    {
      id: 4,
      tag: '유튜브',
      url: '/image/content_img7.png',
    },
    {
      id: 5,
      tag: '유튜브',
      url: '/image/content_img8.png',
    },
    {
      id: 6,
      tag: '유튜브',
      url: '/image/content_img9.png',
    }
  ]
  return (
    <div className="l-contents">
      <h3>어디서나 즐기는, Online Shopping</h3>
      <ul className='text-slide'>
        <Marquee className='contents-wrap' speed={50}>
          <li>
              #TREND NEWS
          </li>
          <li>
              #TREND NEWS
          </li>
          <li>
              #TREND NEWS
          </li>
          <li>
              #TREND NEWS
          </li>
          <li>
              #TREND NEWS
          </li>
          <li>
              #TREND NEWS
          </li>
          <li>
              #TREND NEWS
          </li>
          <li>
              #TREND NEWS
          </li>
          <li>
              #TREND NEWS
          </li>
        </Marquee>
      </ul>
      <div className="content-wrap">
        <h2>TREND NEWS</h2>
        <ul>
          <Marquee className='contents-wrap' autoFill={true} speed={100} pauseOnClick={true} direction={'up'}>
            {
              slideData.map((item) => {
                return (
                  <li className='img-wrap' key={item.id}>
                    <div className='tag'><span>{item.tag}</span></div>
                    <img src={item.url} alt="" />
                  </li>
                )
              })
            }
          </Marquee>
        </ul>
        <ul>
        <Marquee className='contents-wrap' autoFill={true} speed={100} pauseOnClick={true} direction={'down'}>
            {
              slideData2.map((item) => {
                return (
                  <li className='img-wrap' key={item.id}>
                    <div className='tag'><span>{item.tag}</span></div>
                    <img src={item.url} alt="" />
                  </li>
                )
              })
            }
          </Marquee>
        </ul>
      </div>
    </div>
  )
}

export default Shopping