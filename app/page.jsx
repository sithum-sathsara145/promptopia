import Feed from '@components/Feed'
import React from 'react'

export default function 
() {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className=' head_text text-center'>
        Discover & Share 
        <br className=' max-md:hidden'/>
        <span className=' orange_gradient text-center'>
          Ai prompts
        </span>
        </h1>
        <p className=' desc text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo officiis consequatur consequuntur accusamus optio voluptas perspiciatis tempore, quidem dolore suscipit pariatur modi qui atque, deserunt alias dolorem eveniet assumenda sunt.</p>
        <Feed />
    </section>
  )
}
