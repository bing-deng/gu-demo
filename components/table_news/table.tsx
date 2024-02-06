import {Table} from '@nextui-org/react';

import {Box} from '../styles/box';
import {columns, users_news} from './data-news';
import {RenderCellNews} from './render-cell-news';
import { Input, Button } from '@nextui-org/react';
import React, { useState } from 'react';
import {Flex} from '../styles/flex';
import {AddUser} from '../news/add-user';
import {Spacer} from "@nextui-org/react";
import { useEffect } from 'react';

interface UserModel {
   [key: string]: any; // 使用索引签名允许任意属性
   title: string;
   content: string;
   time: string;
 }
export const TableWrapperNews = () => {

      const [searchTerm, setSearchTerm] = useState('');
      const [filteredUsers, setFilteredUsers] = useState(users_news);


      useEffect(() => {
         const fetchData = async () => {
            const response = await fetch('https://demo.grandchallenge.co.jp/newsList');
            const data = await response.json();
            console.log(data);
            // 假设返回的数据是一个数组
            setFilteredUsers(data);
         };

         fetchData().catch(console.error);
   }, []); // 空依赖数组意味着这个effect只在组件加载时运行一次

  

     // 搜索用户的函数
  const handleSearch = (event: any) => {
   const value = event.target.value.toLowerCase();
   
   setSearchTerm(value);
   // || user.role.toLowerCase().includes(value)
   // const filtered = users_news.filter(user => user.name.toLowerCase().includes(value) || user.phone.toLowerCase().includes(value) );

   // console.log("filtered",filtered);
   // setFilteredUsers(filtered);
 };

   return (
      <Box
         css={{
            '& .nextui-table-container': {
               boxShadow: 'none',
            },
         }}
      >
         <Flex
            css={{gap: '$8'}}
            align={'center'}
            justify={'between'}
            wrap={'wrap'}
         >
            <Flex
               css={{
                  'gap': '$6',
                  'flexWrap': 'wrap',
                  '@sm': {flexWrap: 'nowrap'},
               }}
               align={'center'}
            >
               {/* <Input　 clearable

                  css={{width: '100%', maxW: '410px'}}
                  onChange={handleSearch}
                  value={searchTerm}
                  placeholder="ユーザーの検索"
               /> */}
            </Flex>
            <Flex direction={'row'} css={{gap: '$6'}} wrap={'wrap'}>
               <AddUser />
               {/* <Button auto iconRight={<ExportIcon />}>
                  Export to CSV
               </Button> */}
            </Flex>
         </Flex>

         <Table
            aria-label="Example table with custom cells"
            css={{
               height: 'auto',
               minWidth: '100%',
               boxShadow: 'none',
               width: '100%',
               px: 0,
            }}
            // selectionMode="multiple"
         >
            <Table.Header columns={columns}>
               {(column) => (
                  <Table.Column
                     key={column.uid}
                     hideHeader={column.uid === 'actions'}
                     align={column.uid === 'actions' ? 'center' : 'start'}
                  >
                     {column.name}
                  </Table.Column>
               )}
            </Table.Header>
            <Table.Body items={filteredUsers}>
               {(item) => (
                  <Table.Row>
                     {(columnKey) => (
                        <Table.Cell>
                           {RenderCellNews({user: item, columnKey: columnKey})}
                           
                        </Table.Cell>
                     )}
                  </Table.Row>
               )}
            </Table.Body>
            <Table.Pagination
               shadow
               noMargin
               align="center"
               rowsPerPage={8}
               onPageChange={(page) => console.log({page})}
            />
         </Table>
      </Box>
   );
};
