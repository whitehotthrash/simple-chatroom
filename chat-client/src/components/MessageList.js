import styled from "@emotion/styled";

const MessageListContainer = styled.div`
  border: 1px solid #ccc;
  height: 300px;
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
      <h2>Chat Room</h2>
      <MessageListContainer>
        {messages.map((msg, idx) => (
          <MessageItem key={idx}>{msg}</MessageItem>
        ))}
      </MessageListContainer>
    </>
  );
};
