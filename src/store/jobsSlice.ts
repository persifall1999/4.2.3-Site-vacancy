import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface ITVacancy {
    id: number;
    company_name: string;
    name: string;
    city: string;
    salary: string;
    short_description: string;
    space: 'office' | 'remote' | 'hybrid';
    skills: string;
    experience: string;
}

interface ITPagination {
    currentPage: number;
    totalPages: number;
    totalItems:number;
    itemsPerPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}

interface JobState {
    list: ITVacancy[];
    pagination: ITPagination | null;
    loading: boolean;
    error: string | null;
    search: string;
    city: string;
    skills: string[];
    currentPage: number;
    searchInputValue: string;
}

const initialState: JobState = {
    list: [],
    pagination: null,
    loading: false,
    error: null,
    search: '',
    city: 'Все города',
    skills: ['JavaScript', 'React', 'Redux', 'Python'],
    currentPage: 1,
    searchInputValue: '',
}

export const jobsFetch = createAsyncThunk<{jobs: ITVacancy[], pagination: ITPagination}, void, {state: {jobs: JobState}}>(
    'jobs/jobsSlice',
    async function (_, {rejectWithValue, getState}) {
        try {
            const { search, city, skills, currentPage } = getState().jobs;
            const url = new URL('https://kata-jobs.onrender.com/api/jobs');

            url.searchParams.append('page', currentPage.toString())

            if (search.trim()) {
                url.searchParams.append('search', search.trim())
            }

            if (city && city !== 'Все города') {
                url.searchParams.append('city', city)
            }

            if (skills.length > 0) {
                url.searchParams.append('skills', encodeURIComponent(skills.join(',')))
            }

            const response = await fetch(url.toString());

            if (!response.ok) {
                throw new Error('Server Error!')
            }

            const data = await response.json();

            return {
                jobs: data.jobs,
                pagination: data.pagination,
            };
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Не удалось загрузить вакансии';
            return rejectWithValue(errorMessage);
        }
    }
)

const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setSearchInputValue: (state, action) => {
        state.searchInputValue = action.payload;
        },

        applySearch: (state) => {
        state.search = state.searchInputValue;
        state.currentPage = 1;
        },

        setCity: (state, action) => {
            state.city = action.payload;
            state.currentPage = 1;
        },

        addSkill: (state, action) => {
            const trimmed = action.payload.trim();

            if (trimmed && !state.skills.includes(trimmed)) {
              state.skills.push(trimmed);
              state.currentPage = 1;
            }
        },

        removeSkill: (state, action) => {
            state.skills = state.skills.filter((skill) => skill !== action.payload);
            state.currentPage = 1;
        },

        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(jobsFetch.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(jobsFetch.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload.jobs;
                state.pagination =action.payload.pagination;
            })
            .addCase(jobsFetch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                
            });
    },
});

export const { setSearchInputValue, applySearch, setCity, addSkill, removeSkill, setCurrentPage } = jobsSlice.actions;
export default jobsSlice.reducer;