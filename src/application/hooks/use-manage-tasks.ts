import { ITask } from '@/src/domain/dto/task'
import { AsyncStorageAdapter } from '@/src/infra/storage/async-storage-adapter'
import { useEffect, useState } from 'react'
import uuid from 'react-native-uuid'

const TASK_KEY = 'TASKS'

interface IUseManageTasks {
  tasks: ITask[]
  deleteTask: (id: string) => void
  completeTask: (id: string) => void
  addTask: (taskDescription: string) => void
  totalTasks: number
  completedTasks: number
}

export function useManageTasks(): IUseManageTasks {
  const [tasks, setTasks] = useState<ITask[]>([])
  const asyncStorageAdapter = new AsyncStorageAdapter()

  async function fetchTasks(): Promise<void> {
    const fetchedTasks = await asyncStorageAdapter.getItem(TASK_KEY)

    let persistedTasks: ITask[] = []

    if (fetchedTasks) {
      persistedTasks = JSON.parse(fetchedTasks) as ITask[]
    }

    setTasks(persistedTasks)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  useEffect(() => {
    asyncStorageAdapter.setItem(TASK_KEY, JSON.stringify(tasks))
  }, [tasks])

  function addTask(taskDescription: string) {
    const task: ITask = {
      id: uuid.v4(),
      description: taskDescription,
      isCompleted: false,
    }

    setTasks([...tasks, task])
  }

  function deleteTask(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id)

    setTasks(newTasks)
  }

  function completeTask(id: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }

      return task
    })

    setTasks(newTasks)
  }

  const { totalTasks, completedTasks } = tasks.reduce(
    (acc, task) => {
      acc.totalTasks++
      if (task.isCompleted) {
        acc.completedTasks++
      }

      return acc
    },
    { totalTasks: 0, completedTasks: 0 }
  )

  return {
    tasks,
    addTask,
    deleteTask,
    completeTask,
    totalTasks,
    completedTasks,
  }
}
