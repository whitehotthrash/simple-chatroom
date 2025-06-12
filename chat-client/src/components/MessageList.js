import styled from "@emotion/styled";

const Title = styled.h2`
  display: flex;
  justify-content: center;
  color: white;
  background: #f8e42a;
  text-shadow: 1px 1px 2px black;
  margin: 0 35% 0 35%;
  border-radius: 25px 25px 0px 0px;
`;

const MessageListContainer = styled.div`
  background: white;
  border-radius: 25px;
  border: 3px solid #ccc;
  height: 400px;
  overflow-y: auto;
  padding: 10px;
  margin-bottom: 10px;
`;

const MessageItem = styled.div`
  margin: 4px 0;
`;

export const MessageList = ({ messages }) => {
  return (
    <>
      <Title>Internal Chat</Title>
      <MessageListContainer>
        {messages.map((msg, idx) => (
          <MessageItem key={idx}>{msg}</MessageItem>
        ))}
      </MessageListContainer>
    </>
  );
};
