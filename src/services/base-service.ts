import fetch from 'node-fetch';

export class BaseService {
  protected async get<T> (url: string): Promise<T> {
    const response = await fetch(url)
    return response.json();
  }

  protected async post<T>(url: string, data: T): Promise<void> {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json'}
    });
  }
}
