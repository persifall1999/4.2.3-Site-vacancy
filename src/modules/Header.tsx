import { Box, Container, Group, Text, useMantineTheme } from "@mantine/core"

export const Header = () => {
    const theme = useMantineTheme();

    return (
        <Box style={{
            backgroundColor: '#FFFFFF',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0px 2px 22.5px 0px #1C1D1F0D',
            position: 'relative',
            zIndex: 10,
            width: '100%'
        }}>
            
            <Container fluid p={24} style={{ width: '100%' }}>
                <Group justify="space-between" align="center" wrap="nowrap">

                    <Group gap={10} style={{ cursor: 'pointer', flexShrink: 0, width: '138px' }}>
                        <img
                            src="/logo.png"
                            alt="hh logo"
                            style={{ width: '30px', height: '30px', objectFit: 'contain' }}
                        />
                        <Text fw={700} size="16px" style={{ color: theme.colors.black1[0] }}>
                            .FrontEnd
                        </Text>
                    </Group>

                    <Group gap={24} justify="center" style={{ flexGrow: 1 }}>

                        <Group gap={8} style={{ cursor: 'pointer', position: 'relative', padding: '8px 0' }}>
                            <Text fw={500} style={{ color: theme.colors.black1[0], fontSize: '14px' }}>
                                Вакансии FE
                            </Text>
                            <Box style={{
                                width: '6px',
                                height: '6px',
                                backgroundColor: theme.colors.indigo[6],
                                borderRadius: '5px'
                            }} />
                        </Group>

                        <Group gap={8} style={{ cursor: 'not-allowed' }}>
                            <img
                                src='/Vector.svg'
                                alt='Профиль'
                                style={{ width: '18px', height: '18px', objectFit: 'contain' }}
                            />
                            <Text fw={500} style={{ color: '#0F0F1080', fontSize: '14px' }}>
                                Обо мне
                            </Text>
                        </Group>

                    </Group>

                    <Box style={{ width: '138px', flexShrink: 0 }} />

                </Group>
            </Container>
        </Box>
    )
}