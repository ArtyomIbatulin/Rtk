import './App.css'
import {CakeView} from '../src/features/cake/CakeView'
import {IcecreamView} from '../src/features/icecream/IcecreamView'
import {UsersView} from '../src/features/user/UsersView'
 
function App() {

  return (
    <div className="App">
        <CakeView/>
        <IcecreamView/>
        <UsersView/>
    </div>
  )
}

export default App
