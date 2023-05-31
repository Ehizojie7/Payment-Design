import { useState } from 'react'
import './App.css'
import Header from './Header';
import Form from './Form';
import DebitCard from './DebitCard';

function App() {

  const [creditCardNumber, setCreditCardNumber] = useState('');

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputStyle = {
    border: isFocused ? '2px solid blue' : '0px solid none',
  };

  
  const handleCardNumber = (event) => {
    const { value } = event.target;

    // Remove non-numeric characters from the input
    const numericValue = value.replace(/\D/g, '');

    // Add hyphens after every four digits
    let formattedValue = numericValue.replace(/(\d{4})/g, '$1-');

    // Remove any extra hyphens at the end
    formattedValue = formattedValue.slice(0, 19);

    setCreditCardNumber(formattedValue);
  };

  const [cvv, setCvv] = useState('');

  const handleCvv = (event) => {
      const { value } = event.target;
  
      // Remove non-numeric characters from the input
      const numericValue = value.replace(/\D/g, '');

      let formattedValue = numericValue.replace(/(\d{4})/g, '$1-');


  
      // Remove any extra hyphens at the end
      formattedValue = numericValue.slice(0, 4);
  
      setCvv(formattedValue);
    };
   

    const [expirationMonth, setExpirationMonth] = useState('');
    const [expirationYear, setExpirationYear] = useState('');
  
    const handleMonthChange = (event) => {
      const { value } = event.target;
      // ... input handling logic for the month
  
       // Remove non-numeric characters from the input
       const numericValue = value.replace(/\D/g, '');
  
       let formattedValue = numericValue.replace(/(\d{2})/g, '$1-');
  
       // Remove any extra hyphens at the end
       formattedValue = numericValue.slice(0, 2);
   
       setExpirationMonth(formattedValue);
    };
  
    const handleYearChange = (event) => {
      const { value } = event.target;
      // ... input handling logic for the year
      const numericValue = value.replace(/\D/g, '');
  
      let formattedValue = numericValue.replace(/(\d{2})/g, '$1-');
  
      // Remove any extra hyphens at the end
      formattedValue = numericValue.slice(0, 2);
  
      setExpirationYear(formattedValue);
  
    };



  return (
  <div className='container'>
    <div className='frame-one'>
     <Header />
    <Form 
    creditCardNumber={creditCardNumber}
    handleCardNumber={handleCardNumber}
    cvv={cvv}
    handleCvv={handleCvv}
    handleMonthChange={handleMonthChange}
    expirationMonth={expirationMonth}
    handleYearChange={handleYearChange}
    expirationYear={expirationYear}
    handleBlur={handleBlur}
    handleFocus={handleFocus}
    inputStyle={inputStyle}
    />
    </div>

    <div className='frame-two'>
      <DebitCard />

    </div>

  </div>
  )
}

export default App
