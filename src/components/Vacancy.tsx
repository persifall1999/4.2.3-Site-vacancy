import { Badge, Button, Group, Paper, Stack, Text, useMantineTheme } from "@mantine/core"
import type { ITVacancy } from "../store/jobsSlice"

interface VacancyProps {
    vacancy: ITVacancy;
}

const spaceLabels: Record<ITVacancy['space'], string> = {
    office: 'Офис',
    remote: 'Можно удалённо',
    hybrid: 'Гибрид',
};

export const Vacancy = ({vacancy}: VacancyProps) => {
    const theme = useMantineTheme();

    const formatSalary = (salaryStr: string) => {
        const num = parseInt(salaryStr, 10);
        if (isNaN(num)) return 'Зарплата не указана'
        return `${num.toLocaleString('ru-RU')} ₽`
    }

    return (
        <Paper style={() => ({
            backgroundColor: '#FFFFFF',
            width: '100%',
            height: '248px',
            borderRadius: '12px',
            padding: '24px'
        })}>
            
            <Stack gap={6}>

                <Text size="20px" fw={600} style={{
                    color: theme.colors.indigo[6],
                    cursor: 'pointer'
                }}>
                    {vacancy.name}
                </Text>

                <Group gap={16} style={{marginTop: '6px'}}>
                    <Text fw={400} size="16px" style={{color: theme.colors.black1[0]}}>
                        {formatSalary(vacancy.salary)}
                    </Text>
                    <Text size="14px" fw={400} style={{color: '#0F0F1080'}}>
                        Опыт {vacancy.experience}
                    </Text>
                </Group>

                <Text size="14px" fw={400} style={{color: '#0F0F1080', marginTop: '18px'}}>
                    {vacancy.company_name}
                </Text>

                <Group mt={6}>
                    <Badge variant="filled" size="xs" radius="xs" style={{
                        backgroundColor: theme.colors.indigo[6],
                        color: '#FFFFFF',
                        fontWeight: '700',
                        height: '16px',
                        textTransform: 'uppercase',
                        padding: '6px 5px 6px 5px'
                    }}>
                        {spaceLabels[vacancy.space] || vacancy.space}
                    </Badge>
                </Group>

                <Text size="16px" fw={400} style={{ color: '#0F0F10', marginTop: '4px'}}>
                    {vacancy.city}
                </Text>

                <Group mt="md">
                    <Button radius="sm" size="sm" style={{
                        backgroundColor: theme.colors.black1[0],
                        color: '#FFFFFF',
                        fontSize: '14px',
                        fontWeight: '400',
                        height: '34px',
                        padding: '0 18px',
                    }} onClick={(e) => e.preventDefault()}>
                        Смотреть вакансию
                    </Button>
                </Group>
            </Stack>
        </Paper>
    )
}