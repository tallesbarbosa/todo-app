import TaskImage from '@/assets/images/task.svg'

import * as S from './styles'

export function EmptyTask() {
  return (
    <S.Container>
      <TaskImage />
      <S.Content>
        <S.Title>Você ainda não tem tarefas cadastradas</S.Title>
        <S.Subtitle>Crie tarefas e organize seus itens a fazer</S.Subtitle>
      </S.Content>
    </S.Container>
  )
}
