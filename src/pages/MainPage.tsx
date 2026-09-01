import { Navigate, Route, Routes } from "react-router-dom"
import { Header } from "../modules/Header/Header"
import { ListVacancy } from "../modules/ListVacancy/ListVacancy"
import { VacancyDetail } from "../components/VacancyDetail/VacancyDetail"
import { Box } from "@mantine/core"

export const MainPage = () => {
    
    return (
        <>
            <Header />
            
            <Box style={{ minHeight: 'calc(100vh - 80px)', paddingBottom: '40px' }}>
                <Routes>
                    
                    <Route path="/" element={<Navigate to="/vacancies" replace />} />
                    
                    <Route path="/vacancies" element={<ListVacancy />} />

                    <Route path="/vacancies/:id" element={<VacancyDetail />} />
                </Routes>
            </Box>
        </>
    )
}