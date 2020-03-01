# 음성 주문 키오스크 - Server

## 서버 환경

- OS : Windows 10 Home
- Node.js version : 12.16.1 LTS
- DB : mysql-server (Ubuntu)
- ngrok

## Node.js package
- express
    - middleware

 - nodemon

 - request, axois
    - NaverTTS 연동
    - axois는 테스트 실패

 - sequelize, mysql2
    - ORM

 - crypto-js
    - Naver Chatbot 연동 시 암호화 (필수)

## API Document

> Host는 ngrok를 사용하였기에 localhost.com:3000으로 가정하겠습니다.

|기능|<center>URL</center>|메소드|Body|Return|
|:----:|:------|:-----:|:---:|:---:|
|[유저 생성](https://github.com/Naver-AI-Burning-Day/server_kiosk/blob/master/Doc/UserCreate.md)|/first|GET|X|JSON|
|[챗봇에 메세지 전송](https://github.com/Naver-AI-Burning-Day/server_kiosk/blob/master/Doc/SendMessageToChatbot.md)|/send|POST|JSON|JSON|
|[TTS(Clover Premium Voice)](https://github.com/Naver-AI-Burning-Day/server_kiosk/blob/master/Doc/TTS.md)|/tts|POST|JSON|JSON|
|[주문내역 확인]()|/final|POST|JSON|JSON|
|[결제 동의]()|/final/check|POST|JSON|JSON|
