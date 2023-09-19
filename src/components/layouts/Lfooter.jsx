import '@scss/layouts/footer.scss'

const Lheader = () => {
  return (
    <footer className="l-footer">
      <div className="footer-wrap">
        <div className="logo">
          <h1>logo</h1>
        </div>
        <div className="content">
          <div className='site-link'>
            <ul>
              <li>더현대닷컴</li>
              <li>현대Hmall</li>
              <li>현대식품관 투홈</li>
              <li>현대리바트몰</li>
              <li>현대어린이책미술관</li>
            </ul>
            <div className="dropdown">
              FAMILY SITE
            </div>
          </div>
          <div className="sub-link">
            <ul>
              <li>현대백화점 그룹</li>
              <li>이용약관</li>
              <li>공고사항</li>
              <li>개인정보처리방침</li>
              <li>윤리경영</li>
              <li>주요문의처</li>
              <li>사회공헌</li>
              <li>사이트맵</li>
            </ul>
            <ul>
              <li>유튜브</li>
              <li>블로그</li>
              <li>인스타그램</li>
              <li>포스트</li>
              <li>페이스북</li>
            </ul>
          </div>
          <div className="info">
            <div className="info-list">
              <ul>
                <li>주식회사 현대백화점 대표이사 : 장호진 외 2인</li>
                <li>사업자등록번호 : 211-87-21455 사업자등록확인</li>
                <li>통신판매업 신고 : 강남-01882</li>
              </ul>
              <ul>
              <li>개인정보관리책임 : 회원운영관리담당 장근혁</li>
                <li>서울시 강남구 테헤란로 98길 12</li>
                <li>현대백화점 대표전화 : 02. 549. 2233</li>
              </ul>
            </div>
            <div className="dropdown">
              언어선택
            </div>
          </div>
          <div className="copyright">
            <span>© Hyundai Department Store. All rights reserved.</span>
            <ul>
              <li><img src="/image/footer_certification_wa.png" alt="" /></li>
              <li><img src="/image/footer_certification_ccm.png" alt=""  /></li>
              <li><img src="/image/footer_CSR_logo.png" alt=""  /></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Lheader