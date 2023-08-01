'use client'

import React , {useState} from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

export default function CreatePrompts() {
  const [submiting, setSubmiting] = useState(false);
  const [post, setPost] = useState({
    prompt : '',
    tag : '',
  })
  const {data : session} = useSession();
  const router = useRouter();

  const CreatePrompt = async (e) =>{
    e.preventDefault();
    setSubmiting(true);
    try {
      const response = await fetch('/api/prompt/new' , {
        method : 'POST',
        body : JSON.stringify({
          prompt : post.prompt,
          userId : session?.user.id,
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
    type = 'Create'
    post ={post}
    setPost ={setPost}
    submiting ={submiting}
    handleSubmit ={CreatePrompt}
    />
  )
}
