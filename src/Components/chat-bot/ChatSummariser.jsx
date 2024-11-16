import React from 'react'
import LeftMsgBox from './LeftMsgBox'
import RightMsgBox from './RightMsgBox'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Book-Viewer/Button'
import QuestionBox from './QuestionBox'
import InputBox from './InputBox'
import { addSearchQuestion, addSearchShloka, addQuestionMessage, toggleSearchDisabled, addRightMessage, makeAiPrompt, updateRightMessage, resetAi } from '../../Features/ramayan/ramayanSlice'
import {GoogleGenerativeAI} from '@google/generative-ai';
import { useEffect, useState } from 'react';

function QuickQuestionsButton({ text, disabled }) {
  const dispatch = useDispatch();
  const [aiResponse, setAiResponse] = useState(null);

  const searchAi = useSelector(state => state.searchAi);
  const prashna = useSelector(state => state.aiPrompt);

  useEffect(() => {
    if (searchAi) {
      const genAI = new GoogleGenerativeAI("");
      async function run() {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        try {
          const result = await model.generateContent([prashna]);
          return result.response.text();
        } catch (error) {
          if (error) {
            throw error;
          }
        }
      }
      run()
        .then(result => {
          setAiResponse(result);
          dispatch(resetAi());
        })
        .catch(error => {
          console.error('Error:', error);
          dispatch(resetAi());
        });
    } else {
      setAiResponse(null);
    }
  }, [searchAi]);

  useEffect(() => {
    if (aiResponse) {
      let newAiResponse = aiResponse.replace(/\*\*(.*?)\*\*/g, (match, group) => {
        return `<b>${group}</b>`;
      });
      dispatch(updateRightMessage({ text: newAiResponse }));
    }
  }, [aiResponse]);
  return (
    <div className='mr-2 my-2'>
      <Button
        customStyles={'bg-orange-100 hover:border-orange-300 hover:bg-orange-200'}
        disabled={disabled}
        onClick={
          () => {
            dispatch(addSearchQuestion(text));
            dispatch(addQuestionMessage(text));
            dispatch(toggleSearchDisabled(true));
            dispatch(addRightMessage());
            dispatch(makeAiPrompt());
          }
        }
      >
        {text}
      </Button>
    </div>
  )
}


function ChatSummariser() {
  const chat = useSelector(state => state.chat);

  return (
    <div className='rounded-md border-2 w-1/4 flex flex-col h-full mr-3'>
      
      <div className='bg-white z-10 text-center py-2 text-xl font-semibold font-baloo text-slate-600 dark:text-slate-300 w-auto border-b-2 rounded-t-md'>
        AI chat with the book
      </div>

      <div className='overflow-scroll overflow-x-hidden h-full scrollbar'>
        {chat.map((msg) => {
          if (msg.type === "left") {
            return <LeftMsgBox message={msg.text} key={msg.id} />
          } else if (msg.type === "right") {
            return <RightMsgBox message={msg.text} key={msg.id} />
          } else {
            return <QuestionBox message={msg.text} key={msg.id} />
          }
        })}
      </div>

      <div className='my-2 border-t-2 pb-1'> {/* bottom */}
        <div className='pl-2 mb-2 flex overflow-x-auto whitespace-nowrap justify-evenly mini-scrollbar'> {/* question buttons */}
          <QuickQuestionsButton text={"bhavarth bataiye"} disabled={useSelector(state => state.searchDisabled)} />
          <QuickQuestionsButton text={"shabdarth bataiye"} disabled={useSelector(state => state.searchDisabled)} />
          <QuickQuestionsButton text={"kuch bataiye"} disabled={useSelector(state => state.searchDisabled)} />
        </div>

        <InputBox />
      </div>
    </div>
  )
}

export default ChatSummariser