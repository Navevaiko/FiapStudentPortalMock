import React, { Component } from "react";

import help from '../../media/icons/help.svg';
import star from '../../media/icons/star.svg';

import { 
  MainContainer, MenuContainer, MenuItem, IconContainer, Icons,
} from './styles';

export default class Menu extends Component {
  constructor() {
    super();

    this.state = {
      menu: [
        { key: 1, title: 'Aulas', selected: false },
        { key: 2, title: 'Serviços', selected: false },
        { key: 3, title: 'Benefícios', selected: false },
        { key: 4, title: 'Oriente-se', selected: false },
        { key: 5, title: 'Avisos', selected: false },
      ]
    };
  }

  selectItem = (key) => {
    const { menu } = this.state;
    menu.map(item => item.selected = item.key === key);

    this.setState({ menu });
  }

  render() {
    const { menu } = this.state;

    return(
      <MainContainer>
        <MenuContainer>

          { menu.map(item => 
            <MenuItem key={item.key} selected={item.selected} 
              onClick={() => this.selectItem(item.key)}> 
                { item.title } 
            </MenuItem>) 
          }
          
        </MenuContainer>

        <IconContainer>
          <Icons src={star} alt='Favoritos' />
          <Icons src={help} alt='Ajuda' />
        </IconContainer>

      </MainContainer>
    );
  }
}