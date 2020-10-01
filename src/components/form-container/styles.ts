import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color:#fff;
  a {
    &:hover {
      cursor:pointer;
    }
  }
`;

export const BoxContent = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  width: 55%;
  margin: 15vh auto;
  height:553px;
  justify-self:center;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  
  @media (max-width:1368px) {
    width:60%;
  }

  @media (max-width: 1200px) { 
    width:75%;
  }

  @media (max-width: 992px) {
    width:93%;
    /* margin: 50px auto; */
  }

  @media (max-width: 768px) { 
    width:96%;
    flex-direction:column
   }
`;

export const FormContainer = styled.div`
  display:flex;
  flex-direction:column;
  background-color: #FFF;
  width:45%;
  height: 100%;
  justify-content: center;
  align-items: center;

    h1 {
    margin-bottom: 35px;
    }

   label {
     font-weight:700;
     font-size: 14px;
     margin-bottom:6px;
   }
   input {
    font-weight:700;
     background-color: #F4F4F6;
     border:none;
     padding:10px;
     border-radius:4px;
     margin-bottom:16px;
     &::placeholder {
      opacity:64%;
     }
   }

    @media (max-width: 768px) { 
    width:96%;
    h1 {
      margin-top:30px;
    }
   }
`

export const LogoContainer = styled.div`
  display:flex;
  background-color: var(--primary-dark);
  width:55%;
  height: 100%;
  justify-content: center;
    align-items: center;
    @media (max-width: 768px) { 
    width:96%;
        margin-top: 64px;
   }
   img {
     margin: 20px;
   }
`
