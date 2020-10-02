import styled from 'styled-components';

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  font-weight: 700;
  margin-top: 20px;
  color: #fff;
  background-color: #8d70fb;
  border-radius: 7px;
  height: 35px;
  width: 293px;
`;

export const LinkWrapper = styled.div`
  h3 {
    width: 287px;
    height: 45px;
    text-align: center;
    margin-top: 14px;
    font-size: 14px;
  }
`;

export const Error = styled.span`
  color: #f40909;
`;
