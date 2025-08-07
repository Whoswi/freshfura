import styled from "styled-components";

const Footer = () => {

    const StyledFooter = styled.footer`
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 60px 80px;
       
        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 16px;
            padding: 40px 20px;
        }
    `;

    const StyledSpan = styled.span`
        color:rgb(248, 3, 3);
    `;

    return (
    <StyledFooter id="contact">
        <p>Telefon: <StyledSpan>570 802 623</StyledSpan></p>
        <p>Email: <StyledSpan>fresh.fura7@gmail.com</StyledSpan></p>
        <p>Adres: <StyledSpan>Luboń k/ Poznania</StyledSpan></p>
        <p><StyledSpan>&copy;2025 FreshFura. Wszelkie prawa zastrzeżone.</StyledSpan></p>
    </StyledFooter>
    )
}
export default Footer;