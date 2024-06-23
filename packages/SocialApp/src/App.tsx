import React, { memo, useCallback, useEffect, useMemo, useState} from 'react';
// import applogo from './logoNew.png';
import './styles/App.css';
import Dashboard from './components/dashboard/Dashboard';
import HobbiesSelection from './components/common/HobbiesSelection';
import Hobbies from './components/Hobbies/Hobbies';


function useCustomhooks(initialValue = 0) {
  const [count, setcount] = useState(initialValue)

  useEffect(()=> {
      console.log(count)
  }, [count])

  const increament = (val:number)=> {setcount(prevCount=> prevCount+val)}
  const decrement = ()=> {setcount(prevCount=> prevCount-1)}
  const reset = ()=> {setcount(initialValue)}

  return {count, increament,decrement,reset}


}

const MemoExample = memo(()=> {
  return (<h1>hello</h1>)
})

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showHobbiesSelection, setShowHobbiesSelection] = useState<boolean>(true);
  const [userHobbies, setUserHobbies] = useState<string[]>([]);
  const {count,increament,decrement,reset} = useCustomhooks(10);


  const handleLogout = () => {
   // setIsLoggedIn(false);
    window.location.href = '/auth/logout';
  };

  const handleLogin = () => {
   // setIsLoggedIn(true);
   window.location.href = '/auth/google';
  };

  const handleHobbiesSave = useCallback((hobbies: string[]) => {
    setUserHobbies(hobbies);
    setShowHobbiesSelection(false);
  },[]);

  // const hobbyCount = useMemo(() => count, [userHobbies]);


  useEffect(() => {
    async function checkLoginStatus() {
      try {
        const response = await fetch('/auth/check');
        if (response.ok) {
          const user = await response.json();
          setIsLoggedIn(true);
          console.log('Logged in user:', user);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.log('Error checking login status:', error);
        setIsLoggedIn(false);
      }
    }

    checkLoginStatus();
  }, []);

  // return (
  //   <div>
  //     <h1>Count: {count}</h1>
  //     <button onClick={()=>increament(3)}>Increment</button>
  //     <button onClick={decrement}>Decrement</button>
  //     <button onClick={reset}>Reset</button>
  //   </div>
  // );


  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={applogo} className="App-logo" alt="logo" /> */}
        <div className="App-buttons">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="App-button logout-button">
              Logout
            </button>
          ) : (
            <button onClick={handleLogin} className="App-button login-button">
              Login with Google
            </button>
          )}
        </div>
      </header>
      <main className="App-main">
        {isLoggedIn ? (
          showHobbiesSelection ? (
            <HobbiesSelection onSave={handleHobbiesSave} />
          ) : (
            <Dashboard></Dashboard>
            // <Hobbies hobbies={userHobbies} />
          )
        ) : (
          <p>Please log in to access the dashboard.</p>
        )}
      </main>
    </div>
  );
};

export default App;
