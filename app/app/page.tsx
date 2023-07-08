import Image from 'next/image';
import { Hero, CustomFilter, SearchBar } from '@/components';

export default function Home() {
  return (
    <main className="overflow-hidden bg-indigo-50">
      <Hero/>
      <div className='mt-12 padding-x padding-y'>
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Listing</h1>
          <p></p>
        </div>
        <div className="home__filters">
          <SearchBar/>
          <div className="home__filter-container">
            <CustomFilter/>
            <CustomFilter/>
          </div>
        </div>
        
      </div>
    </main>
  )
}
