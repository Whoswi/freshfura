import styled from "styled-components";


const Hero = () => {

  const StyledHero = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    padding: 60px 200px;
    align-items: center;
    z-index: 111;

    & > div:nth-of-type(1) , div:nth-of-type(2){
      padding: 120px;
      text-align: center;
      font-size: 21px;
      
    } 

    img{
      height: 400px;
      border-radius:10%;
    }

  @media (max-width: 760px){
    grid-template-columns: 1fr;
    padding: 40px 20px;

    & > div:nth-of-type(1), div:nth-of-type(2) {
      padding: 40px 20px;
    }

    img {
      width: 250px;
      height: auto;
    }
  }
  
  `;

  const StyledSpan = styled.span`
    color:rgb(248, 3, 3);
    font-weight:bold;
  `;

    return(
      <StyledHero>
          <div>
            <img src='/auto1.png' alt='FreshFura Car Wash' />
          </div>

          <div>
            <h1>
              <StyledSpan>Zadbaj</StyledSpan> o wnętrze swojego auta z <StyledSpan>Fresh Fura</StyledSpan>!
            </h1>
          </div>

      </StyledHero>
    );
};
export default Hero;