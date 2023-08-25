'use client'

import React , {useState,useEffect} from 'react'
import { useRouter,useSearchParams } from 'next/navigation';

import Form from '@components/Form';

export default function EditPrompt() {
    const SearchParams = useSearchParams();
    const promptID = SearchParams.get('id')
  const [submiting, setSubmiting] = useState(false);
  const [post, setPost] = useState({
    prompt : '',
    tag : '',
  })
  const router = useRouter();
useEffect(() => {
  const getPromptDetails = async() =>{
    const response = await fetch(`/api/prompt/${promptID}`);
    const data = await response.json()
    setPost({
        prompt: data.prompt,
        tag : data.tag
    })
  }
  if(promptID) getPromptDetails()
}, [promptID])

  const UpdatePrompt = async (e) =>{
    e.preventDefault();
    setSubmiting(true);

    if(!promptID) alert('prompt id is missing')
    try {
      const response = await fetch(`/api/prompt/${promptID}` , {
        method : 'PATCH',
        body : JSON.stringify({
          prompt : post.prompt,
          tag: post.tag
        })
      })
      if (response.ok){
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    }finally{
      setSubmiting(false);
    }
  }
  return (
    <Form
    type = 'Edit'
    post ={post}
    setPost ={setPost}
    submiting ={submiting}
    handleSubmit ={UpdatePrompt}
    />
  )
}
