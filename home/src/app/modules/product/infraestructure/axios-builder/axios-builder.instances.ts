import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

type OnRequest = (
  config: InternalAxiosRequestConfig<AxiosRequestConfig>
) => Promise<InternalAxiosRequestConfig<AxiosRequestConfig>>;
type OnRequestError = (error: AxiosError) => Promise<AxiosError>;
type OnResponse = (response: AxiosResponse) => AxiosResponse;
type OnResponseError = (
  error: AxiosError
) => Promise<void | AxiosError | AxiosResponse>;

interface AxiosBaseInstance {
  axiosInstance: AxiosInstance;
  onRequest: OnRequest;
  onRequestError: OnRequestError;
  setOnRequestHandler(onRequest: OnRequest): void;
  setOnRequestErrorHandler(onRequestError: OnRequestError): void;
  setOnResponseHandler(onResponse: OnResponse): void;
  setOnResponseErrorHandler(onResponse: OnRequestError): void;
  build(): AxiosInstance;
}

export class AxiosInstanceBuilder implements AxiosBaseInstance {
  axiosInstance: AxiosInstance;
  constructor(baseURL?: string) {
    this.axiosInstance = axios.create({ baseURL });
  }
  onRequest: OnRequest = this.onDefaultRequest;
  onRequestError: OnRequestError = this.onDefaultRequestError;
  onResponse: OnResponse = this.onDefaultResponse;
  onResponseError: OnResponseError = this.onDefaultResponseError;

  build(): AxiosInstance {
    this.axiosInstance.interceptors.request.use(
      this.onRequest,
      this.onRequestError
    );
    this.axiosInstance.interceptors.response.use(
      this.onResponse,
      this.onResponseError
    );
    return this.axiosInstance;
  }

  setOnRequestErrorHandler(onRequestError: OnRequestError) {
    this.onRequestError = onRequestError;
  }

  setOnRequestHandler(onRequest: OnRequest) {
    this.onRequest = onRequest;
  }

  setOnResponseHandler(onResponse: OnResponse) {
    this.onResponse = onResponse;
  }

  setOnResponseErrorHandler(onResponseError: OnResponseError) {
    this.onResponseError = onResponseError;
  }

  private async onDefaultRequest(
    config:
      | InternalAxiosRequestConfig<AxiosRequestConfig>
      | Promise<InternalAxiosRequestConfig<AxiosRequestConfig>>
  ): Promise<InternalAxiosRequestConfig<AxiosRequestConfig>> {
    return config;
  }

  private onDefaultResponseError(error: AxiosError): Promise<AxiosError> {
    return Promise.reject(error);
  }

  private onDefaultResponse(response: AxiosResponse): AxiosResponse {
    return response;
  }

  private onDefaultRequestError(error: AxiosError): Promise<AxiosError> {
    console.error(`[onRequestError error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
  }
}
