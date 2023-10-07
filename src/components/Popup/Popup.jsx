import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Popup = ({ setClose, close }) => {

  // const [close, setClose] = useState(true)

  return (
    <div className='z-20 bg-black/50 overflow-hidden w-screen h-[calc(100%+500px)] overflow flex items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <section className=' min-w-[300px] max-w-xl relative mx-8 '>
        <AiOutlineClose
          className='CLOSE_POPUP backdrop-blur-xl bg-c-primary-900/70 hover:bg-c-primary-900/50 text-[#fff] max-sm:text-base text-xl h-fit font-medium rounded-md border border-c-primary-900 w-fit mx-auto p-5 max-sm:p-3 flex items-center justify-center gap-2 max-sm:gap-0 duration-150 absolute -top-7 max-sm:-top-4 -right-7 max-sm:-right-4 z-10'
          onClick={() => setClose(!close)}
        />
        <article className='POPUP_ARTILCE bg-white p-7 max-sm:p-4 rounded w-full'>
          <img
            src="https://media.glamour.com/photos/5851b8557f49a67d61570667/16:9/w_2991,h_1682,c_limit/GettyImages-75887937.jpg" alt=""
            className='mb-4 rounded'
          />
          <h1 className='text-black text-xl font-medium mb-4'>الاسم الخطأ</h1>
          <p className='text-black text-base max-sm:text-sm'>اضافت شركة ستاربكس فكرة جديدة بحيث يقوم الموظف بكتابة اسمك على الكوب وهذه فكرة جميلة لكن الابداع الجوهري بالفكرة انه تم ابلاغ جميع الموظفين بكتابة اسماء العملاء طريقة غير صحيحة وهنا كان الابداع حيث ان هذه الفكرة خلقت ردة فعل وتفاعل من العملاء ومشاركة الامر على وسائل التواصل الاجتماعي وهنا هققت شركة ستاربكس دعاية مجانية واثرت على مبيعاتهم بشكل ملحوظ</p>
        </article>
      </section>
    </div>
  )
}

export default Popup