# TTS

클라이언트에서 서버로 텍스트를 보내면 음성 데이터를 `/mp3/tt*.mps`에 저장합니다.

|기능|<center>URL</center>|메소드|Body|Return|
|:----:|:------|:-----:|:---:|:---:|
|TTS(Clover Premium Voice)|/tts|POST|JSON|JSON|


## Example

### Body
- 변환하고 싶은 텍스트를 보냅니다.

```json
{
    "text": "안녕하세요 오늘의 추천메뉴는 불고기 버거랑 슈슈 버거입니다"
}
```

### Return
- 변환된 mp3 파일의 주소를 return합니다.

```json
{
    "link": "https://9162eaa9.ngrok.io/mp3/tts1.mp3"
}
```