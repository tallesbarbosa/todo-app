import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  padding: 12px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.blue_dark};
`
