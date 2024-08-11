import { useState } from 'react';
import CaronasList from './CaronasList';
import CaronasDetail from './CaronasDetail';

export default function App() {
  const [currentPage, setCurrentPage] = useState('list');
  const [selectedCarona, setSelectedCarona] = useState(null);

  const navigateTo = (page, carona = null) => {
    setCurrentPage(page);
    setSelectedCarona(carona);
  };

  return (
    <div>
      <nav>
        {currentPage === 'detail' && <div class="back"><button onClick={() => navigateTo('list')}>Voltar</button></div>}
      </nav>
      {currentPage === 'list' && <CaronasList onCaronaClick={navigateTo} />}
      {currentPage === 'detail' && <CaronasDetail carona={selectedCarona} />}
    </div>
  );
}