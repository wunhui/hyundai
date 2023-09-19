import '@scss/main/Banner.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';

const Banner = () => {
  const slideData = [
    {
      id: 1,
      url: '/image/banner_img1.jpg',
    },
    {
      id: 2,
      url: '/image/banner_img2.jpg',
    },
    {
      id: 3,
      url: '/image/banner_img1.jpg',
    },
    {
      id: 4,
      url: '/image/banner_img2.jpg',
    }
  ]
  return (
    <div className="l-banner">
      <Swiper
        modules={[Navigation]}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        slidesPerView={2}
        spaceBetween={9}
        speed={500}
        loop={true}
        className="mySwiper"
      >
        {
          slideData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="img-wrap">
                  <img src={item.url} alt="" />
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default Banner