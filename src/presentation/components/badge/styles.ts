import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 2px 10px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.gray_400};
`

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.gray_200};
  font-size: ${({ theme }) => theme.font.sizes.H6}px;
`
