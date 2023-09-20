import Header from "../components/header";
import readyToUse from '../icons/ready-to-use.png'
import { Fragment, useState } from 'react'
import { Dialog, Transition, Switch, RadioGroup } from '@headlessui/react'
import { Share06, Edit05, Image01, FaceSmile, Menu02, Edit01, ChevronLeft, Link01, Grid01, Trash01 } from "@untitled-ui/icons-react";
import EmojiPicker, { Emoji } from "emoji-picker-react";
import DotsVertical from "../icons/dotsVertical";
import Facebook from "../icons/facebook";
import Instagram from "../icons/instagram";
import Twitter from "../icons/twitter";
import zaviago from '../icons/zaviago-com.svg'
import { Link } from "react-router-dom";
import EditProfile from "./edit-profile";
import bio from '../icons/icon.svg'
import UpperLink from "../icons/upperLink";
import LowerLink from "../icons/lowerLink";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Profile = () => {
  const [openReady, setOpenReady] = useState(true)
  const [openEdit, setOpenEdit] = useState(false)
  const [openAddButton, setOpenAddButton] = useState(false)
  const [openEditButton, setOpenEditButton] = useState(false)
  const [name, setName] = useState('Olivia')
  const [image, setImage] = useState(false)
  const [emoji, setEmoji] = useState(false)
  const [addBtnMenuActive, setAddBtnMenuActive] = useState(0)

  const [enabled, setEnabled] = useState(false)

  const [goNextSlideLeft, setGoNextSlideLeft] = useState(false);
  const [goNextSlideRight, setGoNextSlideRight] = useState(false);
  const [goBackSlideLeft, setGoBackSlideLeft] = useState(false);
  const [goBackSlideRight, setGoBackSlideRight] = useState(false);

  const [page, setPage] = useState('');

  const goPrevTo = (p) => {
    setGoBackSlideRight(true);
    setTimeout(() => {
      setGoBackSlideRight(false);
      setGoBackSlideLeft(true);
      setPage(p);
    }, 600)
    setTimeout(() => {
      setGoBackSlideLeft(false);
    }, 1200)
  }

  const goNextTo = (p) => {
    setGoNextSlideLeft(true);
    setTimeout(() => {
      setGoNextSlideRight(true);
      setGoNextSlideLeft(false);
      setPage(p);
    }, 600)
    setTimeout(() => {
      setGoNextSlideRight(false);
    }, 1200)
  }

  const [occupations, setOccupations] = useState(['Editor', 'creative', 'Influencer'])

  const shortcutDisplay = [
    { id: 1, title: 'ด้านบนของลิงก์', img: <UpperLink />},
    { id: 2, title: 'ด้านล่างของลิงก์', img: <LowerLink /> },
  ]
  
  const [selectedShortcutDisplay, setSelectedShortcutDisplay] = useState(shortcutDisplay[0])
  const [numOfIconInputs, setNumOfIconInputs] = useState(1);
  const [shortcutIconInputs, setShortcutIconInputs] = useState([{
    key:numOfIconInputs
  }])

  const IconInput = ({key}) => {
    const iconInputs = [];

    for (let i = 0; i < numOfIconInputs; i++){
      iconInputs.push(
        <div key={key} className="mb-4">
          <div className="px-4 flex items-center gap-x-[10px]">
            <div>
              <DotsVertical color='#75777A'/>
            </div>
            <div className="flex flex-col gap-y-[6px] grow">
              <input type='text' className="form-input with-shadow" name='icon-link' id='icon-link' placeholder="ชื่อลิงก์"/>
            </div>
            <div>
              <Trash01 color='#F04438' onClick={() => {
                iconInputs.splice(key, 1);
                setNumOfIconInputs(numOfIconInputs - 1)
              }}/>
            </div>
          </div>
        </div>
      )
    }

    return iconInputs;
  }

  return (
    <>
      <header className="border-b border-b-gray-200">
        <div className={`${goNextSlideLeft ? 'go-next-slide-left' : goNextSlideRight ? 'go-next-slide-right' : goBackSlideLeft ? 'go-back-slide-left' : goBackSlideRight ? 'go-back-slide-right' : ''}`}>
          {page === 'edit' ? (
            <header className='px-4 py-3 flex items-center justify-between h-[64px]'>
              <button onClick={() => goPrevTo('')} className="text-[#FF4A00] font-bold">ยกเลิก</button>
              <h2 className="text-gray-900 font-bold">แก้ไข</h2>
              <button className="text-[#FF4A00] font-bold">บันทึก</button>
            </header>
          ) : (
            <header className='px-4 py-3 flex items-center justify-between h-[64px]'>
              <div className='flex gap-x-[10px]'>
                <img src={bio} />
                <h1 className='text-gray-900 inter font-semibold text-xl'>hitlink</h1>
              </div>

              <button>
                <Menu02 />
              </button>
            </header>
          )}
        </div>
      </header>

      <main className={`${goNextSlideLeft ? 'go-next-slide-left' : goNextSlideRight ? 'go-next-slide-right' : goBackSlideLeft ? 'go-back-slide-left' : goBackSlideRight ? 'go-back-slide-right' : ''}`}>
        {page === 'edit' ? (
          <>
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
                  <div className='w-7 h-7 pt-[1px] bg-[#FFE9DD] rounded-full absolute bottom-0 right-0 flex justify-center items-center'>
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
                  <DotsVertical color='#75777A'/>
                  <button className="p-4 bg-[#F2C27A] text-[#AC6625] rounded-[999px] h-[52px] noto w-full" onClick={() => setOpenEditButton(true)}>ลิงก์ Link</button>
                </div>
                <div className="flex items-center gap-x-2">
                  <DotsVertical color='#75777A'/>
                  <button className="p-4 bg-[#F2C27A] text-[#AC6625] rounded-[999px] h-[52px] noto w-full" onClick={() => setOpenEditButton(true)}>ลิงก์ Link</button>
                </div>
                <div className="flex items-center gap-x-2">
                  <DotsVertical color='#75777A'/>
                  <button className="p-4 bg-[#F2C27A] text-[#AC6625] rounded-[999px] h-[52px] noto w-full" onClick={() => setOpenEditButton(true)}>ลิงก์ Link</button>
                </div>
              </div>

              <div className="flex justify-center gap-x-5 mt-6">
                <Facebook color='#492B07'/>
                <Instagram color='#492B07'/>
                <Twitter color='#492B07'/>
              </div>
            </section>
          </>
        ) : (
          <>
          <section className="px-4 pb-6 pt-[30px] border-b border-b-gray-200">
            <h1 className="text-left text-gray-900 text-[24px] font-bold">ยินดีต้อนรับ, คุณ {name}</h1>
            <div className="flex gap-x-2 mt-4">
              <button className="secondary-btn gap-x-2 flex items-center justify-center" style={{padding:"10px 0"}} onClick={() => setOpenEdit(true)}>
                <Edit05 />
                แก้ไข
              </button>
              <button
                className="main-btn gap-x-2 flex items-center justify-center" style={{padding:"10px 0"}}
              >
                <Share06 />
                แชร์
              </button>
            </div>
          </section>

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
                <div className='w-7 h-7 pt-[1px] bg-[#FFE9DD] rounded-full absolute bottom-0 right-0 flex justify-center items-center'>
                  <Emoji unified={selectedEmoji} size={24}/>
                </div>
              ) : (
                <div className='w-7 h-7 pt-[1px] bg-[#FFE9DD] rounded-full absolute bottom-0 right-0 flex justify-center items-center'>
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
              <button className="p-4 bg-[#F2C27A] text-[#AC6625] rounded-[999px] h-[52px] noto">ลิงก์ Link</button>
              <button className="p-4 bg-[#F2C27A] text-[#AC6625] rounded-[999px] h-[52px] noto">ลิงก์ Link</button>
              <button className="p-4 bg-[#F2C27A] text-[#AC6625] rounded-[999px] h-[52px] noto">ลิงก์ Link</button>
            </div>

            <div className="flex justify-center gap-x-5 mt-6">
              <Facebook color='#492B07'/>
              <Instagram color='#492B07'/>
              <Twitter color='#492B07'/>
            </div>
          </section>
          </>
        )}
      </main>

      <button onClick={() => setOpenAddButton(true)} className="main-btn fixed right-4 bottom-6 items-center justify-center flex w-[52px] h-[40px] opacity-0" style={{padding:0,animation:page === 'edit' ? 'fadeIn 500ms forwards, bounceAnim 6s ease-in-out infinite' : 'fadeOut 500ms forwards',animationDelay:page === 'edit' ? "800ms" : '0ms'}}>
        <Edit01 color='white' viewBox='0 0 24 24'/>
      </button>

      <footer className={`${goNextSlideLeft ? 'go-next-slide-left' : goNextSlideRight ? 'go-next-slide-right' : goBackSlideLeft ? 'go-back-slide-left' : goBackSlideRight ? 'go-back-slide-right' : ''}`}>
        <h3 className='mt-10 mb-[30px] flex justify-center items-center gap-x-1 text-[8px]'>
          Powered by <img src={zaviago} />
        </h3>
      </footer>

      <Transition.Root show={openReady} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenReady}>
          <Transition.Child
            as={Fragment}
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-6 text-center">
              <Transition.Child
                as={Fragment}
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl w-full">
                  <div>
                    <div className="bg-[#FFE9DD] py-4">
                      <img src={readyToUse} className="m-auto"/>
                    </div>
                    <div className="mt-5 text-center">
                      <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-gray-900">
                        Hitlink ของคุณ<br/>พร้อมใช้งานแล้ว🎉
                      </Dialog.Title>
                    </div>
                  </div>
                  <div className="m-5 flex flex-col gap-y-3">
                    <button
                      className="secondary-btn"
                      onClick={() => setOpenReady(false)}
                    >
                      ดำเนินการต่อ
                    </button>
                    <button
                      className="main-btn gap-x-2 flex items-center justify-center"
                      onClick={() => setOpenReady(false)}
                    >
                      <Share06 />
                      แชร์เลย
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openEdit} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenEdit}>
          <Transition.Child
            as={Fragment}
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-6 text-center">
              <Transition.Child
                as={Fragment}
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl w-full">
                  <div>
                    <div className="bg-[#FFE9DD] py-4">
                      <img src={readyToUse} className="m-auto"/>
                    </div>
                    <div className="mt-5 text-center">
                      <Dialog.Title as="h3" className="text-lg text-left font-bold leading-6 text-gray-900 px-4">
                        คุณสามารถแก้ไข Hitlink ของ<br/>คุณได้ โดยกดที่ปุ่ม "แก้ไข"
                      </Dialog.Title>
                    </div>
                  </div>
                  <div className="m-5 flex flex-col gap-y-3">
                    <button
                      className="secondary-btn text-center"
                      onClick={() => {
                        goNextTo('edit');
                        setOpenEdit(false)
                      }}
                    >
                      รับทราบ
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openAddButton} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenAddButton}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-t-[40px] bg-white text-left shadow-xl transition-all sm:my-8 w-full">
                  <div className="flex justify-center flex-col">
                    <div className="text-center p-4 border-b border-b-[#EAECF0]">
                      <Dialog.Title as="h3" className="text-base font-bold leading-6 text-[#101828] relative">
                        <button className="absolute left-0" onClick={() => setOpenAddButton(false)}>
                          <ChevronLeft color='#667085'/>
                        </button>
                        เพิ่มปุ่ม
                      </Dialog.Title>
                    </div>

                    {addBtnMenuActive === 0 && (
                      <div className="p-4">
                        <Dialog.Description as='p' className='text-gray-600 text-sm text-center'>
                          กรุณาเลือกไอคอนและระบุ Url ของไอคอน
                        </Dialog.Description>

                        <div className="flex gap-x-[10px] items-center mt-4">
                          <label htmlFor='uploadImg'>
                            <div className="w-[86px] h-[86px] rounded-lg bg-[#FFE9DD] flex items-center justify-center text-[50px] text-white font-bold">
                              <Image01 color='#FF4A00' />
                            </div>

                            <input type='file' id='uploadImg' name='profile-img' className='hidden'/>
                          </label>

                          <div className="flex flex-col gap-y-[6px] w-full">
                            <input type='text' className="form-input" placeholder="ชื่อปุ่ม"/>
                            <input type='text' className="form-input" placeholder="www.example.com"/>
                          </div>
                        </div>
                      </div>
                    )}

                    {addBtnMenuActive === 2 && (
                      <div className="p-4">
                        <Dialog.Description as='p' className='text-gray-600 text-sm text-center'>
                          กรุณาเลือกไอคอนและระบุ Url ของไอคอน
                        </Dialog.Description>

                      <div className="overflow-y-auto mt-4" style={{height:"calc(100vh - 340px)"}}>
                        {shortcutIconInputs.map((index) => 
                          <IconInput key={index}/>
                        )}
                        <div className="px-4">
                          <button className="main-btn no-bg" onClick={() => {
                            setNumOfIconInputs(numOfIconInputs + 1)
                          }}>เพิ่มไอคอน</button>
                        </div>
                        <hr className="border-gray-200 my-6"/>

                        <div className="mt-6 px-4">
                          <RadioGroup value={selectedShortcutDisplay} onChange={setSelectedShortcutDisplay}>
                            <RadioGroup.Label className="text-[#344054] text-sm">ตำแหน่งของปุ่มลัด</RadioGroup.Label>

                            <div className="mt-4 grid grid-cols-2 gap-x-[10px]">
                              {shortcutDisplay.map((list) => (
                                <RadioGroup.Option
                                  key={list.id}
                                  value={list}
                                  className={({ checked, active }) =>
                                    classNames(
                                      checked ? 'border-transparent bg-[#FFE9DD]' : 'border-gray-300 bg-white',
                                      'relative flex cursor-pointer rounded-lg border p-4 shadow-sm :outline-none'
                                    )
                                  }
                                >
                                  {({ checked, active }) => (
                                    <>
                                      <span className="flex flex-1 justify-center">
                                        <span className="flex flex-col">
                                          <RadioGroup.Label as="span" className="block mx-auto">
                                            {list.img}
                                          </RadioGroup.Label>
                                          <RadioGroup.Description as="span" className="mt-[14px] text-sm text-[#344054]">
                                            {list.title}
                                          </RadioGroup.Description>
                                        </span>
                                      </span>
                                      <span
                                        className={classNames(
                                          active ? 'border' : 'border',
                                          checked ? 'border-[#FF4A00]' : 'border-transparent',
                                          'pointer-events-none absolute -inset-px rounded-lg'
                                        )}
                                        aria-hidden="true"
                                      />
                                    </>
                                  )}
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </div>
                    )}

                    <div className="p-4 flex">
                      <button
                        className="main-btn"
                        onClick={() => setOpenAddButton(false)}
                      >
                        ยืนยัน
                      </button>
                    </div>

                    <div className="px-4 py-[9px] border-t border-t-[#EAECF0] relative">
                      <button onClick={() => setAddBtnMenuActive(0)} className={`text-center p-2 w-1/3 rounded-lg text-xs ${addBtnMenuActive === 0 ? 'bg-[#FFE9DD] text-[#FF4A00]' : 'bg-white text-black'}`}>
                        <Link01 className="mx-auto"/>
                        เพิ่มปุ่ม
                      </button>
                      <button onClick={() => setAddBtnMenuActive(1)} className={`text-center p-2 w-1/3 rounded-lg text-xs ${addBtnMenuActive === 1 ? 'bg-[#FFE9DD] text-[#FF4A00]' : 'bg-white text-black'}`}>
                        <Grid01 className="mx-auto"/>
                        เทมเพลต
                      </button>
                      <button onClick={() => setAddBtnMenuActive(2)} className={`text-center p-2 w-1/3 rounded-lg text-xs ${addBtnMenuActive === 2 ? 'bg-[#FFE9DD] text-[#FF4A00]' : 'bg-white text-black'}`}>
                        <Link01 className="mx-auto"/>
                        ปรับแต่ง
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openEditButton} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenEditButton}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-t-[40px] bg-white text-left shadow-xl transition-all sm:my-8 w-full">
                  <div className="flex justify-center flex-col">
                    <div className="text-center p-4 border-b border-b-[#EAECF0]">
                      <Dialog.Title as="h3" className="text-base font-bold leading-6 text-[#101828] relative">
                        <button className="absolute left-0" onClick={() => setOpenAddButton(false)}>
                          <ChevronLeft color='#667085'/>
                        </button>
                        แก้ไขปุ่ม
                      </Dialog.Title>
                    </div>

                    <div className="p-4">
                      <Dialog.Description as='p' className='text-gray-600 text-sm text-center'>
                        กรุณากรอกชื่อปุ่มและระบุ Url ของปุ่ม
                      </Dialog.Description>

                      <div className="flex gap-x-[10px] items-center mt-4">
                        <label htmlFor='uploadImg'>
                          <div className="w-[86px] h-[86px] rounded-lg bg-[#FFE9DD] flex items-center justify-center text-[50px] text-white font-bold">
                            <Image01 color='#FF4A00' />
                          </div>

                          <input type='file' id='uploadImg' name='profile-img' className='hidden'/>
                        </label>

                        <div className="flex flex-col gap-y-[6px] w-full">
                          <input type='text' className="form-input" placeholder="ชื่อปุ่ม"/>
                          <input type='text' className="form-input" placeholder="www.example.com"/>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-6">
                        <h2 className="text-gray-700">แสดงปุ่มนี้บนหน้าโปรไฟล์</h2>
                        <Switch
                          checked={enabled}
                          onChange={setEnabled}
                          className={classNames(
                            enabled ? 'bg-[#0788F5]' : 'bg-gray-200',
                            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out outline-none'
                          )}
                        >
                          <span className="sr-only">Use setting</span>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              enabled ? 'translate-x-5' : 'translate-x-0',
                              'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                            )}
                          />
                        </Switch>
                      </div>
                    </div>

                    <div className="p-4 flex">
                      <button
                        className="main-btn"
                        onClick={() => setOpenEditButton(false)}
                      >
                        ยืนยัน
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default Profile;