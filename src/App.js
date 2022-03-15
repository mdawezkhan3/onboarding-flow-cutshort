import OnboardingForm from './components/OnboardingForm';
import './App.css';

function App() {
  return (
    <div className='flex flex-col items-center justify-center mt-12'>
      <div className='flex justify-center items-center mb-12'>
        <img src='/logo.png' alt="Return on Ad Spend" className='pb-1' />
        <p className='text-4xl font-bold pl-2'>Eden</p>
      </div>
      <OnboardingForm />
    </div>
  );
}

export default App;
