import { SetStorage, GetStorage } from '@/data/protocols/cache/'
import { AccountModel } from '@/domain/models'

export class LocalStorageAdapter implements SetStorage, GetStorage {
  set (key: string, value: object): void {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      localStorage.removeItem(key)
    }
  }

  get (key: string): any {
    return JSON.parse(localStorage.getItem(key))
  }
}
