import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessageInputField = styled.input`
  width: 80%;
  padding: 8px;
`;

const InputButton = styled.button`
  padding: 8px 12px;
  margin-left: 8px;
`;

export const MessageInput = ({ input, setInput, sendMessage }) => {
  return (
    <Container>
      <MessageInputField
        style={{ width: "80%", padding: 8 }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <InputButton
        style={{ padding: "8px 12px", marginLeft: 8 }}
        onClick={sendMessage}
      >
        Send
      </InputButton>
    </Container>
  );
};
