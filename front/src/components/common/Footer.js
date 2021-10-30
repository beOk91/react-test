import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const FootWrapper = styled(Responsive)`
  position: absolute;
  width: 100%;
  height: 70px;
  align-items: center;

  display: flex;
  flex-direction: column;
`;

const Footer = () => {
  return (
    <>
      <FootWrapper>
        <div>
          CJ OLIVENETWORKS 고범석
          <br />
          (주)사업자번호 : 104-81-36565 <br />
          대표 : 차인혁 주소 : 서울특별시 용산구 한강대로 366 트윈시티 10층
        </div>
      </FootWrapper>
    </>
  );
};

export default Footer;
