import React from 'react';
import { useState } from 'react';
import { StyledNavbarType } from './types';
import { StyledBaseComponentType } from 'components/BaseComponent/types';
import Avatar from '../../components/Avatar/index';
import theme, { styled } from 'theme/styled-components';
import MenuItem from './MenuItem';

import { FiRadio } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsPlusCircle, BsThreeDotsVertical, BsArrowUpRight } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineEye, AiOutlineDelete } from 'react-icons/ai';
import { logout } from 'store/app/actions';

type BaseNavbarType = React.ComponentProps<'div'> &
  StyledNavbarType &
  StyledBaseComponentType & { type?: any; ref?: any };

const NavbarWrap = styled.div`
  // background: ${theme.primary.default};
  background: white;
  box-shadow: 0 2px 4px 0 rgba(121, 130, 145, 0.2);
  height: 56px;
  width: 100%;
  display: flex;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  @media (display-mode: standalone) {
    padding-top: env(safe-area-inset-top);
    height: calc(env(safe-area-inset-top) + 3.5rem);
  }
`;
const Menu = styled.div`
  background: white;
  position: absolute;
  top: 3rem;
  right: 1rem;
  z-index: 100000;
  padding: 0.2rem;
  width: 10rem;
  border-radius: 5px;
  transition: 0.5s;
  box-shadow: 0 2px 4px 0 rgba(121, 130, 145, 0.2);
  animation: animate 0.2s ease-in-out forwards;
  @keyframes animate {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;
const Logo = styled.img`
  width: 200px;
  height: 55px;
  z-index: 123;
`;
const TitleWrap = styled.div`
  flex: 1;
  padding: 0.75rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 50%;
    background-color: #0467a0;
    left: -50%;
    top: 0;
  }
`;
const Title = styled.div`
  // color: white;
  font-weight: bold;
  padding-left: 1rem;
`;
const Breadcrumbs = styled.div`
  display: flex;
  font-size: 0.75rem;
  font-weight: bold;
  // color: #8f97a6;
  align-items: center;
  margin-top: 0.125rem;
`;
const Breadcrumb = styled.div`
  margin-right: 0.25rem;
`;

const ActionsWrap = styled.div`
  padding: 0.5rem 1.5rem;
  display: flex;
  gap: 1.25rem;
  color: #565e61;
  justify-content: space-between;
  align-items: center;
`;

const BaseNavbar: React.FC<BaseNavbarType> = (props) => {
  const { onClick, title } = props;
  const [menu, setMenu] = useState(false);
  const [dots, setDots] = useState(false);
  const [notification, setNotification] = useState(false);
  const [avatar, setAvatar] = useState(false);

  const breadcrumbs = ['Settings', 'Users'];

  return (
    <NavbarWrap>
      <TitleWrap>
        <Title>
          {title}
          {/* <Breadcrumbs>
            {breadcrumbs.map((breadcrumb, index) => (
              <>
                <Breadcrumb>{breadcrumb}</Breadcrumb>
                {breadcrumbs.length !== index + 1 && <AiOutlineRight />}
              </>
            ))}
          </Breadcrumbs> */}
        </Title>
      </TitleWrap>
      <ActionsWrap>
        {/* <BsThreeDotsVertical
          onClick={() => {
            setMenu(false);
            setNotification(false);
            setAvatar(false);
            setDots((prev) => !prev);
          }}
        />
        {dots && (
          <Menu>
            <MenuItem icon={<AiOutlineEye />}>Preview</MenuItem>
            <MenuItem icon={<BsArrowUpRight />}>View Live</MenuItem>
            <MenuItem icon={<AiOutlineDelete />}>Delete</MenuItem>
          </Menu>
        )}
        {menu && (
          <Menu>
            <MenuItem icon={<FiRadio />}>Publish</MenuItem>
            <MenuItem icon={<BsPlusCircle />}>Publish and add new</MenuItem>
          </Menu>
        )} */}
        <IoMdNotificationsOutline
          id="notification"
          style={{ fontSize: '25px' }}
          onClick={() => {
            setMenu(false);
            setAvatar(false);
            setDots(false);
            setNotification((prev) => !prev);
          }}
        />
        {notification && (
          <Menu>
            <MenuItem>No New Notification</MenuItem>
          </Menu>
        )}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
          onClick={() => {
            setMenu(false);
            setNotification(false);
            setDots(false);
            setAvatar(!avatar);
          }}>
          <Avatar id="avatar" src="https://randomuser.me/api/portraits/men/1.jpg" />
          <div>John Doe</div>
        </div>

        {avatar && (
          <Menu onClick={logout}>
            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
          </Menu>
        )}
      </ActionsWrap>
    </NavbarWrap>
  );
};

export default BaseNavbar;
