import { Paper, Select, useMantineTheme } from "@mantine/core"
import { useAppDispatch, useAppSelector } from "../store/store"
import { setCity } from "../store/jobsSlice"

export const Towns = () => {
    const theme = useMantineTheme();

    const dispatch = useAppDispatch()

    const selectedSity = useAppSelector((state) => state.jobs.city)

    const handleCityChange = (value: string | null) => {
        if (value) {
            dispatch(setCity(value));
        }
    }

    return (
        <Paper radius={12} p={24} style={{
            backgroundColor: '#FFFFFF',
            width: '100%',
            height: '84px',
        }}>
        <Select
        placeholder="Выберите город"
        data={['Все города', 'Москва', 'Санкт-Петербург']}
        value={selectedSity}
        onChange={handleCityChange}
        leftSection={
            <img 
            src="/geo.svg"
            alt="Локация"
            style={{width: '16px', height: '16px'}}
            />
        }
        size="sm"
        radius="sm"
        style={{width: '100%'}}
        styles={{
            input: {
                height: '36px',
                borderColor: '#0F0F1033',
                borderWidth: '1px',
                color: theme.colors.black1[0],
                backgroundColor: '#FFFFFF',
                fontWeight: '400',
                '&:focus': {
                    borderColor: theme.colors.indigo[6]
                }
            },
            dropdown: {
                borderRadius: '8px',
                boxShadow: '0px 4px 12px #0000000A'
            },
            option: {
                borderRadius: '4px',
                color: theme.colors.black1[0],
            }
        }}

        />
        </Paper>
    )
}