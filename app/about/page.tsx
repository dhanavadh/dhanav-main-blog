import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const bio = `I’m a Japanese major with a passion for web development and UI design. I love coding because it lets me bring ideas to life while keeping things organized and structured, which I really enjoy.`
const bio2 = `Outside of programming, I love playing karuta, a traditional Japanese card game. I’m also a member of the Bangkok Karuta Club. I’m always looking for new opportunities to learn and grow, so feel free to reach out to me!`

const Skills = [
    {id: 1, name: 'UX Researching/UI Designing', description: 'Experienced in Figma and Adobe XD'},
    {id: 2, name: 'Fullstack Web Development', description: 'TypeScript, Node.js, TailwindCSS. Express.js are available'},
    {id: 3, name: 'Data Analytics', description: 'Tools like Python, Pandas, NumPy, and Matplotlib are my go-to for data analysis.'},
    
]

const AboutMe = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen font-[family-name:var(--font-noto-sans)] px-4'>    
        <div className='md:flex items-start'>
            {/* Info */}
            <div className='px-4 py-2 text-white max-w-xl mb-4'> 
                    
                    {/* Heading */}
                    <p className='text-body mb-2'>About Me</p>       
                    <p className='title'>Dhanavadh Saito</p>
                    <p className='sub-title'>ธนวัฒน์ ซาอิโตะ</p>     

                    {/* Bio */}
                    <p className='p mt-4'>I’m a Japanese major with a passion for <a className='underline-highlight'>web development</a> and <a className='underline-highlight'>UI design</a>. I love coding because it lets me bring ideas to life while keeping things organized and structured, which I really enjoy.</p>
                    <p className='p mt-2'>Outside of programming, I love playing <a className='underline-highlight'>karuta</a>, a traditional Japanese card game. I’m also a member of the Bangkok Karuta Club. I’m always looking for new opportunities to learn and grow, so feel free to reach out to me!</p>

                    {/* Contact */}
                    <p className='h3 mt-6 mb-2'>Reach me via</p>
                    <div className='flex flex-col gap-1'>                    
                        <Link
                        className="flex items-center gap-2 link"
                        href="mailto:dhanavadh@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <Image
                            aria-hidden
                            src="icons/mail.svg"
                            alt="mail"
                            width={16}
                            height={16}
                        />
                        dhanavadh@gmail.com
                        </Link>
                        <Link
                        className="flex items-center gap-2 link"
                        href="https://github.com/dhanavadh"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <Image
                            aria-hidden
                            src="/github-mark.svg"
                            alt="GitHub icon"
                            width={16}
                            height={16}
                        />
                        @dhanavadh
                        </Link>
                        <Link
                        className="flex items-center gap-2 link"
                        href="https://www.linkedin.com/in/dhanav/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <Image
                            aria-hidden
                            src="/ln.svg"
                            alt="LinkedIn icon"
                            width={16}
                            height={16}
                        />
                        @dhanav
                        </Link>
                    </div>
            </div>
            {/* Skills */}
            <div className='border-l-4 border-pink-500'>
                <ul>          
                {/* <li className='px-4 py-2 text-white'>       
                    <p className='text-body mb-4'>About Me</p>       
                    <p className='title'>Dhanavadh Saito</p>
                    <p className='sub-title'>ธนวัฒน์ ซาอิโตะ</p>     
                </li> */}
                <li className='flex items-start px-4 py-2 text-white'>
                    <Image src='./icons/school_w.svg' alt='logo' width={32} height={32} className='mr-4 hover:gray-200'/>
                    <div>
                    <p className='h3'>3rd Year Student</p>
                    <p className='text-base'>Faculty of Arts, Chulalongkorn University</p>
                    <p className='text-base mt-2 w-64'>Majoring in Japanese Language, I find myself web developing when it was too late but it's possible so I started coding.</p>
                    </div>

                </li>
                <li className='flex items-start px-4 py-2 text-white'>
                    <Image src='./icons/lang_w.svg' alt='logo' width={32} height={32} className='mr-4 hover:gray-200'/>
                    <div>
                    <p className='h3 pb-1'>Japanese, Thai, English Available!</p>                
                    <p className='text-base mt-2 w-64'>N2 Certified for Japanese, Native Thai and, Professional Level English</p>
                    </div>

                </li>
                <li className='text-white items-start px-4 py-2'>
                    <div className='flex items-start'>
                        <Image src='./icons/star_w.svg' alt='logo' width={32} height={32} className='mr-4 hover:gray-200'/>
                        <div>
                            <p className='h3 pb-1'>Skills</p> 
                            <div className=''>
                                {Skills.map((skill) => (
                                    <ul key={skill.id} className='gap-2'>
                                        <li className='list-item'>
                                            <p className='text-base font-semibold mt-2 mb-1'> {skill.name}</p>
                                            <p className='text-base w-64 ml-4'>{skill.description}</p>
                                        </li>                                
                                    </ul>
                                ))}      
                            </div>    
                        </div>  
                    </div>                

                </li>
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default AboutMe