import Header from './Header'
import Footer from './Footer'
import Food from './Food'
import Card from './Card'
import Button1 from './Button1'
import Button2 from './Button/Button2.jsx'
import Buttons from './Buttons.jsx'
import Student from './Student'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'

function App() {

  const fruits =   [{id:1, name: "apple", calories: 95},
                    {id:2, name: "orange", calories: 45}, 
                    {id:3, name: "banana", calories: 324}, 
                    {id:4, name: "pineapple", calories:327}, 
                    {id:5, name: "strawberry", calories: 324}];

  const vegetables = [{id:6, name: "potatoes", calories: 95},
                      {id:7, name: "celery", calories: 45}, 
                      {id:8, name: "carrots", calories: 324}, 
                      {id:9, name: "corn", calories:327}, 
                      {id:10, name: "broccoli", calories: 324}];
  
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

      {fruits.length > 0 && <List items={fruits} category="Fruits"/>} 
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}

      <Footer />

    </>
  );


}

export default App
