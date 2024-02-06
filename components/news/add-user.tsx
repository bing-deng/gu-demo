import {Button, Divider, Input, Modal, Text} from '@nextui-org/react';
import React from 'react';
import {Flex} from '../styles/flex';
import { Textarea } from '@nextui-org/react';

export const AddUser = () => {
   const [visible, setVisible] = React.useState(false);
   const handler = () => setVisible(true);

   const closeHandler = () => {
      setVisible(false);
      console.log('closed');
   };
   const [title, setTitle] = React.useState('');
   const [content, setContent] = React.useState('');
   const [titleValid, setTitleValid] = React.useState(true); // 默认为true，表示没有错误
   const [contentValid, setContentValid] = React.useState(true);

   
    
   const submitNews = async () => {
      // 检查字段是否为空
      const isTitleValid = title.trim() !== '';
      const isContentValid = content.trim() !== '';
   
      // 更新验证状态
      setTitleValid(isTitleValid);
      setContentValid(isContentValid);
   
      // 如果任何字段无效，停止提交
      if (!isTitleValid || !isContentValid) {
         console.error('Validation failed');
         setTitleValid(false);
         setContentValid(false);
         return;
         }

      try {
        const response = await fetch("https://demo.grandchallenge.co.jp/news", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: title,
            content: content,
          }),
        });
        console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        // 请求成功，关闭模态窗口
        console.log('News submitted successfully');
        setVisible(false);
        window.location.reload();

        // 通知列表刷新数据
        // 这里的实现取决于你的应用架构
        // 例如，你可以调用父组件传递的回调函数，或使用全局状态管理工具触发数据刷新
    
      } catch (error) {
        console.error('Failed to submit news:', error);
      }
    };
    
   return (
      <div>
         <Button auto onClick={handler}>
         ニュース登録
         </Button>
         <Modal
            closeButton
            aria-labelledby="modal-title"
            width="600px"
            open={visible}
            onClose={closeHandler}
         >
            <Modal.Header css={{justifyContent: 'start'}}>
               <Text id="modal-title" h4>
               ニュース登録
               </Text>
            </Modal.Header>
            <Divider css={{my: '$5'}} />
            <Modal.Body css={{py: '$10'}}>
               <Flex
                  direction={'column'}
                  css={{
                     'flexWrap': 'wrap',
                     'gap': '$8',
                     '@lg': {flexWrap: 'nowrap', gap: '$12'},
                  }}
               >
                  <Flex
                     css={{
                        'gap': '$10',
                        'flexWrap': 'wrap',
                        '@lg': {flexWrap: 'nowrap'},
                     }}
                  >
                    <Input
                     label="ニュースの概要"
                     bordered
                     clearable
                     fullWidth
                     size="lg"
                     value={title}
                     css={{ borderColor: titleValid ? undefined : '$red600' }} // 如果titleValid为false，则显示红色边框

                     onChange={(e) => setTitle(e.target.value)}
                     />
                  
                  </Flex>

                  <Flex
                     css={{
                        'gap': '$10',
                        'flexWrap': 'wrap',
                        '@lg': {flexWrap: 'nowrap'},
                     }}
                  >
                <Textarea
                  label="詳細情報"
                  bordered
                  fullWidth
                  size="lg"
                  value={content}
                  css={{ borderColor: contentValid ? undefined : '$red600' }} // 如果contentValid为false，则显示红色边框

                  onChange={(e) => setContent(e.target.value)}
                  />
                  </Flex>
               </Flex>
            </Modal.Body>
            <Divider css={{my: '$5'}} />
            <Modal.Footer>
               <Button auto onClick={submitNews}>
                 登録
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
};
