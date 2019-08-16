import styled from "styled-components";

export const MainContainer = styled.div`
  display:flex;
  width: 100%;
  height: 65px;
  background-color: #E91C5D;
  align-items:center;
  justify-content:space-between;
`;

export const MenuContainer = styled.div`
  display:flex;
  width:700px;
  height:100%;
  margin:0 0 0 95px;
`;

export const MenuItem = styled.a`
  display: flex;
  width:auto;
  height:100%;
  padding: 0 25px;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  align-items:center;
  justify-content:center;
  transition: .4s;
  cursor: pointer;
  background-color: ${props => (props.selected)? '#FFFFFF' : '#E91C5D' || '#E91C5D'};
  color: ${props => (props.selected)? '#E91C5D' : '#FFFFFF' || '#FFFFFF'};;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
  width: 75px;
  height: 100%;
  margin:0 80px 0 0;
`;

export const Icons = styled.img`
  width: 25px;
  height: 25px;
`;
