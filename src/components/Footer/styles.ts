import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  border-color: ${({ theme }) => theme.colors.border};
  display:block;
  float:left;
  margin-top:90px;
  > p {
    width: 90%;
    margin: 0 auto;
  }
`;
