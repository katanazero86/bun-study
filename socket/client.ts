// socket/client.ts

alert('채팅을 시작합니다!');
const ws  = new WebSocket('ws://localhost:5000/chat');
ws.addEventListener('open', e => {
    console.log('연결!');
    runChat();
});
ws.addEventListener('message', e => {
    alert(`> Server: ${e.data}`);
    runChat();
});
ws.addEventListener('close', e => {
    console.log('종료!');
});

const runChat = () => {
    const msg = prompt('> 메시지를 입력하세요.(종료: exit)');
    if(msg === 'exit') return ws.close(1000, 'close socket');
    ws.send(msg!)
};