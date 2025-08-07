import styled from "styled-components";

const About = () => {

  const StyledAbout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:16px;
    padding: 60px 80px;
    align-items:center;
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
      <StyledAbout id="about">
          <div>
            <img src='auto2.png' alt='FreshFura Car Wash' />
          </div>

          <div>
            <h2>
              <StyledSpan>Fresh Fura</StyledSpan> powstała z pasji do czystości i dbałości o każdy detal. 
              Specjalizujemy się w <StyledSpan>profesjonalnym czyszczeniu tapicerki </StyledSpan>samochodowej 
              oraz kompleksowym detailingu wnętrz aut. Naszym celem jest przywracanie 
              świeżości, <StyledSpan>komfortu i estetyki</StyledSpan> każdemu pojazdowi, który trafia w nasze ręce.
              Działamy z pełnym zaangażowaniem, wykorzystując sprawdzone techniki  
              i <StyledSpan>wysokiej jakości środki czyszczące</StyledSpan>, które są bezpieczne zarówno dla 
              materiałów, jak i dla pasażerów.
            </h2>
          </div>

      </StyledAbout>
    );
};
export default About;