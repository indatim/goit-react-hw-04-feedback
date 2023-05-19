import styled from '@emotion/styled';

export const FeedbackContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
`;

export const FeedbackButton = styled.button`
  padding: 10px;
  font-size: 16px;
  text-transform: capitalize;
  border: none;
  border-radius: 5px;
  &:hover,
  &:focus {
    background-color: #8a5dfc;
  }
`;