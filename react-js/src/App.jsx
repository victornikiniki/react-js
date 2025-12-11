import Header from './Header'
import Footer from './Footer'
import Food from './Food'
import Card from './Card'
import Button1 from './Button1'
import Button2 from './Button/Button2.jsx'
import Buttons from './Buttons.jsx'
import Student from './Student'
import UserGreeting from './UserGreeting.jsx'

function App() {
  
  return(
    <>

      <Header />
      <Food />
      <Card />
      <Button1 />
      <Button2 />
      <Buttons />
      <Student name='Victor' age={27} isStudent={false} />
      <Student name='Yuri' age={23} isStudent={false}/>
      <Student name='Yuri' age={18} isStudent={true}/>
      <Student name='Maccachin' age={3} isStudent={false}/>
      <UserGreeting isLoggedIn={true} username="VictorNiki"/>
      <Footer />

    </>
  );


}

export default App
