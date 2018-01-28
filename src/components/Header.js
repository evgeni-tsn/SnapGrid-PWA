import React, { Component } from 'react'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'

import MenuIcon from 'material-ui/svg-icons/navigation/menu'

const menuIcon = <IconButton><MenuIcon/></IconButton>

export default class Header extends Component {

  handleClick() {
    alert('onClick triggered on the title component')
  }

  render() {
    return (
      <AppBar
        title="selly"
        onRightIconButtonClick={this.handleClick}
        iconElementLeft={menuIcon}
        showMenuIconButton={false}
        style={styles.headerContainer}
        titleStyle={styles.titleStyle}
      />
    )
  }
}

const styles = {
  headerContainer: {
    position: 'fixed',
    width: '100%',
    height: 52,
    top: 0,
    overflow: 'hidden',
    backgroundColor: '#fafafa'
  },
  titleStyle: {
    fontFamily: 'Oxygen',
    textAlign: 'center',
    lineHeight: '46px'
  }
}
