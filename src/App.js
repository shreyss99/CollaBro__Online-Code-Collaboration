//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage';
import EditorPage from './pages/EditorPage';

function App() {
  return (
    <div className="App">

      <>

	  	<div>
			<Toaster 
				position='top-right' 
				toastOptions={{
					success: {
						theme: {
							primary: 'lightgreen'
						},
					},
				}}>
			</Toaster>
		</div>

		<BrowserRouter>
			<Routes>
				<Route path = "/" element={<HomePage/>}> </Route>
				<Route path = "/editor/:roomId" element={<EditorPage/>}></Route>
			</Routes>
		</BrowserRouter>

      </>
      

    </div>
  );
}

export default App;
