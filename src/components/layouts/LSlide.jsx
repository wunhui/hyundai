import '@/assets/scss/layouts/slide.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { useState } from 'react';
import { useEffect } from 'react';

const LSlide = () => {
  const slides = [
    {
      id: 0,
      img: '/image/top_slide1.png'
    },
    {
      id: 1,
      img: '/image/top_slide2.png'
    },
    {
      id: 2,
      img: '/image/top_slide3.jpg'
    },
    {
      id: 3,
      img: '/image/top_slide4.jpg'
    }
  ]
  const [isPlaying, setIsPlaying] = useState(true);
  const [swiper, setSwiper] = useState(null);

  const togglePlay = () => {
    if (swiper) {
      if (!isPlaying) {
        swiper.autoplay.start();
        setIsPlaying(true)
      } else {
        swiper.autoplay.stop();
        setIsPlaying(false)
      }
    }
  };

  const [isLoaing, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  })
  return (
    <div className='main-top'>
      {
        isLoaing ? <div className='visual'>
          <img src="/image/top_slide1.png" alt="" />
        </div>
        :  <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={true}
        pagination={{
          type: 'progressbar',
        }}
        className='mySwiper'
        onSwiper={(s) => setSwiper(s)}
      >
          {slides.map((el) => (
            <SwiperSlide key={el.id}>
              <img src={el.img} />
            </SwiperSlide>
          ))}
        <button onClick={togglePlay} className='button-stop'>
          <i className={isPlaying ? 'ico-stop' : 'ico-start'}/>
        </button>
      </Swiper>
      }
      <div className="slide-banner">
        <img src="https://www.ehyundai.com/attachfiles/portal/20230828101621542.png" alt="" />
      </div>
    </div>
  )
}

export default LSlide