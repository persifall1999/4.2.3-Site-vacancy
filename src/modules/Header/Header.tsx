import { Box, Container, Group, Text, useMantineTheme } from "@mantine/core"
import { ProfileIcon } from "../../components/SvgIcons";
import styles from './Header.module.scss'

export const Header = () => {
    const theme = useMantineTheme();

    return (
        <Box className={styles.headerBox} >
            
            <Container fluid p={24} className={styles.headerContainer} >
                <Group justify="space-between" align="center" wrap="nowrap">

                    <Group gap={10} className={styles.logoGroup} >
                        <img
                            src="./logo.png"
                            alt="hh logo"
                            className={styles.logoImg}
                        />
                        <Text fw={700} size="16px" style={{ color: theme.colors.black1[0] }}>
                            .FrontEnd
                        </Text>
                    </Group>

                    <Group gap={24} justify="center" className={styles.groupPages} >

                        <Group gap={8} className={styles.vacancyPage} >
                            <Text fw={500} className={styles.vacancyText} style={{ color: theme.colors.black1[0] }}>
                                Вакансии FE
                            </Text>
                            <Box className={styles.vacancyActive} style={{
                                backgroundColor: theme.colors.indigo[6]
                            }} />
                        </Group>

                        <Group gap={8} className={styles.aboutPage} >
                            <ProfileIcon size={18}/>
                            <Text fw={500} className={styles.aboutText} >
                                Обо мне
                            </Text>
                        </Group>

                    </Group>

                    <Box className={styles.plug} />

                </Group>
            </Container>
        </Box>
    )
}
