import '@scss/main/LocalShop.scss'

const LocalShop = () => {
  return (
    <div className="l-local-shop section-top">
      <div className="inner">
        <h3><span>더현대 서울</span><i className='icon-arrowDown'/></h3>
        <div className="local-shop-wrap">
          <div className="list-item info">
            <div className="img-box">
              <img src="	https://www.ehyundai.com/images/webhome2/main/branch/img_pc_branch_main_B00140000.jpg" alt="" />
              <button className='button'>
                <span>지점안내 바로가기</span>
                <i className='ico-arrowR'/>
              </button>
            </div>
            <div className="content">
              <div className="content-box">
                <div className="content-title">
                  <strong className='text-shadow'>SEOUL</strong>
                  <strong className='title'>THE HYUNDAI</strong>
                </div>
                <div className="content-list">
                  <div className="today">
                    <strong>오늘 영업시간 10:30 ~ 20:30</strong>
                  </div>
                  <ul className='list-wrap'>
                    <li className='list-bullet'>식당가 <strong>10:30 ~ 22:00</strong></li>
                    <li className='list-bullet'>대표전화 <strong>20-767-2233</strong></li>
                    <li className='list-bullet full'>식당가 <strong>8.7(월)</strong></li>
                  </ul>
                  <ul className='list-wrap icon-list-wrap'>
                    <li className='list-icon'><i className='ico ico-floor'/><strong>층별안내</strong></li>
                    <li className='list-icon'><i className='ico ico-food'/><strong>식당가</strong></li>
                    <li className='list-icon'><i className='ico ico-parking'/><strong>위치/주차</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="list-item news">
            <div className="content">
              <div className="content-box"> 
                <p className="content-title">놓치면 안 되는<br/>쇼핑 뉴스</p>
                <div className="button-wrap">
                  <button className="button">
                    <span>더보기</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="img-box">
              <div className="img-list">
                <img src="https://imgprism.ehyundai.com/evntCrdInf/imgPath2/202307/30/612cbad1-27ad-4f09-8831-ed7d9526f4b7.jpg" alt="" />
                <div className="item-content">
                  <div className="item-content_text">
                    <p className='item-content-title'>[NEW OPEN] A.P.C 골프</p>
                  </div>
                </div>
              </div>
              <div className="img-list">
                <img src="https://imgprism.ehyundai.com/evntCrdInf/imgPath2/202308/17/08e25933-dbd0-48ba-a5a0-896363145000.jpg" alt="" />
                <div className="item-content">
                  <div className="item-content_text">
                    <p className='item-content-title'>[NEW OPEN] 무스너클</p>
                    <p className='item-content-desc'>08.25(금)</p>
                  </div>
                </div>
              </div>
              <div className="img-list">
                <img src="https://imgprism.ehyundai.com/evntCrdInf/imgPath2/202308/18/d43a36b3-5adf-4a9f-b780-ba5bf1d680dd.jpg" alt="" />
                <div className="item-content">
                  <div className="item-content_text">
                    <p className='item-content-title'>[NEW OPEN] ORR 오르</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LocalShop