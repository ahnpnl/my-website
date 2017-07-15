// @flow

import { clearFix, rem } from 'polished'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import CategoryNavigation from '../../../containers/CategoryNavigation'
import CategoryNavigationAndSearch from '../../../containers/CategoryNavigationAndSearch'
import SearchForm from '../../../containers/SearchForm'
import type { DeviceInfo } from '../../modules/deviceInfo'
import type { ShopData } from '../../../modules/shop'
import { base } from '../../../utils/style/branding'
import colors from '../../../utils/style/colors'
import { media, stepScale } from '../../../utils/style/mixins'
import { zIndex } from '../../../utils/style/settings'
import Row from '../../elements/Row/Row'
import Sprite from '../../atoms/Sprite/Sprite'
import Wrapper from '../../atoms/Wrapper/Wrapper'
import MainNavigation from '../../molecules/MainNavigation/MainNavigation'

type Arguments = {
  position?: 'fixed' | 'static',
  navigationMenuIsOpen?: boolean,
  deviceInfo: DeviceInfo,
  shop: ShopData
}

/**
 * Main Header, used on all 'pages' Contains the logo, the main search bar and housed the main navigation
 * The logo is embedded, the search and main navigation are taken in as children
 *
 * The three children are split off to be able to test them separately and in order to be able to make those components reusable
 */

const Header = ({ position = 'fixed', navigationMenuIsOpen = false, deviceInfo, shop }: Arguments) => {

  return (
    <ComponentWrapper position={position}>
      <Component>
        <StyledRow>
          <HeaderTop>
            <TopWrapper>
              <HeaderLogo>
                <LogoSprite name="KrampLogo" />
              </HeaderLogo>
              {!deviceInfo.deviceType.isSmall ? (
                <HeaderSearch>
                  <SearchForm />
                </HeaderSearch>
              ) : ''}
              <HeaderMainNavigation>
                <MainNavigation shop={shop} />
              </HeaderMainNavigation>
            </TopWrapper>
          </HeaderTop>
        </StyledRow>
        <StyledRow>
          <HeaderBottom>
            <BottomWrapper>
              {deviceInfo.deviceType.isSmall ? <CategoryNavigationAndSearch /> : <CategoryNavigation />}
            </BottomWrapper>
          </HeaderBottom>
        </StyledRow>
      </Component>

      {navigationMenuIsOpen && <NavigationMenuBackdrop />}
    </ComponentWrapper>
  )
}

export const ComponentWrapper = styled.div`
  ${ clearFix() };
  position: ${({ position }: { position: 'fixed' | 'static' }) => position};
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${ zIndex.fixedFloating };
`

const Component = styled.div`
  position: relative;
  width: 100%;
  z-index: ${ zIndex.hoverActiveFocus };
`
const StyledRow = styled(Row)`
  margin-bottom: 0;
`

const NavigationMenuBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: ${ zIndex.aboveGround };
`
NavigationMenuBackdrop.displayName = 'NavigationMenuBackdrop'

const HeaderTop = styled.div`
  height: ${rem('50px')};
  background-color: ${colors.brightRed};
  color: ${ colors.white };

  ${ media.mediumUp`
    height: ${ rem('70px')};
  ` }
`

const TopWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${stepScale('padding-left', rem('8px'), base.unit, base.unit)};
  ${stepScale('padding-right', rem('8px'), base.unit, base.unit)}
  height: 100%;
  
  .ie9 & {
    display: block;
  }
`

const LogoSprite = styled(Sprite)`
  width: ${rem('119px')};
  height: ${rem('18px')};

  ${ media.mediumUp `
    width: ${rem('173px')};
    height: ${rem('26px')};
  `}
  
  .ie9 & {
    display: inline-block;
    margin-top: ${ rem('22px') };
  }
`

const HeaderBottom = styled.div`
  background-color: ${colors.redBerry};
  color: ${colors.white};
  height: ${ rem('50px')};

  ${ media.mediumUp`
    height: auto;
  ` }
`

const BottomWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 ${rem('5px')};

  ${ media.mediumUp`
      padding: 0;
      justify-content: flex-start;
  ` }
  
  .ie9 & {
    display: block;
  }
`

const HeaderLogo = styled.div`
  display: flex;
  
  .ie9 & {
    width: 33%;
    float: left;
  }
  
  .ie10 & {
    flex: 1 1 auto;
  }
`

const HeaderSearch = styled.div`
  width: 100%;

  ${ media.mediumUp`
    width: ${ rem('250px')};
  ` }
  
  .ie9 & {
    float: left;
    
    ${ media.mediumUp`
      width: 33%;
    ` }
  }
  
  .ie10 & {
    flex: 0 0 250px;
  }
`

const HeaderMainNavigation = styled.div`
  .ie9 & {
    float: right;
  }
  
  .ie10 & {
    flex: 1 1 auto;
    justify-content: flex-end;
  }
`

Header.propTypes = {
  /** dynamic position, used for styleguide only */
  position: PropTypes.string,

  /** Whether or not the navigation menu is currently open. Used to show a backdrop. */
  navigationMenuIsOpen: PropTypes.bool,

  /**
   * Object contains the data of the shop
   */
  shop: PropTypes.object.isRequired
}

export default Header
