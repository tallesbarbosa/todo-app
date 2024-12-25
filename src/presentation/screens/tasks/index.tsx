import { useTheme } from '@react-navigation/native'
import Button from '../../components/button'
import TextInput from '../../components/text-input'
import * as S from './styles'
import Logo from '@/assets/images/logo.svg'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import TasksOverview from './components/tasks-overview'
import { EmptyTask } from './components/empty-task'
import { TaskCard } from './components/task-card'
import { ITask } from '@/src/domain/dto/task'
import { useState } from 'react'
import { useManageTasks } from '@/src/application/hooks/use-manage-tasks'

// const tasks: ITask[] = [
//   {
//     id: '1',
//     description:
//       'Integer urna interdum massa libero auctor neque turpis turpis semper.',
//     isCompleted: false,
//   },
//   {
//     id: '2',
//     description:
//       'Integer urna interdum massa libero auctor neque turpis turpis semper.',
//     isCompleted: true,
//   },
// ]

export default function Tasks() {
  const [description, setDescription] = useState('')

  const {
    tasks,
    addTask,
    deleteTask,
    completeTask,
    totalTasks,
    completedTasks,
  } = useManageTasks()

  function clearDescription() {
    setDescription('')
  }

  function onAddTask() {
    if (!description) return

    addTask(description)
    clearDescription()
  }

  function renderTask(task: ITask) {
    return (
      <TaskCard task={task} onDelete={deleteTask} onComplete={completeTask} />
    )
  }

  return (
    <S.Container>
      <S.Header>
        <Logo />
      </S.Header>
      <S.Body>
        <S.Top>
          <S.InputContainer>
            <TextInput onChangeText={setDescription} value={description} />
          </S.InputContainer>
          <Button onPress={onAddTask}>
            <MaterialCommunityIcons
              name='plus-circle-outline'
              size={24}
              color='white'
            />
          </Button>
        </S.Top>
        <TasksOverview
          totalTasks={totalTasks}
          completedTasks={completedTasks}
        />
        <S.TasksList
          data={tasks}
          ListEmptyComponent={EmptyTask}
          renderItem={({ item }) => renderTask(item as ITask)}
        />
      </S.Body>
    </S.Container>
  )
}
