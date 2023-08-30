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
const SidebarCorner = styled.div<{ collapsed }>`
  position: absolute;
  left: 232px;
  top: 0%;
  transition: 200ms ease-in-out;
  z-index: -500;
  &::before {
    content: '';
    z-index: 200;
    position: absolute;

    left: 8px;
    background-color: transparent;
    bottom: -50px;
    height: 50px;
    width: 25px;
    border-top-left-radius: 25px;
    box-shadow: 0 -25px 0 0 ${theme.primary.default};
  }

  ${({ collapsed }) => collapsed && `left:45px`}
`;

const BaseSidebar: React.FC<BaseSidebarType> = (props) => {
  const history = useHistory();
  const { mobile, sidebarItems, collapsed, setCollapsed, active, setActive } = props;

  return (
    <StyledSidebarWrapper collapsed={collapsed} mobile={mobile}>
      <SidebarCorner collapsed={collapsed} />
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
