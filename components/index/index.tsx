import type { NextPage } from 'next'
import {
  IndexContainerStyle,
  MainSloganStyle,
  MainSubSloganStyle,
  TodoArticleStyle,
  TodoContainerStyle,
  TodoDescContainerStyle,
  TodoDescItemStyle,
  TodoDescTitleStyle,
  TodoImageStyle,
  TodoItemTitleStyle,
} from './index.style'

const Home: NextPage = () => {
  return (
    <IndexContainerStyle>
      <MainSloganStyle>
        Manage everything you need to manage in one place with ease.
      </MainSloganStyle>
      <MainSubSloganStyle>
        With Yeah Planner you can manage everything in one place. Yeah Planner
        only requires Internet connection. What is you want to manage and
        control? Yeah Planner will give a solution which is fit to what you
        wanted to. Now let's create Yeah Planner account and start managing your
        life.
      </MainSubSloganStyle>
      <TodoContainerStyle>
        <TodoDescTitleStyle>Feature 1</TodoDescTitleStyle>
        <TodoDescContainerStyle>
          <TodoDescItemStyle>
            <TodoImageStyle src="/index/todo.png" alt="todo" />
          </TodoDescItemStyle>
          <TodoDescItemStyle>
            <TodoItemTitleStyle>To-do</TodoItemTitleStyle>
            <TodoArticleStyle>
              To-do managing will provide availability you to control your
              schedule, tasks, and whatever. You can create your own to-do list
              consists of title, description, due date, and details. The only
              thing required is Yeah Planner account and internet connection.
              Start managing your to-do with Yeah Planner.
            </TodoArticleStyle>
          </TodoDescItemStyle>
        </TodoDescContainerStyle>
      </TodoContainerStyle>
    </IndexContainerStyle>
  )
}

export default Home
