import * as S from './styles'

interface Props {
  label: string
}

export function Badge({ label }: Props) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
    </S.Container>
  )
}
