
import React from 'react';
import { Input, Button, Container, Text } from '@nextui-org/react';
import {Spacer} from "@nextui-org/react";
import { useRouter } from 'next/router'; // 确保导入useRouter

export const LoginPage = () => {
  const router = useRouter(); // 正确使用useRouter钩子

  const handleLogin = () => {
    // 在这个函数中，我们将使用router.push来跳转到指定的路由
    router.push('/twoFactorAuth');
  };
  

   return (
    // <Container css={{ pt: '$20', height: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    //     <Text h1 css={{ textAlign: 'center' }}>従事者 </Text>
    //     <Container css={{ marginTop: '$10', width: '35%', display: 'flex', flexDirection: 'column', gap: '$5' }}>
    //       <Input clearable bordered labelPlaceholder="メールアドレス " />
    //       <Input
    //       clearable
    //       bordered
    //       labelPlaceholder="認証コード"
          
          

    //     />
    //       <Spacer y={1} />

    //       <Input.Password clearable bordered labelPlaceholder="パスワード" type="password" />
    //       <Spacer y={1} />

    //               <Button auto shadow color="primary" onClick={handleLogin}>ログイン</Button>

    //     </Container>
    //   </Container>
    <Container css={{ pt: '$20', height: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Spacer y={1}/>
      <Text h3 css={{ textAlign: 'center' }}>水道局従事者管理システム </Text>
      <Container css={{ marginTop: '$10', width: '320px', display: 'flex', flexDirection: 'column', gap: '$5' }}>
      <Input
          clearable
          bordered
          labelPlaceholder="メールアドレス"


        />
        
      <Spacer y={1}/>


      <Input
          clearable
          bordered
          labelPlaceholder="パスワード"


        />
              <Spacer y={1}/>
       <Button auto shadow color="primary" onClick={handleLogin}>ログイン</Button>

      </Container>
    </Container>
    );
};
