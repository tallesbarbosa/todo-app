import styled from 'styled-components/native'

interface TitleProps {
  isCompleted: boolean
}

export const Container = styled.View`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray_500};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_400};
  padding: 12px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

export const Left = styled.View`
  gap: 12px;
  flex-direction: row;
  align-items: center;
  flex: 1;
`

export const DeleteButton = styled.TouchableOpacity`
  padding: 10px;
`

export const Title = styled.Text<TitleProps>`
  color: ${({ theme, isCompleted }) =>
    isCompleted ? theme.colors.gray_300 : theme.colors.gray_100};
  font-size: ${({ theme }) => theme.font.sizes.H6}px;
  line-height: ${({ theme }) => theme.font.lineHeight}px;
  text-decoration-line: ${({ isCompleted }) =>
    isCompleted ? 'line-through' : 'none'};
  flex-shrink: 1;
  flex-wrap: wrap;
`
