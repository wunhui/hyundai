import '@scss/main/Culture.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';

const Culture = () => {
  const cultureSlide = [
    {
      id: 1,
      tagName: '전시',
      imgUrl: 'https://www.ehyundai.com/html/main/20230823/img_con_culture_playtech_pc_20230823.png',
      title: '킨텍스점·PLAY&TECH',
      date: '08.18(금)~8.27(일)'
    },
    {
      id: 2,
      tagName: '전시',
      imgUrl: 'https://www.ehyundai.com/html/main/20230731/pc/img_con_culture_02.png',
      title: '미아점·미키 마우스 나우 앤 퓨처',
      date: '07.31(금)~8.31(일)'
    },
    {
      id: 3,
      tagName: '전시',
      imgUrl: 'https://www.ehyundai.com/html/main/20230703/web/images/img_main_culture_st.jpg',
      title: '무역센터점ㆍ스테판 비르헤네더 개인전',
      date: '07.01(토)-09.10(일)'
    },
    {
      id: 4,
      tagName: '전시',
      imgUrl: 'https://www.ehyundai.com/html/main/20230703/web/images/img_main_culture_ex.jpg',
      title: '판교점ㆍ존 클라센&맥 바넷',
      date: '04.25(화)-09.10(일)'
    },
    {
      id: 5,
      tagName: '전시',
      imgUrl: 'https://www.ehyundai.com/html/main/20230703/web/images/img_main_culture_the.jpg',
      title: '더현대 서울ㆍ뒤피:행복의 멜로디',
      date: '05.17(수)~09.06(수)'
    },
    {
      id: 6,
      tagName: 'CH1985ㆍ문화센터',
      imgUrl: 'https://www.ehyundai.com/html/main/20230721/web/images/img_con_culture_auturn.png',
      title: `문화센터 
      가을시즌 수강신청`
    },
    {
      id: 7,
      tagName: '전시',
      imgUrl: 'https://www.ehyundai.com/html/main/20230801/pc/img_con_culture_dear.png',
      title: '판교점 · DEAR EARTH : TIME WALKER',
      date: '08.04(금)-9.23(일)'
    },
    {
      id: 8,
      tagName: '전시',
      imgUrl: 'https://www.ehyundai.com/html/main/20230823/img_con_culture_playtech_pc_20230823.png',
      title: '킨텍스점·PLAY&TECH',
      date: '08.18(금)~8.27(일)'
    },
    {
      id: 9,
      tagName: '전시',
      imgUrl: 'https://www.ehyundai.com/html/main/20230731/pc/img_con_culture_02.png',
      title: '미아점·미키 마우스 나우 앤 퓨처',
      date: '07.31(금)~8.31(일)'
    },
    {
      id: 10,
      tagName: '전시',
      imgUrl: 'https://www.ehyundai.com/html/main/20230703/web/images/img_main_culture_st.jpg',
      title: '무역센터점ㆍ스테판 비르헤네더 개인전',
      date: '07.01(토)-09.10(일)'
    },
    {
      id: 11,
      tagName: '전시',
      imgUrl: 'https://www.ehyundai.com/html/main/20230703/web/images/img_main_culture_ex.jpg',
      title: '판교점ㆍ존 클라센&맥 바넷',
      date: '04.25(화)-09.10(일)'
    },
    {
      id: 12,
      tagName: '전시',
      imgUrl: 'https://www.ehyundai.com/html/main/20230703/web/images/img_main_culture_the.jpg',
      title: '더현대 서울ㆍ뒤피:행복의 멜로디',
      date: '05.17(수)~09.06(수)'
    },
    {
      id: 13,
      tagName: 'CH1985ㆍ문화센터',
      imgUrl: 'https://www.ehyundai.com/html/main/20230721/web/images/img_con_culture_auturn.png',
      title: `문화센터 
      가을시즌 수강신청`
    },
    {
      id: 14,
      tagName: '전시',
      imgUrl: 'https://www.ehyundai.com/html/main/20230801/pc/img_con_culture_dear.png',
      title: '판교점 · DEAR EARTH : TIME WALKER',
      date: '08.04(금)-9.23(일)'
    },
  ]
  return (
    <div className="l-culture section-top_lg">
      <h3>영감을 채워주는, Culture</h3>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        slidesPerView={'auto'}
        speed={500}
        centeredSlides={true}
        loop={true}
        loopedSlides={3}
        direction={'horizontal'}
        className="mySwiper"
      >
        {
          cultureSlide.map(el => (
            el.date ?
            <SwiperSlide key={el.id}>
              <div className='tag'><span>{el.tagName}</span></div>
                <img src={el.imgUrl} alt="" />
                <dl>
                  <dt>{el.title}</dt>
                  <dd>{el.date}</dd>
                </dl>
            </SwiperSlide> 
            :
            <SwiperSlide key={el.id}>
              <div className='tag'><span>{el.tagName}</span></div>
                <img src={el.imgUrl} alt="" />
                <dl>
                  <dt className='title_only'>{el.title}</dt>
                </dl>
            </SwiperSlide> 
          ))
        }
      </Swiper>
    </div>
  )
}

export default Culture