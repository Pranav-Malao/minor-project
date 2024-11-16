import React from 'react';
import SholkaBox from './SholkaBox';
import Footer from "../Footer/Footer";
import useShloka from '../../Hooks/Shloka';
import { useLocation } from 'react-router-dom';
import NextPrevButton from './PrevButton';
import NavigateButtonsContainer from './NavigateButtonsContainer';
import { useDispatch, useSelector } from 'react-redux';
import { addRamayan } from '../../Features/ramayan/ramayanSlice';

export default function SholkaContainer() {
  const dispatch = useDispatch();

  const location = useLocation();
  const currentUrl = location.pathname + location.search + location.hash;
  const urlSegments = currentUrl.split('/');
  let id = urlSegments[urlSegments.length - 1] || urlSegments[urlSegments.length - 2];
  console.log("id", id);

  let subid;
  if (id.length >= 2) {
    subid = id;
    id = urlSegments[urlSegments.length - 2] || urlSegments[urlSegments.length - 3];
  }
  const { shlokas, error } = useShloka(id, subid);
  dispatch(addRamayan(shlokas));

  const Shlokas = useSelector(state => state.shlokas);
  return (
    <div className='overflow-scroll max-h-screen overflow-x-hidden w-1/2 scrollbar snap-y'>
      {Shlokas[0] && Shlokas[0].description && <div className='border rounded-md w-[90%] mx-auto p-4 shadow-lg bg-orange-100 mb-3'>
        <p className='font-baloo text-xl font-medium text-slate-500 my-2'>
          <span className='text-orange-500'>Description of sarga {id}</span> <br /> 
          {Shlokas[0].description}
        </p>
      </div>}

      {Shlokas &&
        Array.isArray(Shlokas) && shlokas.map((Shlok) => (
          <SholkaBox key={Shlok.id} Shlok={Shlok} />
        ))
      }

      {error && <div>Error: {error}</div>}
      <NavigateButtonsContainer/>
      <Footer />
    </div>
  );
}
