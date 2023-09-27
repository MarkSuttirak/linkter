import readyToUse from '../icons/ready-to-use.png'
import { Fragment, useState } from 'react'
import { Dialog, Transition, RadioGroup } from '@headlessui/react'
import { Share06, Edit05, Image01, FaceSmile, Menu02, Edit01, ChevronLeft, ChevronDown, Link01, Grid01, Trash01, CheckCircle, MagicWand01, Globe02, MusicNotePlus, ChevronRight, TypeSquare, Copy06, Download01, User01, HomeSmile, LogOut01 } from "@untitled-ui/icons-react";
import EmojiPicker, { Emoji } from "emoji-picker-react";
import zaviago from '../icons/zaviago-com.svg'
import bioIcon from '../icons/icon.svg'
import DotsVertical from "../icons/dotsVertical";
import UpperLink from "../icons/upperLink";
import LowerLink from "../icons/lowerLink";
import templateOne from '../templates/template-one.png'
import templateTwo from '../templates/template-two.png'
import templateThree from '../templates/template-three.png'
import templateFour from '../templates/template-four.png'
import templateFive from '../templates/template-five.png'
import templateSix from '../templates/template-six.png'
import templateSeven from '../templates/template-seven.png'
import templateEight from '../templates/template-eight.png'
import QRCode from 'react-qr-code';
import { Facebook, Instagram, XTwitter, Tiktok, GoogleHangouts, Messenger, WhatsApp, Youtube, Gmail, LinkedIn, Kakaotalk, Line, WeChat, Tinder, Reddit, Clubhouse, Discord, Snapchat, Threads, Twitch } from '../icons/social-media'
import { Spotify, YoutubeMusic, Signal, Soundcloud, AppleMusic, Telegram, AppleFacetime, GoogleMaps, Pinterest, Giphy, Dropbox, Onedrive, WeTransfer, Patreon, Blogger, Deviantart, Invision, Behance, Dribbble, GoogleDrive } from '../icons/other-icons'
import { Amazon, Lazada, Shopee, TiktokShop, Linemyshop, Ebay, Shopify } from '../icons/shopping-icons';

const shortcutDisplay = [
  { id: 1, title: 'ด้านบนของลิงก์', img: UpperLink},
  { id: 2, title: 'ด้านล่างของลิงก์', img: LowerLink},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Profile = () => {
  const [bio, setBio] = useState('')
  const [openReady, setOpenReady] = useState(false)
  const [openAccountMenu, setOpenAccountMenu] = useState(false);
  const [openEdit, setOpenEdit] = useState(false)
  const [name, setName] = useState('Olivia');
  const [mylink, setMylink] = useState('hitlink.mylinkname');
  const [updateName, setUpdateName] = useState('');
  const [btnTitle, setBtnTitle] = useState('รวมลิงก์ต่าง ๆ');
  const [updateBtnTitle, setUpdateBtnTitle] = useState('');
  const [image, setImage] = useState(false)
  const [emoji, setEmoji] = useState(false)

  const [savedNoti, setSavedNoti] = useState(false);
  const [savedNotiAnim, setSavedNotiAnim] = useState('saved-noti-fade-in');
  const [savedNotiText, setSavedNotiText] = useState('');

  const showSavedNoti = (text) => {
    setSavedNoti(true);
    setSavedNotiAnim('saved-noti-fade-in');
    setSavedNotiText(text);
    setTimeout(() => {
      setSavedNotiAnim('saved-noti-fade-out')
    }, 5000)
    setTimeout(() => {
      setSavedNoti(false)
    }, 6000)
  }

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [openAddButtonModal, setOpenAddButtonModal] = useState(false)
  const [openChangeTitle, setOpenChangeTitle] = useState(false)
  const [openEditProfile, setOpenEditProfile] = useState(false)
  const [openShare, setOpenShare] = useState(false)
  const [selectCustomise, setSelectCustomise] = useState(false);

  const [addBtnMenuActive, setAddBtnMenuActive] = useState(0)
  const [shortcutMenuActive, setShortcutMenuActive] = useState(0)
  const [addShortcut, setAddShortcut] = useState(false) // false
  const [inputError, setInputError] = useState(false);

  const templates = [templateOne, templateTwo, templateThree, templateFour, templateFive, templateSix, templateSeven, templateEight];
  const [numTemplates, setNumTemplates] = useState(0);
  const selectedTemplate = templates[numTemplates];

  const [selectedShortcutDisplay, setSelectedShortcutDisplay] = useState(shortcutDisplay[0])
  const [numOfLinkInputs, setNumOfLinkInputs] = useState(1);
  const [numOfIconInputs, setNumOfIconInputs] = useState(0);
  const [shortcutIconInputs, setShortcutIconInputs] = useState([{
    key:numOfIconInputs
  }])

  const socialIcons = [
    (<Facebook />), (<Instagram />), (<XTwitter />), (<Tiktok />), (<Youtube />), (<Gmail />), (<LinkedIn />), (<Kakaotalk />), (<GoogleHangouts />), (<Line />),
    (<WeChat />), (<Messenger />), (<Tinder />), (<Reddit />), (<Clubhouse />), (<Discord />), (<WhatsApp />), (<Snapchat />), (<Threads />), (<Twitch />)
  ]

  const shoppingIcons = [
    (<Amazon />), (<Lazada />), (<Shopee />), (<TiktokShop />), (<HomeSmile />), (<Ebay />), (<Shopify />), (<Globe02 />), (<Linemyshop />)
  ]

  const otherIcons = [
    (<YoutubeMusic />), (<Signal />), (<Soundcloud />), (<Spotify />), (<AppleMusic />), (<Telegram />), (<AppleFacetime />), (<GoogleMaps />), (<Pinterest />),
    (<Giphy />), (<Dropbox />), (<Onedrive />), (<WeTransfer />), (<Patreon />), (<Blogger />), (<Deviantart />), (<Invision />), (<Behance />), (<Dribbble />), (<GoogleDrive />)
  ]

  const [listInputs, setListInputs] = useState([{
    key:numOfIconInputs
  }])

  const LinkInput = ({key}) => {
    const linkInputs = [];

    for (let i = 0; i < numOfLinkInputs; i++){
      linkInputs.push(
        <div key={key}>
          <div className="flex items-center gap-x-[10px]">
            <div className="flex flex-col gap-y-[6px] grow">
              <input type='text' className="form-input with-shadow" name='link-name' id='link-name' placeholder="ชื่อลิงก์"/>
              <input type='text' className="form-input with-shadow" name='url' id='url' placeholder="www.example.com"/>
              {inputError && (
                <p className="noto text-[#F04438] text-sm">กรุณาระบุรูปแบบ Url ที่ถูกต้อง</p>
              )}
            </div>
            <div>
              <Trash01 color='#F04438' onClick={() => {
                linkInputs.splice(key, 1);
                setNumOfLinkInputs(numOfLinkInputs - 1)
              }}/>
            </div>
          </div>

          <hr className="border-gray-200 my-6"/>
        </div>
      )
    }

    return linkInputs;
  }

  const IconInput = ({key, icon}) => {
    const iconInputs = [];
    for (let i = 0; i < numOfIconInputs; i++){
      iconInputs.push(
        <div key={key} className="mb-4">
          <div className="flex items-center gap-x-[10px]">
            <div>
              <DotsVertical color='#75777A'/>
            </div>
            <div className="flex flex-col gap-y-[6px] grow">
              <div className="flex rounded-md flex-row-reverse">
                <input
                  type='text'
                  name='icon-link' 
                  id='icon-link'
                  className="form-input with-prefix"
                  placeholder="ชื่อลิงก์"
                />
                <span className="input-addon form-prefix">
                  {icon}
                </span>
              </div>
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
                <img src={bioIcon} />
                <h1 className='text-gray-900 inter font-semibold text-xl'>hitlink</h1>
              </div>

              <button onClick={() => setOpenAccountMenu(true)}>
                <Menu02 />
              </button>
            </header>
          )}
        </div>
      </header>

      <main className={`${goNextSlideLeft ? 'go-next-slide-left' : goNextSlideRight ? 'go-next-slide-right' : goBackSlideLeft ? 'go-back-slide-left' : goBackSlideRight ? 'go-back-slide-right' : ''}`}>
        {page === 'edit' ? (
          <>
            <section className="flex h-[33px] items-center justify-center bg-[#FF4A00]">
              <p className="text-sm text-white">สามารถกดเพื่อเลือกสิ่งที่ต้องการแก้ไข</p>
            </section>
            <section className="px-4 py-3 border-b border-b-[#EAECF0]" onClick={() => setOpenEditProfile(true)}>
              <div className="flex justify-end">
                <Edit05 color='#FF4A00' viewBox='0 0 24 24' width='16' height='16'/>
              </div>
              <div className='w-[96px] m-auto relative'>
                {image ? (
                  <div className="img-profile">
                    <img src='' />
                  </div>
                ) : (
                  <label htmlFor='uploadImg'>
                    <div className="img-profile">
                      <Image01 color='white' />
                    </div>

                    <input type='file' id='uploadImg' name='profile-img' className='hidden'/>
                  </label>
                )}

                {emoji ? (
                  <div className='emoji-profile'>
                    <Emoji unified={selectedEmoji} size={24}/>
                  </div>
                ) : (
                  <div className='emoji-profile inactive'>
                    <FaceSmile color='#FF4A00'/>
                  </div>
                )}
              </div>

              <div className="mt-6">
                <h2 className="noto font-bold text-xl">{name}</h2>
                <p className="mt-[18px] noto">{occupations.join(" • ")}</p>
              </div>
            </section>

            <section className="px-4 py-3 border-b border-b-[#EAECF0]" onClick={() => setOpenChangeTitle(true)}>
              <div className="flex justify-end">
                <Edit05 color='#FF4A00' viewBox='0 0 24 24' width='16' height='16'/>
              </div>
              <h2 className="text-[#492B07] font-bold noto">{btnTitle}</h2>
            </section>

            <section className="px-4 py-3 border-b border-b-[#EAECF0]" onClick={() => setOpenAddButtonModal(true)}>
              <div className="flex justify-end">
                <Edit05 color='#FF4A00' viewBox='0 0 24 24' width='16' height='16'/>
              </div>
              <div className="mt-3 flex flex-col gap-y-4">
                <div className="flex items-center gap-x-2">
                  <button className="p-4 bg-[#F2C27A] text-[#AC6625] rounded-[999px] h-[52px] noto w-full">ลิงก์ Link</button>
                </div>
                <div className="flex items-center gap-x-2">
                  <button className="p-4 bg-[#F2C27A] text-[#AC6625] rounded-[999px] h-[52px] noto w-full">ลิงก์ Link</button>
                </div>
                <div className="flex items-center gap-x-2">
                  <button className="p-4 bg-[#F2C27A] text-[#AC6625] rounded-[999px] h-[52px] noto w-full">ลิงก์ Link</button>
                </div>
              </div>
            </section>

            <section className="px-4 py-3" onClick={() => {
              setOpenAddButtonModal(true);
              setAddBtnMenuActive(2);
              setSelectCustomise(true)
            }}>
              <div className="flex justify-end">
                <Edit05 color='#FF4A00' viewBox='0 0 24 24' width='16' height='16'/>
              </div>
              <div className="flex justify-center gap-x-5 mt-6">
                <Facebook color='#492B07'/>
                <Instagram color='#492B07'/>
                <XTwitter color='#492B07'/>
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
                onClick={() => setOpenShare(true)}
              >
                <Share06 />
                แชร์
              </button>
            </div>
          </section>

          <section className="mt-[30px]">
            <div className='w-[96px] m-auto relative'>
              {image ? (
                <div className="img-profile">
                  <img src='' />
                </div>
              ) : (
                <label htmlFor='uploadImg'>
                  <div className="img-profile">
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
            <h2 className="text-[#492B07] font-bold noto">{btnTitle}</h2>

            <div className="mt-4 flex flex-col gap-y-4">
              <button className="p-4 bg-[#F2C27A] text-[#AC6625] rounded-[999px] h-[52px] noto">ลิงก์ Link</button>
              <button className="p-4 bg-[#F2C27A] text-[#AC6625] rounded-[999px] h-[52px] noto">ลิงก์ Link</button>
              <button className="p-4 bg-[#F2C27A] text-[#AC6625] rounded-[999px] h-[52px] noto">ลิงก์ Link</button>
            </div>

            <div className="flex justify-center gap-x-5 mt-6">
              <Facebook color='#492B07'/>
              <Instagram color='#492B07'/>
              <XTwitter color='#492B07'/>
            </div>
          </section>
          </>
        )}
      </main>

      <button onClick={() => setOpenAddButtonModal(true)} className="main-btn fixed right-4 bottom-6 items-center justify-center flex w-[52px] h-[40px] opacity-0" style={{padding:0,animation:page === 'edit' ? 'fadeIn 500ms forwards, bounceAnim 6s ease-in-out infinite' : 'fadeOut 500ms forwards',animationDelay:page === 'edit' ? "800ms" : '0ms'}}>
        <Edit01 color='white' viewBox='0 0 24 24'/>
      </button>

      <footer className={`${goNextSlideLeft ? 'go-next-slide-left' : goNextSlideRight ? 'go-next-slide-right' : goBackSlideLeft ? 'go-back-slide-left' : goBackSlideRight ? 'go-back-slide-right' : ''}`}>
        <h3 className='mt-10 mb-[30px] flex justify-center items-center gap-x-1 text-[8px]'>
          Powered by <img src={zaviago} />
        </h3>
      </footer>

      <Transition.Root show={openAddButtonModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {
          setOpenAddButtonModal(false);
          setTimeout(() => {
            setSelectCustomise(false)
          }, 400)
        }}>
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
                        {addShortcut && (
                          <button className="absolute left-0" onClick={() => setAddShortcut(false)}>
                            <ChevronLeft color='#667085'/>
                          </button>
                        )}
                        {addBtnMenuActive === 0 && 'เพิ่มปุ่ม'}
                        {addBtnMenuActive === 1 && 'เทมเพลต'}
                        {addBtnMenuActive === 2 && <>{addShortcut === true ? 'เพิ่มปุ่มลัด' : 'ปรับแต่ง'}</>}
                      </Dialog.Title>
                    </div>

                    {addBtnMenuActive === 0 && (
                      <div className="p-4">
                        <Dialog.Description as='p' className='text-gray-600 text-sm text-center'>
                          กรุณาเลือกไอคอนและระบุ Url ของไอคอน
                        </Dialog.Description>

                        <div className="mt-4">
                          <div className="overflow-y-auto" style={{maxHeight:"calc(100vh - 380px)"}}>
                            {listInputs.map((index) => 
                              <LinkInput key={index}/>
                            )}
                            <button className="main-btn no-bg" onClick={() => {
                              if (numOfLinkInputs < 10){
                                setNumOfLinkInputs(numOfLinkInputs + 1)
                              } else {
                                setNumOfLinkInputs(numOfLinkInputs)
                              }
                            }} style={{color:"#FF4A00"}}>เพิ่มปุ่ม <span className='text-[#475467]'>({numOfLinkInputs}/10)</span></button>
                          </div>
                        </div>

                        <div className="pt-4 flex">
                          <button
                            className="main-btn"
                            onClick={() => {
                              setOpenAddButtonModal(false);
                              setTimeout(() => {
                                setSelectCustomise(false)
                              }, 400)
                            }}
                          >
                            ยืนยัน
                          </button>
                        </div>
                      </div>
                    )}

                    {addBtnMenuActive === 1 && (
                      <div className="overflow-y-auto grid grid-cols-2 gap-3 p-4" style={{height:"calc(100vh - 200px)"}}>
                        {templates.map((temp, index) => 
                          <button key={index} onClick={() => {
                            setNumTemplates(index);
                            setOpen(true)
                          }}>
                            <img src={temp} width='100%'/>
                          </button>
                        )}
                      </div>
                    )}

                    {addBtnMenuActive === 2 && (
                      <>
                        {selectCustomise ? (
                          <>
                            {addShortcut ? (
                            <div className="p-4">
                              <nav className="relative mb-[30px]">
                                <button onClick={() => setShortcutMenuActive(0)} className={`text-center font-bold p-2 w-1/3 rounded-lg text-sm ${shortcutMenuActive === 0 ? 'bg-[#FFE9DD] text-[#FF4A00]' : 'bg-white text-black'}`}>
                                  โซเชียล
                                </button>
                                <button onClick={() => setShortcutMenuActive(1)} className={`text-center font-bold p-2 w-1/3 rounded-lg text-sm ${shortcutMenuActive === 1 ? 'bg-[#FFE9DD] text-[#FF4A00]' : 'bg-white text-black'}`}>
                                  ชอปปิ้ง
                                </button>
                                <button onClick={() => setShortcutMenuActive(2)} className={`text-center font-bold p-2 w-1/3 rounded-lg text-sm ${shortcutMenuActive === 2 ? 'bg-[#FFE9DD] text-[#FF4A00]' : 'bg-white text-black'}`}>
                                  อื่น ๆ
                                </button>
                              </nav>

                              {shortcutMenuActive === 0 && (
                                <div className='flex gap-y-8 flex-wrap'>
                                  {socialIcons.map((icon, index) => 
                                    <button key={index} className='flex justify-center' style={{width:"20%"}} onClick={() => {
                                      setNumOfIconInputs(numOfIconInputs + 1);
                                      setAddShortcut(false);
                                    }}>{icon}</button>
                                  )}
                                </div>
                              )}

                              {shortcutMenuActive === 1 && (
                                <div className='flex gap-y-8 flex-wrap'>
                                  {shoppingIcons.map((icon, index) => 
                                    <button key={index} className='flex justify-center' style={{width:"20%"}} onClick={() => {
                                      setNumOfIconInputs(numOfIconInputs + 1);
                                      setAddShortcut(false);
                                    }}>{icon}</button>
                                  )}
                                </div>
                              )}

                              {shortcutMenuActive === 2 && (
                                <div className='flex gap-y-8 flex-wrap'>
                                  {otherIcons.map((icon, index) => 
                                    <button key={index} className='flex justify-center' style={{width:"20%"}} onClick={() => {
                                      setNumOfIconInputs(numOfIconInputs + 1);
                                      setAddShortcut(false);
                                    }}>{icon}</button>
                                  )}
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="p-4">
                              <Dialog.Description as='p' className='text-gray-600 text-sm text-center'>
                                กรุณาเลือกไอคอนและระบุ Url ของไอคอน
                              </Dialog.Description>

                              <div className="overflow-y-auto mt-4" style={{height:"calc(100vh - 340px)"}}>
                                {shortcutIconInputs.map((index) => 
                                  <IconInput key={index}/>
                                )}
                                <div>
                                  <button className="main-btn no-bg" onClick={() => {
                                    setAddShortcut(true)
                                    // setNumOfIconInputs(numOfIconInputs + 1)
                                  }}>เพิ่มไอคอน</button>
                                </div>
                                <hr className="border-gray-200 my-6"/>

                                <div className="mt-6">
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
                                                    {list.img(checked)}
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

                              <div className="pt-4 flex">
                                <button
                                  className="main-btn"
                                  onClick={() => {
                                    setOpenAddButtonModal(false);
                                    setTimeout(() => {
                                      setSelectCustomise(false)
                                    }, 500)
                                  }}
                                >
                                  ยืนยัน
                                </button>
                              </div>
                            </div>
                          )}
                          </>
                        ) : (
                          <div>
                            <button className='p-4 flex items-center justify-between w-full' onClick={() => {
                              setSelectCustomise(true)
                            }}>
                              <div className='flex items-center gap-x-3'>
                                <div className='flex bg-[#FF4A00] w-8 h-8 rounded-full items-center justify-center'>
                                  <MusicNotePlus color="white"/>
                                </div>
                                <div className='text-left'>
                                  <h2 className='text-gray-900 text-sm font-bold'>ไอคอน</h2>
                                  <p className='text-gray-600 text-para'>เพิ่มไอคอนสำหรับใช้เป็นปุ่มลัด</p>
                                </div>
                              </div>
                              <div>
                                <ChevronRight color='#667085'/>
                              </div>
                            </button>
                            <button className='p-4 flex items-center justify-between w-full' onClick={() => {
                              setOpenAddButtonModal(false);
                              setOpenChangeTitle(true)
                            }}>
                              <div className='flex items-center gap-x-3'>
                                <div className='flex bg-[#1877F2] w-8 h-8 rounded-full items-center justify-center'>
                                  <TypeSquare color="white"/>
                                </div>
                                <div className='text-left'>
                                  <h2 className='text-gray-900 text-sm font-bold'>หัวข้อปุ่ม</h2>
                                  <p className='text-gray-600 text-para'>เพิ่มไอคอนสำหรับระบุกลุ่มของปุ่ม</p>
                                </div>
                              </div>
                              <div>
                                <ChevronRight color='#667085'/>
                              </div>
                            </button>
                          </div>
                        )}
                      </>
                    )}

                    {!addShortcut && (
                      <nav className="px-4 py-[9px] border-t border-t-[#EAECF0] relative">
                        <button onClick={() => setAddBtnMenuActive(0)} className={`text-center p-2 w-1/3 rounded-lg text-xs ${addBtnMenuActive === 0 ? 'bg-[#FFE9DD] text-[#FF4A00]' : 'bg-white text-black'}`}>
                          <Link01 className="mx-auto" viewBox='0 0 24 24' width='16' height='16'/>
                          <span className='inline-block mt-[2px]'>เพิ่มปุ่ม</span>
                        </button>
                        <button onClick={() => setAddBtnMenuActive(1)} className={`text-center p-2 w-1/3 rounded-lg text-xs ${addBtnMenuActive === 1 ? 'bg-[#FFE9DD] text-[#FF4A00]' : 'bg-white text-black'}`}>
                          <Grid01 className="mx-auto" viewBox='0 0 24 24' width='16' height='16'/>
                          <span className='inline-block mt-[2px]'>เทมเพลต</span>
                        </button>
                        <button onClick={() => setAddBtnMenuActive(2)} className={`text-center p-2 w-1/3 rounded-lg text-xs ${addBtnMenuActive === 2 ? 'bg-[#FFE9DD] text-[#FF4A00]' : 'bg-white text-black'}`}>
                          <MagicWand01 className="mx-auto" viewBox='0 0 24 24' width='16' height='16'/>
                          <span className='inline-block mt-[2px]'>ปรับแต่ง</span>
                        </button>
                      </nav>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openChangeTitle} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenChangeTitle}>
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
                        <button className="absolute left-0" onClick={() => setOpenChangeTitle(false)}>
                          <ChevronLeft color='#667085'/>
                        </button>
                        เพิ่มหัวข้อปุ่ม
                      </Dialog.Title>
                    </div>

                    <div className="p-4">
                      <div className="flex gap-x-[10px] items-start">
                        <div className="flex flex-col gap-y-[6px] w-full">
                          <label htmlFor='btn-title' className="text-gray-700 font-medium text-sm">หัวข้อปุ่ม</label>
                          <textarea id='btn-title' className="form-input" style={{height:"80px"}} maxLength={40} value={updateBtnTitle} onChange={(e) => setUpdateBtnTitle(e.target.value)}/>
                          <p className="text-para mt-[6px] text-right">{updateBtnTitle.length}/40</p>
                        </div>
                      </div>

                      <div className="pt-4 flex">
                        <button
                          className="main-btn"
                          onClick={() => {
                            setOpenChangeTitle(false);
                            if (updateBtnTitle === ""){
                              setBtnTitle("รวมลิงก์ต่าง ๆ")
                            } else {
                              setBtnTitle(updateBtnTitle)
                              showSavedNoti('เพิ่มหัวข้อปุ่มสำเร็จ')
                            }
                          }}
                        >
                          ยืนยัน
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openShare} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenShare}>
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
                        <button className="absolute left-0" onClick={() => setOpenShare(false)}>
                          <ChevronLeft color='#667085'/>
                        </button>
                        แชร์ Hitlink
                      </Dialog.Title>
                    </div>

                    <div className="p-4">
                      <div className="flex justify-between px-[10px] py-3 bg-[#F5F5F5] rounded-[10px]">
                        <p className='text-[#101828] inter underline underline-offset-2 text-base'>{mylink}</p>
                        <button className='text-[#FF4A00] flex items-center gap-x-2 text-sm font-bold'>
                          <Copy06 color='#FF4A00' viewBox='0 0 24 24' width='20' height='20'/>
                          คัดลอก
                        </button>
                      </div>

                      <div className='mt-4 flex justify-center w-[80%] mx-auto'>
                        <QRCode value={mylink}/>
                      </div>

                      <div className="flex gap-x-2 mt-4">
                        <button className="secondary-btn gap-x-2 flex items-center justify-center" style={{padding:"10px 0"}} onClick={() => setOpenEdit(true)}>
                          <Download01 />
                          บันทึกรูปภาพ
                        </button>
                        <button
                          className="main-btn gap-x-2 flex items-center justify-center" style={{padding:"10px 0"}}
                        >
                          <Share06 />
                          แชร์เลย
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openAccountMenu} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenAccountMenu}>
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
          <div className="fixed inset-0 z-10 overflow-y-auto top-[50px] right-3">
            <div className="flex justify-end text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-3/4">
                  <div className="flex justify-center flex-col border-[#EAECF0]">
                    <div className="text-center">
                      <Dialog.Title as="h3" className="flex items-center justify-start gap-x-3 px-4 py-3 border-b border-b-[#EAECF0]">
                        <div className='relative'>
                          {image ? (
                            <div className="w-10 h-10 rounded-full bg-[#FF4A00] flex items-center justify-center text-[50px] text-white font-bold">
                              <img src='' />
                            </div>
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-[#FF4A00] flex items-center justify-center text-[50px] text-white font-bold">
                              <Image01 color='white' />
                            </div>
                          )}

                          <div className='w-[10px] h-[10px] bg-[#17B26A] rounded-full absolute bottom-0 right-0 border border-[1.5px] border-white' />
                        </div>

                        <div className='text-left'>
                          <h2 className='text-gray-700 font-semibold inter'>Olivia Rhye</h2>
                          <p className='text-sm text-gray-600 inter'>olivia@untitledui.com</p>
                        </div>
                      </Dialog.Title>

                      <div>
                        <button className='p-4 flex items-center gap-x-2 text-gray-700 w-full inter font-medium text-sm outline-none'>
                          <User01 color='#344054'/>
                          View profile
                        </button>
                        <button className='p-4 flex items-center gap-x-2 text-gray-700 w-full inter font-medium text-sm outline-none'>
                          <HomeSmile color='#344054'/>
                          Go to workspace
                        </button>
                        <button className='p-4 flex items-center gap-x-2 text-gray-700 w-full inter font-medium text-sm outline-none'>
                          <LogOut01 color='#344054'/>
                          Log out
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openEditProfile} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenEditProfile}>
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
                        <button className="absolute left-0" onClick={() => setOpenEditProfile(false)}>
                          <ChevronLeft color='#667085'/>
                        </button>
                        แก้ไขโปรไฟล์
                      </Dialog.Title>
                    </div>

                    <div className="p-4">
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
                      <div className="flex flex-col gap-y-4 mt-[30px]">
                        <div>
                          <label htmlFor='username' className="mt-[6px] text-para text-[#344054]">ชื่อ Hitlink <span className="required">*</span></label>
                          <input type='text' className="form-input with-shadow" id='username' placeholder="กรุณากรอกชื่อของคุณ"/>
                        </div>
                        <div className="relative">
                          <label htmlFor='emoji' className="mt-[6px] text-para text-[#344054]">อิโมจิ</label>
                          <button className="form-input with-shadow text-left flex justify-between items-center" id='emoji' onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                            {emoji ? (<Emoji unified={selectedEmoji} size={24}/>) : <>เลือกอิโมจิ</>}
                            <div>
                              <ChevronDown color='#667085' className={`${showEmojiPicker ? 'transition rotate-180 duration-300' : 'transition duration-300'}`}/>
                            </div>
                          </button>
                          {showEmojiPicker ? (
                            <div className="absolute z-10">
                              <EmojiPicker width='100%' height='300px' onEmojiClick={(emojiData) => {
                                setEmoji(true);
                                setSelectedEmoji(emojiData.unified)
                              }}/>
                            </div>
                          ) : null}
                        </div>
                        <div>
                          <label htmlFor='bio' className="mt-[6px] text-para text-[#344054]">คำอธิบาย <span className="required">*</span></label>
                          <textarea className="form-input with-shadow h-[78px] resize-none" placeholder='กรอกคำอธิบาย...' value={bio} id='bio' maxLength={80} onChange={(e) => setBio(e.target.value)}/>
                          <p className="text-para mt-[6px] text-right">{bio.length}/80</p>
                        </div>
                      </div>

                      <div className="pt-4 flex">
                        <button
                          className="main-btn"
                          onClick={() => {
                            setOpenChangeTitle(false);
                          }}
                        >
                          ยืนยัน
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

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

      <div className={`fixed top-[120px] flex left-0 justify-center w-full ${savedNoti ? savedNotiAnim : 'hidden'}`}>
        <div className='px-[14px] py-[10px] bg-[#6A6A6A80] rounded-lg flex text-white items-center text-sm gap-x-2'>
          <CheckCircle color='white'/>
          {savedNotiText}
        </div>
      </div>
    </>
  )
}

export default Profile;