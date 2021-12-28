import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  color: white;
  font-family: ${({ theme }) => theme.fonts.roboto7};
`;

export const Avatar = styled.Image`
  width: 72px;
  height: 72px;
  margin-top: 24px;
`;
