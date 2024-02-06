import {Col, Row, User, Text, Tooltip, Badge, Grid} from '@nextui-org/react';
import React from 'react';
import {DeleteIcon} from '../icons/table/delete-icon';
import {EditIcon} from '../icons/table/edit-icon';
import {EyeIcon} from '../icons/table/eye-icon';
import {users_news} from './data-news';
import {IconButton, StyledBadge} from './table.styled';
// import {Divider, Spacer} from "@nextui-org/react";

interface Props {
   user: typeof users_news[number];
   columnKey: string | React.Key;
}

export const RenderCellNews = ({user, columnKey}: Props) => {
   // 根据用户状态决定颜色
   const getColor = (status: string) => {
      switch (status) {
     case '支払済':
       return 'success';
     default:
       return 'warning';
   }
}
   // @ts-ignore
   const cellValue = user[columnKey];
   switch (columnKey) {
     
      case 'role':
         return (
            <Col>
               <Row>
                  <Text b size={14} css={{tt: 'capitalize'}}>
                     {cellValue}
                  </Text>
               </Row>
               <Row>
                  <Text
                     b
                     size={13}
                     css={{tt: 'capitalize', color: '$accents7'}}
                  >
                     {user.team}
                  </Text>
               </Row>
              

            </Col>
         );

      case 'actions':
         return (
            <Row
               justify="center"
               align="center"
               css={{'gap': '$8', '@md': {gap: 0}}}
            >
               <Col css={{d: 'flex'}}>
                  <Tooltip content="詳細">
                     <IconButton
                        onClick={() => console.log('View user', user.id)}
                     >
                        <EyeIcon size={20} fill="#979797" />
                     </IconButton>
                  </Tooltip>
               </Col>
               <Col css={{d: 'flex'}}>
                  <Tooltip content="ユーザーを編集">
                     <IconButton
                        onClick={() => console.log('Edit user', user.id)}
                     >
                        <EditIcon size={20} fill="#979797" />
                     </IconButton>
                  </Tooltip>
               </Col>
               <Col css={{d: 'flex'}}>
                  <Tooltip
                     content="ユーザーを削除"
                     color="error"
                     onClick={() => console.log('Delete user', user.id)}
                  >
                     <IconButton>
                        <DeleteIcon size={20} fill="#FF0080" />
                     </IconButton>
                  </Tooltip>
               </Col>
              
            </Row>
         );
      default:
         return cellValue;
   }
};
