import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  overflow: hidden;
  min-width: 100vw;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const ChatArea = styled.div`
  flex: 1;
  background-image: url(https://wallpapercave.com/wp/wp3998720.jpg);
  background-size: 100%;
  overflow-y: scroll;
`;

export const WritingBox = styled.div`
  padding: 8px;
  background-color: #fff;
  display: flex;
`;

export const Input = styled.input`
  flex: 1;
  background-color: #f5f5f5;
  border: 1px solid #eee;
  border-radius: 4px;
  outline: none;
  padding-left: 12px;
`;

export const TextButton = styled.button`
  font-weight: 600;
  color: #212121;
  padding: 12px;
  background-color: #fff;
  border: none;
`;
