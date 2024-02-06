import {Avatar, Dropdown, Navbar, Text} from '@nextui-org/react';
import React from 'react';
import {DarkModeSwitch} from './darkmodeswitch';

export const UserDropdown = () => {
   
   return (
      <Dropdown placement="bottom-right">
         <Navbar.Item>
            <Dropdown.Trigger>
               <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="https://cdn.vectorstock.com/i/1000x1000/82/06/avatar-of-a-japanese-character-vector-46438206.webp"
               />
            </Dropdown.Trigger>
         </Navbar.Item>
         <Dropdown.Menu
            aria-label="User menu actions"
            onAction={(actionKey) => {
               console.log({actionKey});
               if (actionKey === 'logout') {
                  window.location.href = '/'; // 将页面重定向到首页

               }
            }}
         >

            <Dropdown.Item key="logout" withDivider color="error">
               ログアウト
            </Dropdown.Item>
            <Dropdown.Item key="switch" withDivider>
               <DarkModeSwitch />
            </Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown>
   );
};
