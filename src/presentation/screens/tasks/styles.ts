import styled from 'styled-components/native'

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  padding: 70px 0;
  background-color: ${({ theme }) => theme.colors.gray_700};
`

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_600};
`

export const Body = styled.View`
  padding: 20px 24px;
`

export const Top = styled.View`
  margin-top: -48px;
  gap: 4px;
  margin-bottom: 32px;
  flex-direction: row;
  align-items: center;
`

export const InputContainer = styled.View`
  flex: 1;
`

export const TasksList = styled.FlatList.attrs({
  contentContainerStyle: {
    gap: 8,
  },
})``
