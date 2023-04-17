export class StorageService {
  public static set(key: string, value: any, session = false): void {
    if (session) {
      sessionStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, value);
    }
  }

  public static get(key: string, session = false): string | null {
    if (session) {
      return sessionStorage.getItem(key);
    } else {
      return localStorage.getItem(key);
    }
  }

  public static clear(key: string, session = false): void {
    if (session) {
      sessionStorage.removeItem(key);
    } else {
      localStorage.removeItem(key);
    }
  }
}
