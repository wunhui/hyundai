import '@scss/layouts/header.scss'
import { useEffect } from 'react'
import { useState } from 'react'

const Lheader = () => {
  const [on, setOn] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { capture: true }); // 스크롤 이벤트 등록
    return () => {
      window.removeEventListener('scroll', handleScroll); 		// 스크롤 이벤트 제거
    };
  }, [])
  function handleScroll() {
    const scrollTop = window.scrollY;
    if(scrollTop > 50) {
      setOn(true)
    } else {
      setOn(false)
    }
  }
  return (
    <header className={`${"l-header"} ${on ? 'on' : ''}`}>
      <div className="header-wrap">
        <div className='content'>
          <div className="l-brand-select">
            <div className="brand-select">
              <div className="brand-select-wrap">
                <h1 className="logo">logo</h1>
                <button className="button"><i className='ico-arrowDown'/></button>
              </div>
              <ul className="optionList">
                <li className="optionItem">ENG</li>
                <li className="optionItem">中國語</li>
                <li className="optionItem">日本語</li>
              </ul>
            </div>
          </div>
          <nav className="l-nav">
            <ul className="gnb">
              <li className="gnb-list">지점안내</li>
              <li className="gnb-list">서비스·이벤트</li>
              <li className="gnb-list">브랜드</li>
              <li className="gnb-list">문화센터·전시·공연</li>
              <li className="gnb-list">카드·상품권·멤버십</li>
              <li className="gnb-list">ESG경영</li>
            </ul>
          </nav>
        </div>
        <div className='content'>
          <nav className="l-service-bar">
            <ul className="service-bar">
              <li className="service-bar-list">로그인</li>
              <li className="service-bar-list">투자정보</li>
              <li className="service-bar-list">현대백화점그룹</li>
            </ul>
          </nav>
          <div className="l-lang-select">
            <div className="lang-select">
              <button className="button"><i className='ico-lang'/></button>
              <ul className="optionList">
                <li className="optionItem">ENG</li>
                <li className="optionItem">中國語</li>
                <li className="optionItem">日本語</li>
              </ul>
            </div>
          </div>
          <div className="l-brand-search">
            <button className='brand-search'>
              <span>지점 정보 검색</span>
              <i className='ico-search'/>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Lheader