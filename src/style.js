import styled from 'styled-components';

export const ContainerStyled = styled.div `
  height: 100%;
  font-family: 'Roboto', sans-serif;
  color: #FFF;

  #home {
   display: flex;
   width: 100%;
   padding: 50px;
   justify-content: center;
   text-align: center;
   flex-direction: column;
   flex-wrap: wrap;
   text-align: center;
  }
  .profileimg {
     border-radius: 50%;
     max-width: 230px;
  }

  h2 {
      color: #ababab;
  }

  h3 {
      font-size: 20px;
      color: #a3a3a3;
  }
  footer h2 {
    padding: 20px;
    font-size: 10px;
    text-align: center;
  }

`