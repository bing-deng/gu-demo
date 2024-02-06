import {Table} from '@nextui-org/react';

import {Box} from '../styles/box';
import {columns, users_news} from './data-news';
import {RenderCellNews} from './render-cell-news';
import { Input, Button } from '@nextui-org/react';
import React, { useState } from 'react';
import {Flex} from '../styles/flex';
import {AddUser} from '../accounts/add-user';
import {Spacer} from "@nextui-org/react";

export const TableWrapperNews = () => {

     // 搜索框的状态
  const [searchTerm, setSearchTerm] = useState('');
   // 过滤后的用户列表
   const [filteredUsers, setFilteredUsers] = useState(users_news);

     // 搜索用户的函数
  const handleSearch = (event: any) => {
   const value = event.target.value.toLowerCase();
   
   setSearchTerm(value);
   // || user.role.toLowerCase().includes(value)
   const filtered = users_news.filter(user => user.name.toLowerCase().includes(value) || user.phone.toLowerCase().includes(value) );

   console.log("filtered",filtered);
   setFilteredUsers(filtered);
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