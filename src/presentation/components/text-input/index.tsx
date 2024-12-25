import { TextInputProps } from 'react-native'
import * as S from './styles'

interface Props extends TextInputProps {}

export default function TextInput({ ...rest }: Props) {
  return <S.Container placeholder='Adicione uma nota tarefa' {...rest} />
}
