import { TouchableOpacityProps } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

import * as S from './styles'
import { theme } from '../../theme'

interface Props extends TouchableOpacityProps {
  isChecked: boolean
}

export function RadioButton({ isChecked, onPress }: Props) {
  return (
    <S.Container isChecked={isChecked} onPress={onPress}>
      {isChecked && (
        <MaterialIcons name='check' size={14} color={theme.colors.gray_100} />
      )}
    </S.Container>
  )
}
