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

const BlogPortRemake = () => {
  return (
    <div className='blog-panel'>
        {/* Banner */}
        <div className='flex max-h-3/4 max-w-full relative -z-[1]'>
          <img src='/banner/blog-1.svg' className='blog-banner'></img>                        
          <div className='blog-banner-object'>            
            <p className='ref-image'>Image from @dhanavadh</p>            
          </div>
        </div>   

        {/* Heading */}
        <div className='blog-heading'>
            <p className='blog-reading'>N/A minutes Reading</p>
          <p className='title'>เมื่อผมเอา UX/UI Design Principles มาปรับปรุง Portfolio ของผม</p>
          <p className='sub-title-article mt-2'>จากคนที่สร้างเว็บโดยที่ใช้ความรู้สึกโดยไม่มีความรู้เรื่อง User Experience เลย มาสู่การรีเมคเว็บไซต์ของตัวเองให้เข้าถึง user ทุกคน ผมจึงรู้สึกว่าความรู้เรื่อง UX สำคัญมาก ๆ สำหรับนักพัฒนาเว็บ frontend</p>          
        </div>                                     
        {/* Paragraph */}        
        <div className='paragraph'>
          <p>บทความยังไม่เผยแพร่</p>
        </div>   

        {/* Author */}
        <div className='blog-author'>
          <p className='h3 mb-2'>Crafted by</p>
          <div className='flex items-center'>
            <Image src='/profile.png' alt='writer-img' width={64} height={64} className='rounded-full brightness-110'></Image>
            <div className='ml-3'>
              <p className='h4'>Dhanavadh Saito</p>
              <Link href='/' className='link'>@dhanavadh</Link>
            </div>
          </div>            
        </div>

        {/* Reference */}
        <div className='h3 border-l-4 border-blue-500 pl-4'>
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

export default BlogPortRemake