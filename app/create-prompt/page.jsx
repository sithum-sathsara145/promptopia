'use client'

import React , {useState} from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import Form from '@components/Form';

export default function CreatePrompts() {
  const [submiting, setSubmiting] = useState(false);
  const [post, setPost] = useState({
    prompt : '',
    tag : '',
  })
  const CreatePrompt = async (e) =>{

  }
  return (
    <Form
    type = 'create'
    />
  )
}
