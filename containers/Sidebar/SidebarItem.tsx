import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronLeft } from 'react-icons/fa';
import theme, { styled } from 'theme/styled-components';
import { StyledSidebarItemType } from './types';

type BaseSidebarItemType = React.ComponentProps<'a'> & StyledSidebarItemType & { ref?: any };

const NavItemContents = styled.div<{ collapsed }>`
  display: flex;
  width: ${({ collapsed }) => (collapsed ? `auto` : '100%')};
  // width: 100%;
  height: 2.5rem;
  align-items: center;
  padding: 1.125rem;
  font-size: 1.25rem;
`;

const Label = styled.span`
  display: flex;
  flex: 1;
  overflow: hidden;
  font-size: 1rem;

  // font-weight: 600;
  transition: 200ms;
  margin-left: 1rem;
`;

const BaseSidebarItem: React.FC<BaseSidebarItemType> = (props) => {
  const { collapsed, active, item, history, setActive } = props;
  const [change, setChange] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    active == item.label ? setChange(true) : setChange(false);
  }, [active]);

  const NavigationMenuItem = styled.div<{ isOpen }>`
    width: 100%;
    display: flex;
    padding: 5px 12px;
    cursor: pointer;

    flex-direction: column;
    align-items: center;
    padding-left: ${collapsed ? `7px` : `10px`};
    // color: ${change ? `${theme.color.white}` : `${theme.color.white}`};
    color: ${theme.color.gray_700};
    border: none;
    // border-radius: 6px;
    outline: none;
    transition: 300ms;
    text-decoration: none;

    &:hover {
      background-color: ${theme.primary_light.default};
      color: white;
      ${collapsed &&
      item.label &&
      `::after {
          content: '${item.label || ''}';
          left:56px;
          font-size:15px;
          padding:4px;
          border-radius:4px;
          opacity:0.4;
          transition:0.5s;
          background:${theme.secondary.default};
          color:white;
          z-index:1000;
          transition: all 0.5s ease;
          position: absolute;
          pointer-events:none;
        }
    `};
    }
  `;

  return (
    <>
      {' '}
      <NavigationMenuItem {...props} isOpen={isOpen}>
        <NavItemContents collapsed={collapsed} onClick={() => setIsOpen((prev) => !prev)}>
          {item.icon}
          {item.label && !collapsed && <Label>{item.label}</Label>}
          {/* {!!(item.children && item.children.length) && (
            <> {isOpen ? <FaChevronDown /> : <FaChevronLeft />}</>
          )} */}
        </NavItemContents>
      </NavigationMenuItem>
      {isOpen &&
        !!(item.children && item.children.length) &&
        item.children.map((item) => (
          <div style={{ marginLeft: !collapsed && '2rem' }}>
            {' '}
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
          </div>
        ))}
    </>
  );
};

export default BaseSidebarItem;
