import {Col, Row, User, Text, Tooltip, Badge, Grid} from '@nextui-org/react';
import React from 'react';
import {DeleteIcon} from '../icons/table/delete-icon';
import {EditIcon} from '../icons/table/edit-icon';
import {EyeIcon} from '../icons/table/eye-icon';
import {users_news} from './data-news';
import {IconButton, StyledBadge} from './table.styled';
// import {Divider, Spacer} from "@nextui-org/react";



interface UserModel {
   [key: string]: any; // 使用索引签名允许任意属性
   title: string;
   content: string;
   time: string;
 }
 

interface Props {
   user: UserModel;
   columnKey: string | React.Key;
   
}


export const RenderCellNews = ({user, columnKey}: Props) => {

   const deleteNews = async (newsId: string) => {
      try {
        const response = await fetch(`https://demo.grandchallenge.co.jp/news/${newsId}`, {
          method: 'DELETE',  // 使用DELETE方法
          // 这里可以添加任何需要的headers，例如Content-Type或Authorization
        });
        if (response.ok) {
          // 请求成功，重新加载页面
          console.log('News deleted successfully');
          window.location.reload();
        } else {
          // 处理错误情况（例如显示错误消息）
          console.error('Failed to delete news');
        }
      } catch (error) {
        // 捕获并处理网络错误
        console.error('Error deleting news:', error);
      }
    };

    
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
   const cellValue:string = user[columnKey];

   switch (columnKey) {
     
      case 'title':
         return (
            <Col>
               <Row>
                  <Text b size={14} css={{tt: 'capitalize'}}>

                     {cellValue.length > 50 ? cellValue.slice(0, 50) + '...' : cellValue}

                  </Text>
               </Row>
               <Row>
                  <Text
                     b
                     size={13}
                     css={{tt: 'capitalize', color: '$accents7'}}
                  >
                     {user.content.length > 50 ? user.content.slice(0, 50) + '...' : user.content}

                  </Text>
               </Row>
              

            </Col>
         );
         case 'time':
            return (
               <Col>
                  <Row>
                     <Text
                        b
                        size={13}
                        css={{tt: 'capitalize', color: '$accents7'}}
                     >
                        {cellValue}
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
               {/* <Col css={{d: 'flex'}}>
                  <Tooltip content="詳細">
                     <IconButton
                        onClick={() => console.log('View user', user.id)}
                     >
                        <EyeIcon size={20} fill="#979797" />
                     </IconButton>
                  </Tooltip>
               </Col>
               <Col css={{d: 'flex'}}>
                  <Tooltip content="ニュース編集">
                     <IconButton
                        onClick={() => console.log('Edit user', user.id)}
                     >
                        <EditIcon size={20} fill="#979797" />
                     </IconButton>
                  </Tooltip>
               </Col> */}
               <Col css={{d: 'flex'}}>
                  <Tooltip
                     content="ニュース削除"
                     color="error"
                     onClick={() => deleteNews(user.id)}  // 调用deleteNews函数，传入新闻的ID

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
