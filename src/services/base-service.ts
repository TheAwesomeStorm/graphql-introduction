import fetch from 'node-fetch';

export class BaseService {
  protected async get<T> (url: string): Promise<T> {
    const response = await fetch(url)
    return response.json();
  }
}
