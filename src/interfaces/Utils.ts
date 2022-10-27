import { AxiosRequestConfig } from 'axios';

export interface PaginatedRequestParams {
  limit?: number;
  offset?: number;
  showRecords?: boolean;
}

export interface PaginatedResponseData<T> {
  recordsTotalCount: number;
  records: T[];
}

export type TAPIFunction<T = any> = () => Promise<T>;

export interface ReduxAction {
  type: string;
  payload?: any;
}

export interface RequestController {
  cancelRequest: () => void;
}

export interface RequestOptions extends AxiosRequestConfig {
  getRequestController?: (controller: RequestController) => void;
  label?: string;
}

export interface LoadingProps {
  loading: boolean;
  errorMessage: string;
}

export interface FileContainer {
  id?: string;
  base64?: string;
  name: string;
  size: number;
  originalFile: File;
  extraParams?: any;
}

export interface LoadableFile extends FileContainer {
  // Upload props
  uploading?: boolean;
  uploadProgress?: number;
  uploadError?: string;
  upload?: () => void;
  cancelUpload?: () => void;
  retryUpload?: () => void;

  // Download props
  downloading?: boolean;
  downloadProgress?: number;
  downloadError?: string;
  download?: () => void;
  cancelDownload?: () => void;
  retryDownload?: () => void;
}

export interface AsyncProcess {
  onProgress: (progress: number) => void;
  onError: (err: Error) => void;
  onSuccess: (payload: any) => void;
  onComplete: () => void;
}

export interface AsyncProcessController {
  cancel: () => void;
}

export type FileUploadFunction = (
  file: File,
  options: AsyncProcess
) => AsyncProcessController;

export type FileDownloadFunction = (
  downloadProps: Pick<FileContainer, 'id' | 'extraParams'>,
  options: AsyncProcess
) => AsyncProcessController;

export interface TaggedAPIRequest {
  id: string;
  errorMessage?: string;
  loading?: boolean;
}

export type PrimitiveDataType =
  | 'number'
  | 'string'
  | 'boolean'
  | 'date'
  | 'enum';
