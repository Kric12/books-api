import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export function Footer() {
  const { theme } = useContext(GlobalContext);

  return (
    <div className={`footer-wrapper ${theme}`}>
        <button>HOLA</button>
    </div>
  )
}