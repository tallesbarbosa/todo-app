import { Badge } from '@/src/presentation/components/badge'
import * as S from './styles'
import { theme } from '@/src/presentation/theme'

interface Props {
  totalTasks: number
  completedTasks: number
}

export default function TasksOverview({ totalTasks, completedTasks }: Props) {
  function renderType(label: string, color: string) {
    return <S.Label color={color}>{label}</S.Label>
  }

  return (
    <S.Container>
      <S.LabelContainer>
        {renderType('Criadas', theme.colors.blue)}
        <Badge label={`${totalTasks}`} />
      </S.LabelContainer>
      <S.LabelContainer>
        {renderType('Concluídas', theme.colors.purple)}
        <Badge label={`${completedTasks}`} />
      </S.LabelContainer>
    </S.Container>
  )
}
