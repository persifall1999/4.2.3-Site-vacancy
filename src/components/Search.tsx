import { Button, Group, TextInput, useMantineTheme } from "@mantine/core"
import { useAppDispatch, useAppSelector } from "../store/store";
import { applySearch, setSearchInputValue } from "../store/jobsSlice";

export const Search = () => {
    const theme = useMantineTheme();
    const dispatch = useAppDispatch();

    const searchInputValue = useAppSelector((state) => state.jobs.searchInputValue);

    const handleSearchClick = () => {
        dispatch(applySearch());
    };

    return (
        <Group gap={10} style={{width: '100%'}}>

            <TextInput 
                placeholder="Должность или название компании"
                value={searchInputValue}
                onChange={(e) => dispatch(setSearchInputValue(e.target.value))}
                leftSection={
                    <img 
                    src="/search.svg"
                    alt="Поиск"
                    style={{width: '16px', height: '16px'}}
                    />
                }
                size="md"
                style={{flex: 1}}
                styles={{
                    input: {
                        height: '42px',
                        borderRadius: '8px',
                        borderColor: '#0F0F1020',
                        borderWidth: '1px',
                        color: theme.colors.black1[0],
                        backgroundColor: theme.colors.appBackground[0],
                    }
                }}
            />

            <Button size="md" radius="sm" onClick={handleSearchClick} style={{
                backgroundColor: theme.colors.indigo[6],
                color: '#FFFFFF',
                height: '42px',
                padding: '0 21px',
                borderRadius: '4px',
                fontWeight: '400',
                cursor: 'pointer',
                border: 'none',
            }}>
                Найти
            </Button>
        </Group>
    )
}