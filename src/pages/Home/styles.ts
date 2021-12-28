import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.primary};
`;

export const Title = styled.Text`
  color: white;
`;

export const Avatar = styled.Image`
  width: 72px;
  height: 72px;
  margin-top: 24px;
`;
