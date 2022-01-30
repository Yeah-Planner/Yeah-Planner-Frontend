import type { NextPage } from 'next'
import {
  IndexContainerStyle,
  MainSloganStyle,
  MainSubSloganStyle,
} from '../components/index/index.style'

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
    </IndexContainerStyle>
  )
}

export default Home
