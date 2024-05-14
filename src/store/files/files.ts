import { IFileAction, PIPrinterFile } from '.'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IState {
    list: PIPrinterFile[]
}

const initialState: IState = {
    list: [],
}

export const files = createSlice({
    name: 'files',
    initialState,
    reducers: {
        setFileList: (state, { payload }: PayloadAction<IFileAction>) => {
            state.list = [
                ...state.list,
                {
                    printer: payload.printer,
                    files: payload.files.map((item) => {
                        return {
                            path: item.path,
                        }
                    }),
                },
            ]
        },
    },
})

export const { setFileList } = files.actions

export default files.reducer
