import React from 'react';
import BaseSidebarItem from './SidebarItem';
import { StyledSidebarType } from './types';
import { StyledBaseComponentType } from 'components/BaseComponent/types';
import theme, { styled } from 'theme/styled-components';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

type BaseSidebarType = React.ComponentProps<'div'> &
  StyledSidebarType &
  StyledBaseComponentType & { type?: any; ref?: any };

const StyledSidebarWrapper = styled.div<{ collapsed?: boolean; mobile?: boolean }>`
  width: ${({ collapsed }) => (collapsed ? '56px' : '240px')};
  height: ${theme.constant.bodyHeight};
  top: 0;
  z-index: 100;
  padding: 12px 0;
  background-color: ${theme.primary.default};
  display: flex;
  flex-direction: column;
  position: relative;
  transition: 200ms ease-in-out;
  opacity: ${({ mobile }) => (mobile ? 0 : 1)};
`;

const NavTop = styled.div`
  flex: 1;
  overflow: hidden;
  ::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 7px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 7px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.secondary.default};
  }
`;
const NavBottom = styled.div``;

const CondenseNavigationMenuItem = styled(BaseSidebarItem)`
  width: 100%;
  height: 40px;
  & svg {
    transition: 200ms;
  }
`;

const BaseSidebar: React.FC<BaseSidebarType> = (props) => {
  const history = useHistory();
  const { mobile, sidebarItems, collapsed, setCollapsed, active, setActive } = props;

  const NavigationMenuItem = styled.div<{ isOpen }>`
    width: 100%;
    display: flex;
    padding: 5px 12px;
    cursor: pointer;
  color:white;
    flex-direction: column;
    align-items: center;
    padding-left: ${collapsed ? `7px` : `10px`};
    border: none;
    border-radius: 6px;
    outline: none;
    transition: 300ms;
    text-decoration: none;
    }
  `;

  return (
    <StyledSidebarWrapper collapsed={collapsed} mobile={mobile}>
      <NavigationMenuItem>LOGO</NavigationMenuItem>
      <NavTop>
        {sidebarItems
          .filter((item) => item.location === 'top')
          .map((item) => (
            <BaseSidebarItem
              item={item}
              collapsed={collapsed}
              active={active}
              onClick={() => {
                setActive(item.path);
                history.push(item.path);
              }}
              history={history}
              setActive={setActive}
            />
          ))}
      </NavTop>
      <NavBottom>
        {sidebarItems
          .filter((item) => item.location === 'bottom')
          .map((item) => (
            <BaseSidebarItem item={item} collapsed={collapsed} />
          ))}
      </NavBottom>
      <CondenseNavigationMenuItem
        item={{ icon: collapsed ? <FaAngleRight /> : <FaAngleLeft /> }}
        collapsed={collapsed}
        onClick={() => setCollapsed(!collapsed)}
      />
    </StyledSidebarWrapper>
  );
};

export default BaseSidebar;
