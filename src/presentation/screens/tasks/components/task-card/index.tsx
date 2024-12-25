import { RadioButton } from '@/src/presentation/components/radio-button'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

import * as S from './styles'
import { theme } from '@/src/presentation/theme'
import { ITask } from '@/src/domain/dto/task'

interface Props {
  task: ITask
  onDelete: (id: string) => void
  onComplete: (id: string) => void
}

export function TaskCard({ task, onDelete, onComplete }: Props) {
  const { id, description, isCompleted } = task
  return (
    <S.Container>
      <S.Left>
        <RadioButton isChecked={isCompleted} onPress={() => onComplete(id)} />
        <S.Title isCompleted={isCompleted}>{description}</S.Title>
      </S.Left>
      <S.DeleteButton onPress={() => onDelete(id)}>
        <MaterialCommunityIcons
          name='trash-can-outline'
          size={24}
          color={theme.colors.gray_300}
        />
      </S.DeleteButton>
    </S.Container>
  )
}
