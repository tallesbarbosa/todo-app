import styled from 'styled-components/native'

export const Container = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray_300,
}))`
  flex: 1;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.gray_500};
  border-radius: 6px;
  padding: 16px;
  color: ${({ theme }) => theme.colors.gray_100};
  font-size: ${({ theme }) => theme.font.sizes.H5}px;
`
