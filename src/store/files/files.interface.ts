export interface PIPrinterFile {
    printer: string
    files: IFile[]
}

interface IFile {
    path: string
}

export interface IFileAction {
    printer: string
    files: IFileFromApi[]
}

interface IFileFromApi {
    path: string
    modified: number
    size: number
    permissions: string
}
