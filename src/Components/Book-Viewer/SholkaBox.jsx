import React from 'react'
import Button from './Button'
import { Vocabulary, VerseView, Translate, Play } from '../../Assests/Main-Content-Shlok'
import { useSelector, useDispatch } from 'react-redux'
import { addLeftMessage, addSearchShloka, togglePlay, toggleTranslate, toggleVocabulary } from '../../Features/ramayan/ramayanSlice'
import "../../index.css"
import Text from './Text'
import usePurify from '../../Hooks/usePurify'

function SholkaBox({ Shlok }) {
  const dispatch = useDispatch();
  const play = useSelector(state => state.play);
  const translate = useSelector(state => state.translate);
  const vocabulary = useSelector(state => state.vocabulary);

  return (
    <div className='border rounded-md w-[90%] mx-auto p-4 shadow-lg bg-white mb-3 snap-center'>
      <div className='w-full flex justify-between mb-3'>
        <div className='text-xl font-medium border-2 px-2 rounded-md pointer-events-none font-baloo'>
          <Text text={Shlok.id} />
        </div>
        <div>
          <div className='flex gap-2'>
            <Button
              captionText={"listen shloka"}
              onClick={() => dispatch(togglePlay(!play))}
            >
              <Play />
            </Button>

            <Button 
              captionText={"english shloka"}
              onClick={() => dispatch(toggleTranslate(!translate))}
            >
              <Translate />
            </Button>

            <Button
              captionText={"shabdarth"}
              onClick={() => dispatch(toggleVocabulary(!vocabulary))}
            >
              <Vocabulary />
            </Button>

            <Button onClick={() => {
              dispatch(addSearchShloka(usePurify({ text: Shlok.text })));
              dispatch(addLeftMessage(usePurify({ text: Shlok.text })));
            }}
              disabled={useSelector(state => state.searchDisabled)}
              captionText={"Ai Chat"}
            >
              <VerseView color={useSelector(state => state.searchDisabled) ? "#94a3b8" : ""} />
            </Button>

          </div>
        </div>
      </div>
      <div className='bottom'>
        <p className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500 text-3xl leading-relaxed tracking-normal font-medium font-baloo'>
          <Text text={Shlok.text} />
        </p>

        {translate &&<p className='font-baloo text-xl font-medium text-orange-500 my-2'>
          <Text text={Shlok.translation} />
        </p>}

        {vocabulary && <div className='font-baloo text-xl font-medium text-gray-700'>
          <Text text={Shlok.meaning} />
        </div>}
      </div>
      {play && <div>
        <audio src={`${Shlok.audio}`} controls className='w-full bg-orange-50 border-2 border-orange-400 rounded-full mt-2'></audio>
      </div>}
    </div>
  )
}

export default SholkaBox