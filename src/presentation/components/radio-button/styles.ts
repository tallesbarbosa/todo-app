import styled from 'styled-components/native'

interface ContainerProps {
  isChecked: boolean
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.purple_dark : theme.colors.gray_500};
  border-width: 1px;
  border-color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.purple_dark : theme.colors.blue};
`
