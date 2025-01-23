import Author from '@/app/components/BlogElemet/Author'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Reference = [
    {
        id: 1,
        name: 'N/A',
        link: '/'
    },    

]

const BlogArtsgozBE = () => {
  return (
    <div className='blog-panel'>
        {/* Banner */}
        <div className='flex max-h-3/4 min-w-full relative -z-[1]'>
          <img src='/banner/artsgoz-backend.jpeg' className='blog-banner'></img>                        
          <div className='blog-banner-object'>            
            <p className='ref-image'>Image from @dhanavadh</p>            
          </div>
        </div>   

        {/* Heading */}
        <div className='blog-heading'>
            <p className='bloh-reading'>N/A minutes Reading</p>
          <p className='title'>Drawback ของการสร้าง backend server ด้วย free service</p>
          <p className='sub-title-article mt-2'>Drawback ของการสร้าง backend server ด้วย free service</p>          
        </div>                                     
        {/* Paragraph */}        
        <div className='max-w-[1000px]'>
          <div className='paragraph'>
            <p>บทความยังไม่เผยแพร่</p>
          </div>   
        </div>

        {/* Author */}
        <Author />

        {/* Reference */}
        <div className='blog-reference'>
          <p className='h3'>Reference</p>
          {Reference.map((item) => (
            <ul className='p my-2 list-disc ml-4' key={item.id}>
            <li>
                <p>{item.name}</p>
                <Link href={item.link} className='link' target='_blank'>Get this reference →</Link>
            </li>
            </ul>      
          ))}    
        </div>  
        {/* Navigator */}          
    </div>
  )
}

export default BlogArtsgozBE