import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode
}

export default function Button({ children, onPress }: ButtonProps) {
  return <S.Container onPress={onPress}>{children}</S.Container>
}
