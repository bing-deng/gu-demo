import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Input, Button, Container, Text } from '@nextui-org/react';
import {Spacer} from "@nextui-org/react";

export const TwoFactorAuthPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const router = useRouter();

  const handleVerification = () => {
    // 在这里处理手机号认证逻辑
    // 例如，验证手机号和验证码是否正确
    // 如果正确，可以调用router.push跳转到另一个页面，如 router.push('/dashboard');

    console.log(phoneNumber, verificationCode);
    // 假设验证成功
    router.push('/accounts');
  };

  return (
    <Container css={{ pt: '$20', height: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Spacer y={1}/>
      
      <Container css={{ marginTop: '$10', width: '320px', display: 'flex', flexDirection: 'column', gap: '$5' }}>
      <Text h6 css={{ textAlign: 'start' }}>二次認証</Text>
      <Input
          clearable
          bordered
          placeholder="認証コード"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}

        />
        
      <Spacer y={1}/>
      <Text h6 css={{ textAlign: 'start' }}>電話認証</Text>
      

      <Input
          clearable
          bordered
          placeholder="電話番号"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Spacer y={0.1}/>

        <Button auto shadow color="primary" onClick={handleVerification}>提交</Button>
      </Container>
    </Container>
  );
};
