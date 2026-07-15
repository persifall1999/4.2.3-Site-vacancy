import { ActionIcon, Group, Paper, Pill, Stack, Text, TextInput, useMantineTheme } from "@mantine/core";
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../store/store";
import { addSkill, removeSkill } from "../store/jobsSlice";

export const Skills = () => {
    const theme = useMantineTheme();
    const dispatch = useAppDispatch();
    
    const skills = useAppSelector((state) => state.jobs.skills)
    const [inputValue, setInputValue] = useState('');

    const handleAddSkill = () => {
        const trimmedValue = inputValue.trim();
        if (trimmedValue) {
            dispatch(addSkill(trimmedValue));
            setInputValue('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddSkill();
        }
    };

    const handleRemoveSkill = (skillToRemove: string) => {
        dispatch(removeSkill(skillToRemove));
    };

    return (
        <Paper p={24} radius={12} style={{
            backgroundColor: '#FFFFFF',
            width: '100%',
        }}>
            <Stack gap="sm">
                <Text fw={600} size="14px" style={{
                    color: theme.colors.black1[0]
                }}>
                    Ключевые навыки
                </Text>
                
                <Group gap={8} wrap="nowrap" style={{ width: '100%' }}>
                    <TextInput 
                        placeholder="Навык"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        size="xs"
                        style={{ flex: 1 }}
                        styles={{
                            input: {
                                borderRadius: '8px',
                                borderColor: '#0F0F1033',
                                borderWidth: '1px',
                                height: '30px',
                                color: theme.colors.black1[0],
                                backgroundColor: '#FFFFFF',
                                paddingRight: '12px', 
                                '&:focus': {
                                    borderColor: theme.colors.indigo[6],
                                }
                            }
                        }}
                    />

                    <ActionIcon 
                        radius="md" 
                        onClick={handleAddSkill}
                        style={{
                            backgroundColor: '#228BE6',
                            opacity: '0.5',
                            height: '30px',
                            width: '34px',
                            flexShrink: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Text style={{
                            color: '#FFFFFF', 
                            fontSize: '34px',
                            fontWeight: '100',
                            lineHeight: 1,
                            display: 'inline-block',
                        }}>
                            +
                        </Text>
                    </ActionIcon>
                </Group>

                <Group gap={6} wrap="wrap" style={{marginTop: '6px'}}>
                    {skills.map((skill) => (
                        <Pill 
                            key={skill}
                            withRemoveButton
                            onRemove={() => {handleRemoveSkill(skill)}}
                            styles={{
                                root: {
                                    backgroundColor: '#F6F6F7',
                                    borderRadius: '99px',
                                    padding: '2px 4px 2px 12px', 
                                    height: 'auto'
                                },
                                label: {
                                    color: theme.colors.black1[0],
                                    fontSize: '12px',
                                    fontWeight: '400',
                                    marginRight: '3px',
                                },
                                remove: {
                                    color: '#0F0F104D',
                                    padding: '3px',
                                }
                            }}
                        >
                            {skill}
                        </Pill>
                    ))}
                </Group>
            </Stack>
        </Paper>
    );
};