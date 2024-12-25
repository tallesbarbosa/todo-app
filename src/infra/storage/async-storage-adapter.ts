import { IStorage } from './storage-adapter'
import AsyncStorage from '@react-native-async-storage/async-storage'

export class AsyncStorageAdapter implements IStorage {
  async setItem(key: string, value: string): Promise<void> {
    await AsyncStorage.setItem(key, value)
  }

  async getItem(key: string): Promise<string | null> {
    return await AsyncStorage.getItem(key)
  }

  async removeItem(key: string): Promise<void> {
    await AsyncStorage.removeItem(key)
  }
}
