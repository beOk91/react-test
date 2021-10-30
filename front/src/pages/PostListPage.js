import React from 'react';
import FooterContainer from '../containers/common/FooterContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import styled from 'styled-components';

const HeaderMyWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 3rem;
  alignitems: 'center';
`;

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <HeaderMyWrapper>
        안녕하세요. CJ OLIVENETWORKS 일정관리 페이지입니다.
      </HeaderMyWrapper>
      <PostListContainer />
      <PaginationContainer />
      <FooterContainer />
    </>
  );
};

export default PostListPage;
