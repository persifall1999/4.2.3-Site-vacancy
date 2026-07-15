import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store"
import { jobsFetch, setCurrentPage } from "../store/jobsSlice";
import { Center, Container, Grid, Loader, Box, Pagination, Stack, Text, useMantineTheme } from "@mantine/core";
import { Skills } from "../components/Skills";
import { Towns } from "../components/Towns";
import { Search } from "../components/Search";
import { Vacancy } from "../components/Vacancy";

export const ListVacancy = () => {
    const dispatch = useAppDispatch();
    const theme = useMantineTheme()

    const { list, pagination, loading, error, currentPage, search, city, skills } = useAppSelector((state) => state.jobs);

    useEffect(() => {
        dispatch(jobsFetch())
    }, [dispatch, currentPage, search, city, skills]);

    const handlePageChange = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    return (
        <Box style={{ width: '100%' }}>

            <Box style={{ 
                width: '100%', 
                borderBottom: '1px solid #0F0F1015',
            }}>

                <Container style={{ maxWidth: '1200px', width: '100%', margin: '0 auto' }} p={{ base: 'md', md: 'xl' }}>
                    <Box style={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        gap: '40px'
                    }}>
                        <Box style={{ flexShrink: 0 }}> 
                            <Text
                              size="26px"
                              fw={700}
                              style={{
                                  color: theme.colors.black1[0],
                                  lineHeight: '1.35',
                                  whiteSpace: 'nowrap'
                              }}
                            >
                                Список вакансий
                            </Text>
                            <Text
                              size="20px"
                              fw={500}
                              style={{ color: '#0F0F1080', whiteSpace: 'nowrap' }}
                            >
                                по профессии Frontend-разработчик
                            </Text>
                        </Box>

                        <Box style={{ flexGrow: 1, maxWidth: '508px', width: '100%' }}>
                            <Search />
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Container style={{ maxWidth: '1200px', width: '100%', margin: '0 auto' }} p={{ base: 'md', md: 'xl' }}>
                <Grid gap="24px">

                    <Grid.Col span={{base: 12, md: 4, lg: 4}}>
                        <Stack gap="12px">
                            <Skills />
                            <Towns />
                        </Stack>
                    </Grid.Col>

                    <Grid.Col span={{base: 12, md: 8, lg: 8}}>
                        <Stack gap="md">
                            
                            {error && (
                                <Center style={{height: '200px'}}>
                                    <Text style={{color: '#f65b5b'}}>An error occurred: {error}</Text>
                                </Center>
                            )}

                            {loading && (
                                <Center style={{height: '200px'}}>
                                    <Loader color="indigo" size="md"></Loader>
                                </Center>
                            )}

                            <Stack gap="md">
                                {list.length > 0 ? (list.map((vacancy) =>
                                    <Vacancy key={vacancy.id} vacancy={vacancy}/>
                                )) : (
                                    <Text style={{color: '#0F0F1080'}} size="24px">
                                        Вакансий по вашему запросу не найдено.
                                    </Text>
                                )}
                            </Stack>

                            {Boolean(pagination) && pagination!.totalPages > 1 && !loading && (
                                <Center mt="xl">
                                    <Pagination
                                      value={currentPage}
                                      onChange={handlePageChange}
                                      total={pagination!.totalPages} 
                                      radius="sm"
                                      withEdges
                                      styles={{
                                        control: {
                                          border: '1px solid #0F0F1015',
                                          color: theme.colors.black1[0],
                                          backgroundColor: '#FFFFFF',
                                          fontWeight: 500,
                                          width: '36px',
                                          height: '36px',
                                          '&:hover': {
                                            backgroundColor: '#0F0F1005',
                                          }
                                        },
                                        dots: {
                                          color: theme.colors.black1[0],
                                        }
                                      }}
                                    />
                                </Center>
                            )}
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Container>

        </Box>
    );
};