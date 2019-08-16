import styled from 'styled-components';
import globo from '../../media/globo.jpg';
import logout from '../../media/icons/logout.svg';

export const MainHolder = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: space-around;
  align-items: center;
  width:100%;
  height: 400px;
  background: url(${globo}) center / cover;
`;

export const HeaderMenu = styled.div`
  display:flex;
  width:90%;
  flex-direction:row;
  justify-content:space-between;
`;

export const FiapLogo = styled.img`
  width:125px;
  height:50px;
  fill:#fff;
`;

export const LogoutContainer = styled.div`
  display:flex;
  flex-direction:row;
  width:60px;
  height:50px;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  align-items:center;
  justify-content:space-between;
`;

export const LogoutButton = styled.div`
  width:16px;
  height:16px;
  background: url(${logout}) center / 100% 100% no-repeat;
`;

export const WelcomeText = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  color: #fff;
  height:110px;
  font-size:40px;
`;

export const SubWelcomeText = styled.h5`
  text-transform: uppercase;
  color: #fff8;
  font-size:18px;
`;
