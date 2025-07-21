import styled from 'styled-components';
import Logo from '../assets/logo1.jpg'

const Header = () => {

    const StyledHeader = styled.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 80px;
        font-size: 22px;
        z-index: 111;
        img {
            width: 100px;
            height: auto;
            border-radius:50%;
        }
        ul{
            list-style: none;
            display: flex;
            gap: 20px;            
            a{
                text-decoration: none;
                color:rgb(248, 3, 3);
                font-weight: bold;
            }
            a:hover{
                color: white;
            }
        }

        @media (max-width: 768px) {
            flex-direction: column;
            gap: 10px;
            padding: 20px;
            text-align:center;
            ul {
                flex-direction: column;
                align-items: center;
                gap: 8px;
            }
        }
    `;

    return (
        <StyledHeader>
            <img src={Logo} alt='FreshFura Logo' />
            <nav>
            <ul>
                <li><a href='#about'>O nas</a></li>
                <li><a href='#services'>Usługi</a></li>
                <li><a href='#contact'>Kontakt</a></li>
                <li><a href='#Gallery'>Galeria</a></li>
                <li><a href='https://www.facebook.com/profile.php?id=61553173574700'>facebook</a></li>
            </ul>
            </nav>
        </StyledHeader>
    )
};
export default Header;