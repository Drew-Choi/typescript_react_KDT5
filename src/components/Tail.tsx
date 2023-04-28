import React, { useState } from 'react'

export default function Tail() {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleMenu = ():void => {
    setToggle((cur:boolean) => !cur)
  }

  return (
   <nav className='w-auto pr-10 bg-slate-100 px-10'>
    <div className='flex justify-between py-5'>
      <ul className='flex gap-16'>
        <li className='py-2 flex font-extrabold cursor-pointer'>Tetz
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
</svg>

        </li>
        <li className='hidden md:block py-2 font-semibold cursor-pointer text-slate-500'>menu 1</li>
        <li className='hidden md:block py-2 font-semibold cursor-pointer text-slate-500'>menu 2</li>
        <li className='hidden md:block py-2 font-semibold cursor-pointer text-slate-500'>menu 3</li>
      </ul>
      <a href='#' className='hidden md:block py-2 px-3 text-white font-bold bg-orange-500 hover:bg-slate-600 rounded duration-300'>로그인</a>



      {/* 모바일 메뉴 파트 */}
      <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mr-2 text-orange-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
     
      </div>
      
    </div>
          {/* 모바일 토글 파트 */}
      <div className={toggle ? "md:hidden py-3" : "hidden py-3"}>
        <a href="#" className="block py-2 px-4 hover:bg-slate-200">
          Menu1
        </a>
        <a href="#" className="block py-2 px-4 hover:bg-slate-200">
          Menu2
        </a>
        <a href="#" className="block py-2 px-4 hover:bg-slate-200">
          Menu3
        </a>
      </div>
   </nav>
  )
}
