import '@scss/main/Shopping.scss'


const Shopping = () => {
  // const slideData = [
  //   {
  //     id: 1,
  //     tag: '신촌점',
  //     url: '/image/popup_img1.png',
  //     title: '디지털 오픈 스튜디오 신촌점',
  //     desc: '다양한 디지털 제품과 서비스를 보유한<br/>우수한 스타트업 기업의 제품을 체험해 보세요.',
  //     date: '8.25(금) ~ 9.20(수)'
  //   },
  //   {
  //     id: 2,
  //     tag: '',
  //     url: '/image/popup_img2.png',
  //     title: '서울패션위크 패션 & 아트 페어',
  //     desc: '디자이너 & 아트작가의 공동 작업으로 탄생한<br/>리미티드 상품을 만나보세요.',
  //     date: '09.01(금) ~ 10.01(일)'
  //   },
  //   {
  //     id: 3,
  //     tag: '판교점',
  //     url: '/image/popup_img3.png',
  //     title: '원신 팝업 스토어점',
  //     desc: '다양한 굿즈와 현장 이벤트,3가지 미니게임까지<br/>판교점에서 여정을 함께하세요!',
  //     date: '09.08(금) ~ 09.17(일)'
  //   },
  //   {
  //     id: 4,
  //     tag: '더현대 서울',
  //     url: '/image/popup_img4.png',
  //     title: 'ETCE 팝업스토어',
  //     desc: "50만 패션 유튜버 '짱구대디'와 함께 <br/>시대의 유스컬처 ETCE를 만나보세요!",
  //     date: '09.01(금) ~ 09.17(일)'
  //   },
  //   {
  //     id: 5,
  //     tag: '신촌점',
  //     url: '/image/popup_img1.png',
  //     title: '디지털 오픈 스튜디오 신촌점',
  //     desc: '다양한 디지털 제품과 서비스를 보유한<br/>우수한 스타트업 기업의 제품을 체험해 보세요.',
  //     date: '8.25(금) ~ 9.20(수)'
  //   },
  //   {
  //     id: 6,
  //     tag: '',
  //     url: '/image/popup_img2.png',
  //     title: '서울패션위크 패션 & 아트 페어',
  //     desc: '디자이너 & 아트작가의 공동 작업으로 탄생한<br/>리미티드 상품을 만나보세요.',
  //     date: '09.01(금) ~ 10.01(일)'
  //   },
  //   {
  //     id: 7,
  //     tag: '판교점',
  //     url: '/image/popup_img3.png',
  //     title: '원신 팝업 스토어점',
  //     desc: '다양한 굿즈와 현장 이벤트,3가지 미니게임까지<br/>판교점에서 여정을 함께하세요!',
  //     date: '09.08(금) ~ 09.17(일)'
  //   },
  //   {
  //     id: 8,
  //     tag: '더현대 서울',
  //     url: '/image/popup_img4.png',
  //     title: 'ETCE 팝업스토어',
  //     desc: "50만 패션 유튜버 '짱구대디'와 함께 <br/>시대의 유스컬처 ETCE를 만나보세요!",
  //     date: '09.01(금) ~ 09.17(일)'
  //   }
  // ]
  return (
    <div className="l-shopping">
      <h3>어디서나 즐기는, Online Shopping</h3>
      <ul>
        <li>
          <div className="img-wrap">
            <img src='/image/shopping_img1.png' alt="" />
          </div>
          <dl>
            <dt>현대식품관 투홈</dt>
            <dd className='desc'>온라인에서 만나는 현대 식품관</dd>
          </dl>
          <button>
            <i className='icon-arrowR'/>
          </button>
        </li>
        <li>
          <div className="img-wrap">
            <img src='/image/shopping_img2.png' alt="" />
          </div>
          <dl>
            <dt>더현대 닷컴</dt>
            <dd className='desc'>현대백화점 공식 온라인몰</dd>
          </dl>
          <button>
            <i className='icon-arrowR'/>
          </button>
        </li>
        <li>
          <div className="img-wrap">
            <img src='/image/shopping_img3.png' alt="" />
          </div>
          <dl>
            <dt>현대홈쇼핑 Hmall</dt>
            <dd className='desc'>백화점, 브랜드, 홈쇼핑을 한번에</dd>
          </dl>
          <button>
            <i className='icon-arrowR'/>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Shopping