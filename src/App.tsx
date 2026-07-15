import '@mantine/core/styles.css';
import { Box, MantineProvider, useMantineTheme } from '@mantine/core'
import './App.scss'
import { theme } from './theme'
import { MainPage } from './pages/MainPage'

function AppContent() {
  const theme = useMantineTheme();
  
  return (
    <Box style={{
      backgroundColor: theme.colors.appBackground[0],
      minHeight: '100vh'
    }}>
      <MainPage />
    </Box>
  )
}

function App() {
  return (
    <MantineProvider theme={theme}>
      <AppContent />
    </MantineProvider>
  )
}

export default App
