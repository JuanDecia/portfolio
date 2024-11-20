import GlobalStyles from './components/GlobalStyles';
import AppWrapper from './components/AppWrapper';
import AppRouter from './routes/AppRouter';


function App() {

  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <AppRouter />
      </AppWrapper>
    </>
  )
}

export default App;
