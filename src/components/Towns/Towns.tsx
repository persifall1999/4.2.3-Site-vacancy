import { Paper, Select, useMantineTheme } from "@mantine/core"
import { setCity } from "../../store/jobsSlice";
import { GeoIcon } from "../SvgIcons";
import { useAppDispatch, useAppSelector } from "../../store/store";
import styles from './Towns.module.scss'

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
        <Paper radius={12} p={24} className={styles.paperTowns} >
        <Select
        placeholder="Выберите город"
        data={['Все города', 'Москва', 'Санкт-Петербург']}
        value={selectedSity}
        onChange={handleCityChange}
        leftSection={<GeoIcon size={16} />}
        size="sm"
        radius="sm"
        className={styles.selectTowns}
        styles={{
            input: {
                className: styles.customInput,
                color: theme.colors.black1[0],
                '&:focus': {
                    borderColor: theme.colors.indigo[6]
                }
            },
            dropdown: {
                borderRadius: '8px',
                boxShadow: '0px 4px 12px #0000000A',
            },
            option: {
                className: styles.customOption,
                color: theme.colors.black1[0],
            }
        }}

        />
        </Paper>
    )
}