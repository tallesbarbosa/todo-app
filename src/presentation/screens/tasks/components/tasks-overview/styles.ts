import styled from 'styled-components/native'

interface LabelProps {
  color: string
}

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 22px;
`

export const LabelContainer = styled.View`
  gap: 8px;
  flex-direction: row;
  align-items: center;
`

export const Label = styled.Text<LabelProps>`
  color: ${({ color }) => color};
  font-size: ${({ theme }) => theme.font.sizes.H6}px;
  line-height: ${({ theme }) => theme.font.lineHeight}px;
  font-weight: bold;
`
