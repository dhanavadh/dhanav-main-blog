"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

const Slider = () => {
  return (
    <>
        <Swiper    
        cssMode={true}    
        // navigation={true}
        pagination={{
            clickable: true,
          }}    
        mousewheel={true}
        keyboard={true}    
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper font-[family-name:var(--font-noto-sans)]"
      >

        {/* Parent Please Clone From This */}
        <SwiperSlide>
            <div className='slider-core'>   
                     
                <video width="full" autoPlay loop muted preload='auto' playsInline className='absolute z-[-1] w-full h-full object-cover brightness-50'>
                    <source src="/content/port-redesign/blog-preview.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <img src='/banner/blog-1.svg/' className='flex absolute z-[-1] w-full h-full object-cover brightness-50'></img>                 */}
                <div className='text-area-padding'>
                    <div className='flex gap-2'>
                        <Link href='/blogs/coding/port-redesign' className='slider-title-section link-white'>เมื่อผมเอาความรู้ UX/UI มาปรับปรุง Portfolio ของผม→</Link>
                    </div>
                    <p className='subtitle-section'>ความรู้เรื่อง User Experience นับว่าสำคัญมากสำหรับการพัฒนาเว็บไซต์ ผมจึงเอาความรู้เรื่อง UX/UI Design Principles มาปรับปรุง Portfolio ของตัวเอง</p>
                </div>
            </div>
        </SwiperSlide> 

        <SwiperSlide>
            <div className='slider-core'>             
                <img src='/content/blueprint-proj/IMG_20250125_0001.jpeg' className='flex absolute z-[-1] w-full h-full object-cover brightness-50'></img>                
                <div className='text-area-padding'>
                    <div className='flex gap-2'>
                        <Link href='/blogs/coding/blueprint-project' className='slider-title-section link-white'>ใบฟ้า – แอปช่วยจัดตารางเรียน →</Link>
                    </div>
                    
                    <p className='subtitle-section'>เคยไหมครับที่เรียนไปสองปีแล้ว เหลืออีกสองปีก็จะเรียนจบ แต่ยังไม่รู้เลยว่าเราเรียนอะไรไปแล้วบ้าง เราเหลืออะไรที่ยังต้องเรียนอีก ยังลงได้อีกกี่หน่วยกิต วิชาบังคับเอกเรียนครบหรือยัง และคำถามอื่น ๆ ตามมากันหมด</p>
                </div>
            </div>
        </SwiperSlide> 
        

        <SwiperSlide>
            <div className='slider-core'>             
                <video width="full" autoPlay loop muted preload='auto' playsInline className='absolute z-[-1] w-full h-full object-cover brightness-50'>
                    <source src="/content/artsgoz/artsgoz.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='text-area-padding'>
                    <div className='flex gap-2'>
                        <Link href='/blogs/coding/artsgoz-frontend' className='slider-title-section link-white'>สำรวจหน้าบ้านของเว็บไซต์ Artsgoz →</Link>
                    </div>
                    <p className='subtitle-section'>ผมจะพาชมครับว่ากว่าจะมาเป็นเว็บไซต์ กอศ อันใหม่ ผมต้องทำการบ้านยังไงบ้าง เว็บ artsgoz อาจนับว่าเป็น debut project ของผมเลยก็ว่าได้ครับ ทุกวันนี้ยังมีการปรับปรุงอยู่เรื่อย ๆ ครับ</p>
                </div>
            </div>
        </SwiperSlide> 

        <SwiperSlide>
            <div className='slider-core'>             
                <img src='/banner/buddhism.svg' className='flex absolute z-[-1] w-full h-full object-cover brightness-50'></img>                
                <div className='text-area-padding'>
                    <div className='flex gap-2'>
                        <Link href='/blogs/other/buddhism-freewill' className='slider-title-section link-white'>พุทธศาสนาและเจตจำนงเสรีบางประการ →</Link>
                    </div>
                    
                    <p className='subtitle-section'>แนวคิดพุทธศาสนาเกี่ยวกับเจตจำนงเสรีนั้นมีจริงหรือไม่ และถ้ามีจริง มีผลต่อการทำความเข้าใจเรื่องการกระทำของมนุษย์หรือไม่? แล้วถ้าเกิดพุทธศาสนาไม่มีเจตจำนงเสรี ผลของการรับผิดชอบเรื่องกรรมจะตกที่ใคร?</p>
                </div>
            </div>
        </SwiperSlide> 

        <SwiperSlide>
            <div className='slider-core'>             
                <img src='/banner/webremake.svg' className='flex absolute z-[-1] w-full h-full object-cover brightness-50'></img>                
                <div className='text-area-padding'>
                    <div className='flex gap-2'>
                        <Link href='/blogs/coding/recap-port' className='slider-title-section link-white'>Review พอร์ตโฟลิโอของผมที่สร้างแบบยังไม่รู้เรื่อง UX →</Link>                        
                    </div>                    
                    <p className='subtitle-section'>จากคนที่สร้างเว็บโดยที่ใช้ความรู้สึกโดยไม่มีความรู้เรื่อง User Experience เลย มาสู่การรีเมคเว็บไซต์ของตัวเองให้เข้าถึง user ทุกคน ผมจึงรู้สึกว่าความรู้เรื่อง UX สำคัญมาก ๆ สำหรับนักพัฒนาเว็บ frontend</p>
                </div>
            </div>
        </SwiperSlide> 
        

        

        
      </Swiper>
    </>
  )
}

export default Slider