import '@scss/main/Brand.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import { useState } from 'react';
const Brand = () => {
  const fashion = [
    {
      id: 0,
      mainImg: '/image/brand_img1.jpg',
      title: 'FOURM',
      desc: '현대백화점과 한섬이 제안하는<br/>새롭고 감각적인 패션 편집숍',
      btnLabel: '구매하기',
      subImg: '/image/brand_img1-1.jpg',
      text: 'FOURM의<br/>최신 소식을<br/>만나보세요',
      subImg2: '/image/brand_img1-2.jpg',
      subImg3: '/image/brand_img1-3.jpg',
      subImg4: '/image/brand_img1-4.jpg'
    },
    {
      id: 1,
      mainImg: '/image/brand_img2.jpg',
      title: 'PEER',
      desc: 'MZ문화를 새롭게 발견하는<br/>스트리트 패션 & 컬쳐 편집숍',
      subImg: '/image/brand_img2-1.jpg',
      btnLabel: '구매하기',
      text: 'PEER의<br/>최신 소식을<br/>만나보세요',
      subImg2: '/image/brand_img2-2.jpg',
      subImg3: '/image/brand_img2-3.jpg',
      subImg4: '/image/brand_img2-4.jpg'
    },
    {
      id: 2,
      mainImg: '/image/brand_img3.jpg',
      title: 'LABELS',
      desc: '컨템포러리 브랜드의 시그니처 아이템을<br/>제안하는 트렌디 감성 수입 편집숍',
      subImg: '/image/brand_img3-1.jpg',
      btnLabel: '구매하기',
      text: 'LABELS의<br/>최신 소식을<br/>만나보세요',
      subImg2: '/image/brand_img3-2.jpg',
      subImg3: '/image/brand_img3-3.jpg',
      subImg4: '/image/brand_img3-4.jpg'
    },
    {
      id: 3,
      mainImg: '/image/brand_img4.jpg',
      title: 'Be CLEAN',
      desc: '친환경 제품과 인디뷰티 브랜드를<br/>큐레이션한 클린뷰티 전문 스토어',
      subImg: '/image/brand_img4-1.jpg',
      btnLabel: '구매하기',
      text: 'Be CLEAN의<br/>최신 소식을<br/>만나보세요',
      subImg2: '/image/brand_img4-2.jpg',
      subImg3: '/image/brand_img4-3.jpg',
      subImg4: '/image/brand_img4-4.jpg'
    }
  ]
  const living = [
    {
      id: 0,
      mainImg: '/image/living_img1.jpg',
      title: 'HBYG',
      desc: '다양한 리빙 아이템과 라이프스타일 트렌드를<br/>제안하는 리빙 라이프스타일 샵',
      subImg: '/image/living_img1-1.jpg',
      text: 'HBYG의<br/>최신 소식을<br/>만나보세요',
      btnLabel: '매장안내',
      subImg2: '/image/living_img1-2.jpg',
      subImg3: '/image/living_img1-3.jpg',
      subImg4: '/image/living_img1-4.jpg'
    },
    {
      id: 1,
      mainImg: '/image/living_img2.jpg',
      title: '위마켓',
      btnLabel: '매장안내',
      desc: '현대백화점이 직접 큐레이팅하는<br/>라이프스타일 마켓',
      subImg: '/image/living_img2-1.jpg',
      text: '위마켓의<br/>최신 소식을<br/>만나보세요',
      subImg2: '/image/living_img2-2.jpg',
      subImg3: '/image/living_img2-3.jpg',
      subImg4: '/image/living_img2-4.jpg'
    },
    {
      id: 2,
      mainImg: '/image/living_img3.jpg',
      title: '르쁠라 H',
      btnLabel: '매장안내',
      desc: '세계 각국의 Heritage 브랜드와<br/>트랜드 테이블웨어 브랜드를 큐레이션한 공간',
      subImg: '/image/living_img3-1.jpg',
      text: '르쁠라 H의<br/>최신 소식을<br/>만나보세요',
      subImg2: '/image/living_img3-2.jpg',
      subImg3: '/image/living_img3-3.jpg',
      subImg4: '/image/living_img3-4.jpg'
    }
  ]
  const food = [
    {
      id: 0,
      mainImg: '/image/food_img1.jpg',
      title: '명인명촌',
      desc: '전국에서 전통을 고수하는 80여명의 장인들의<br/>상품을 소개하는 프리미엄 전통 식품 브랜드',
      btnLabel: '구매하기',
      subImg: '/image/food_img1-1.jpg',
      text: '명인명촌의<br/>최신 소식을<br/>만나보세요',
      subImg2: '/image/food_img1-2.jpg',
      subImg3: '/image/food_img1-3.jpg',
      subImg4: '/image/food_img1-4.jpg'
    },
    {
      id: 1,
      mainImg: '/image/food_img2.jpg',
      title: '와인웍스',
      desc: '와인, 다이닝, 커뮤니티가 공존하는<br/>최대 규모의 와인 중심 복합 공간',
      subImg: '/image/food_img2-1.jpg',
      btnLabel: '구매하기',
      text: '와인웍스의<br/>최신 소식을<br/>만나보세요',
      subImg2: '/image/food_img2-2.jpg',
      subImg3: '/image/food_img2-3.jpg',
      subImg4: '/image/food_img2-4.jpg'
    },
    {
      id: 2,
      mainImg: '/image/food_img3.jpg',
      title: '원테이블',
      desc: '현대백화점이 만든 프리미엄<br/>가정 간편식 브랜드',
      subImg: '/image/food_img3-1.jpg',
      btnLabel: '구매하기',
      text: '원테이블의<br/>최신 소식을<br/>만나보세요',
      subImg2: '/image/food_img3-2.jpg',
      subImg3: '/image/food_img3-3.jpg',
      subImg4: '/image/food_img3-4.jpg'
    }
  ]
  const [active, setActive] = useState(0)

  const button = [
    {
      id: 1,
      label: '패션&뷰티',
      datas: fashion
    },
    {
      id: 2,
      label: '리빙&라이프스타일',
      datas: living
    },
    {
      id: 3,
      label: '현대식품관',
      datas: food
    }
  ]
  const [data, setData] = useState(fashion)

  return (
    <div className="l-brand">
      <div className="top">
        <h3>취향대로 살피는, Brand</h3>
        <ul className="button-wrap">
          {
            button.map((item, index) => {
              return (
                <li key={item.id}>
                  <button onClick={() => {setData(item.datas); setActive(index)}} className={active === index ? 'active' : ''}>{item.label}</button>
                </li>

              )
            })
          }
        </ul>
      </div>
      <Swiper
        modules={[Navigation]}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        slidesPerView={1}
        speed={500}
        loop={true}
        className="mySwiper"
      >
        {
          data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <ul>
                  <li className='main'>
                      <div className="img-wrap">
                        <img src={item.mainImg} alt="" />
                      </div>
                      <div className="text-wrap">
                        <p className='title'>{item.title}</p>
                        <p className='desc' dangerouslySetInnerHTML={{__html: item.desc}}/>
                      <div className="button-wrap">
                        <button>
                          {item.btnLabel}
                        </button>
                      </div>
                      </div>
                    </li>
                    <li className='sub'>
                      <div className="img-wrap">
                        <div className="img">
                          <img src={item.subImg} alt="" />
                        </div>
                        <div className="text">
                          <p dangerouslySetInnerHTML={{__html: item.text}} />
                        </div>
                      </div>
                    </li>
                    <li className='sub'>
                      <div className="img-list">
                        <div className="img">
                          <img src={item.subImg2} alt="" />
                        </div>
                        <div className="img">
                          <img src={item.subImg3} alt="" />
                        </div>
                        <div className="img">
                          <img src={item.subImg4} alt="" />
                        </div>
                      </div>
                    </li>
                  </ul>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default Brand