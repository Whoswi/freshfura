import styled from "styled-components";

const Service = () => {
    
    const StyledService = styled.div`
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap:20px;
      text-align:center;
      align-items:center;
      z-index: 111;
      
      & > div{
        padding: 20px 120px;
        font-size: 21px;

        ul{
          list-style-type: none;
        }
        li{
          margin-top:20px;
          font-size: 23px;
        }
        img{
          height:400px;
        } 
      }


    @media (max-width: 768px) {
      grid-template-columns: 1fr;

      & > div {
        padding: 20px;

      img {
        width: 250px;
        height: auto;
      }}
    }`;

    const StyledSpan = styled.h1`
      color:rgb(248, 3, 3);
      font-weight:bold;
      padding-bottom: 20px;
    `;

    return (
        <StyledService id="services">
          
          <div>
            <StyledSpan>Nasze usługi obejmują: </StyledSpan>
            <ul>
              <li>Czyszczenie wnętrza (bez prania tapicerki)  180zł</li>
              <li>Profesionalne pranie tapicerki materiałowej  250zł - 450zł</li>
              <li>Profesionalne czyzczenie i konserwacja tapicerki skórzanej 280zł - 400zł</li>
              <li>Pełny pakiet detailingowy wnętrza 300zł - 700zł</li>
              <li>*cena zależy od wielkości zabrudzenia i wielkości pojazdu.</li>
            </ul>
          </div>

          <div>
            <img src='auto3.png' alt='FreshFura Car Wash' />
          </div>
        </StyledService>
    );

};

export default Service;