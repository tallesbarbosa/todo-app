import styled from 'styled-components/native'

export const Container = styled.View`
  gap: 16px;
  padding: 48px 0;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_400};
`

export const Content = styled.View`
  align-items: center;
  justify-content: center;
`

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray_300};
  font-size: ${({ theme }) => theme.font.sizes.H6}px;
  line-height: ${({ theme }) => theme.font.lineHeight}px;
`

export const Title = styled(Subtitle)`
  font-weight: bold;
`
