import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: pink;
  position: ;
  padding: 20px;
  height: 90%;
  width: 90%;
  margin-left: 10%;
  margin-right: 90%;
`;

const ChatOutputUserDiv = styled.div`
  margin: 10px;
  text-align: right;
`;

const ChatOutputLionDiv = styled.div`
  margin: 10px;
  text-align: left;
`;

const ChatOutputUser = styled.textarea`
  border-radius: 10px 10px 10px 10px;
  height: 100%;
  font-size: 2em;
  resize: none;
`;

const ChatOutputLion = styled.textarea`
  border-radius: 10px 10px 10px 10px;
  height: 100%;
  font-size: 2em;
  resize: none;
`;

const ChatInputDiv = styled.div`
  background-color: red;
  /* position: absolute; */
  text-align: center;
  bottom: 10%;
  height: 5%;
  width: 95%;
`;

const ChatInputText = styled.textarea`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  margin: 0px;
  width: 60%;
  height: 90%;
  font-size: 2em;
  vertical-align: middle;
  resize: none;
`;

const ChatInputSend = styled.button`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: 0px;
  height: 100%;
  font-size: 2em;
  vertical-align: middle;
`;

const Chat = ({
  message,
  _handleInputTextChange,
  _handleClickButtonSend,
  sendMessage,
}) => {
  return (
    <Container>
      {sendMessage && sendMessage.length > 0 && (
        <>
          {sendMessage.map((sendMessage) => (
            <>
              <ChatOutputUserDiv key={sendMessage.id}>
                <ChatOutputUser value={sendMessage.message} readOnly />
              </ChatOutputUserDiv>
              <ChatOutputLionDiv>
                <ChatOutputLion value="안녕하세요 라이언입니다." readOnly />
              </ChatOutputLionDiv>
            </>
          ))}
        </>
      )}
      <ChatInputDiv>
        <ChatInputText
          onChange={_handleInputTextChange}
          // type="text"
          value={message}
        />
        <ChatInputSend onClick={_handleClickButtonSend}>보내기</ChatInputSend>
      </ChatInputDiv>
    </Container>
  );
};

export default Chat;
