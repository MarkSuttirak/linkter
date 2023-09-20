import { Link } from "react-router-dom";
import readyToUse from '../icons/ready-to-use.png'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Share06, Edit05, Image01, FaceSmile, DotsVertical } from "@untitled-ui/icons-react";
import EmojiPicker, { Emoji } from "emoji-picker-react";
import Facebook from "../icons/facebook";
import Instagram from "../icons/instagram";
import Twitter from "../icons/twitter";
import zaviago from '../icons/zaviago-com.svg'

const EditProfile = () => {
  const [name, setName] = useState('Olivia')
  const [image, setImage] = useState(false)
  const [emoji, setEmoji] = useState(false)
  const [occupations, setOccupations] = useState(['Editor', 'creative', 'Influencer'])

  return (
    <>
      <header className='px-4 py-3 flex items-center justify-between border-b border-b-gray-200 h-[64px]'>
        <Link to='/profile' className="text-[#FF4A00] font-bold">ยกเลิก</Link>
        <h2 className="text-gray-900 font-bold">แก้ไข</h2>
        <button className="text-[#FF4A00] font-bold">บันทึก</button>
      </header>

      <main>
        <section className="mt-[30px]">
          <div className='w-[96px] m-auto relative'>
            {image ? (
              <div className="w-[96px] h-[96px] rounded-full bg-[#FF4A00] flex items-center justify-center text-[50px] text-white font-bold">
                <img src='' />
              </div>
            ) : (
              <label htmlFor='uploadImg'>
                <div className="w-[96px] h-[96px] rounded-full bg-[#FF4A00] flex items-center justify-center text-[50px] text-white font-bold">
                  <Image01 color='white' />
                </div>

                <input type='file' id='uploadImg' name='profile-img' className='hidden'/>
              </label>
            )}

            {emoji ? (
              <div className='w-7 h-7 bg-[#FFE9DD] rounded-full absolute bottom-0 right-0 flex justify-center items-center'>
                <Emoji unified={selectedEmoji} size={24}/>
              </div>
            ) : (
              <div className='w-7 h-7 bg-[#FFE9DD] rounded-full absolute bottom-0 right-0 flex justify-center items-center'>
                <FaceSmile color='#FF4A00'/>
              </div>
            )}
          </div>
          
          <div className="mt-6">
            <h2 className="noto font-bold text-xl">{name}</h2>
            <p className="mt-[18px] noto">{occupations.join(" • ")}</p>
          </div>
        </section>

        <section className="mt-[34px] p-4">
          <h2 className="text-[#492B07] font-bold noto">รวมลิงก์ต่าง ๆ</h2>

          <div className="mt-4 flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <DotsVertical />
              <button className="p-4 bg-[#F2C27A] text-[#AC6625] rounded-[999px] h-[52px] noto w-full">ลิงก์ Link</button>
            </div>
            <div className="flex items-center gap-x-2">
              <DotsVertical />
              <button className="p-4 bg-[#F2C27A] text-[#AC6625] rounded-[999px] h-[52px] noto w-full">ลิงก์ Link</button>
            </div>
            <div className="flex items-center gap-x-2">
              <DotsVertical />
              <button className="p-4 bg-[#F2C27A] text-[#AC6625] rounded-[999px] h-[52px] noto w-full">ลิงก์ Link</button>
            </div>
          </div>

          <div className="flex justify-center gap-x-5 mt-6">
            <Facebook color='#492B07'/>
            <Instagram color='#492B07'/>
            <Twitter color='#492B07'/>
          </div>
        </section>
      </main>

      <footer className="pt-10 pb-[30px]">
        <h3 className='flex justify-center items-center gap-x-1 text-[8px]'>
          Powered by <img src={zaviago} />
        </h3>
      </footer>
    </>
  )
}

export default EditProfile;