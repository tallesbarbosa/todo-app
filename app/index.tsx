import { View } from 'react-native'
import Logo from '../assets/images/logo.svg'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/src/presentation/theme'
import Tasks from '@/src/presentation/screens/tasks'

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <Tasks />
    </ThemeProvider>
  )
}
