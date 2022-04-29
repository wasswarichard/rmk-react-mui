import { AxiosRequestConfig } from 'axios';

export type IAPIFunction = () => Promise<any>;

export interface IReduxAction {
  type: string;
  payload?: any;
}

export interface IRequestController {
  cancelRequest: () => void;
}

export interface IRequestOptions extends AxiosRequestConfig {
  getRequestController?: (controller: IRequestController) => void;
  label?: string;
}

export interface ILoadingProps {
  loading: boolean;
  errorMessage: string;
}

export interface IFile {
  id?: string;
  base64?: string;
  name: string;
  size: number;
  originalFile: File;
  extraParams?: any;
}

export interface IUploadableFile extends IFile {
  uploading?: boolean;
  uploadProgress?: number;
  uploadError?: string;
  cancelUpload?: () => void;
  retryUpload?: () => void;
}

export interface IAsyncProcess {
  onProgress: (progress: number) => void;
  onError: (err: Error) => void;
  onSuccess: (payload: any) => void;
  onComplete: () => void;
}

export interface IAsyncProcessController {
  cancel: () => void;
}

export type IFileUploadFunction = (
  file: File,
  options: IAsyncProcess
) => IAsyncProcessController;

export interface ITaggedAPIRequest {
  id: string;
  errorMessage?: string;
  loading?: boolean;
}
