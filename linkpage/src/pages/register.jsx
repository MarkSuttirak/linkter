import { useState, Fragment } from "react";
import bioIcon from '../icons/bio.svg'
import { Image01, AlertCircle, FaceSmile, ArrowNarrowLeft, Trash01, XClose, ChevronDown, ChevronLeft } from '@untitled-ui/icons-react'
import zaviago from '../icons/zaviago-com.svg'
import { Dialog, Transition, RadioGroup } from '@headlessui/react'
import DotsVertical from "../icons/dotsVertical";
import UpperLink from '../icons/upperLink'
import LowerLink from '../icons/lowerLink'
import templateOne from '../templates/template-one.png'
import templateTwo from '../templates/template-two.png'
import templateThree from '../templates/template-three.png'
import templateFour from '../templates/template-four.png'
import templateFive from '../templates/template-five.png'
import templateSix from '../templates/template-six.png'
import templateSeven from '../templates/template-seven.png'
import templateEight from '../templates/template-eight.png'
import templateNine from '../templates/template-nine.png'
import templateTen from '../templates/template-ten.png'
import EmojiPicker, { Emoji } from "emoji-picker-react";

const shortcutDisplay = [
  { id: 1, title: 'ด้านบนของลิงก์', img: UpperLink},
  { id: 2, title: 'ด้านล่างของลิงก์', img: LowerLink},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Register = () => {
  const [open, setOpen] = useState(false)

  const [page, setPage] = useState(0);

  const [image, setImage] = useState(false)
  const [emoji, setEmoji] = useState(false)
  const [selectedEmoji, setSelectedEmoji] = useState("");

  const [goNextSlideLeft, setGoNextSlideLeft] = useState(false);
  const [goNextSlideRight, setGoNextSlideRight] = useState(false);
  const [goBackSlideLeft, setGoBackSlideLeft] = useState(false);
  const [goBackSlideRight, setGoBackSlideRight] = useState(false);

  const [slideDown, setSlideDown] = useState(false);
  const [slideUp, setSlideUp] = useState(false);

  const [bio, setBio] = useState('');

  const templates = [templateOne, templateTwo, templateThree, templateFour, templateFive, templateSix, templateSeven, templateEight, templateNine, templateTen];
  const [numTemplates, setNumTemplates] = useState(0);
  const selectedTemplate = templates[numTemplates];

  const Steps = () => {
    return (
      <nav aria-label="Progress">
        <ol role="list" className="flex justify-between gap-x-1">
          <li className="step-list">
            <div className="step-register">
              <div className={`step-register-inner ${page === 0 ? 'current' : 'complete'}`} />
            </div>
          </li>
          <li className="step-list">
            <div className="step-register">
              <div className={`step-register-inner ${page === 1 ? 'current' : page > 1 ? 'complete' : 'coming'}`} />
            </div>
          </li>
          <li className="step-list">
            <div className="step-register">
              <div className={`step-register-inner ${page === 2 ? 'current' : page > 2 ? 'complete' : 'coming'}`} />
            </div>
          </li>
          <li className="step-list">
            <div className="step-register">
              <div className={`step-register-inner ${page === 3 ? 'current' : page > 3 ? 'complete' : 'coming'}`} />
            </div>
          </li>
          <li className="step-list">
            <div className="step-register">
              <div className={`step-register-inner ${page === 4 ? 'current' : page > 4 ? 'complete' : 'coming'}`} />
            </div>
          </li>
        </ol>
      </nav>
    )
  }

  const goPrev = () => {
    if (page > 0) {
      setGoBackSlideRight(true);
      setSlideDown(true);
      setTimeout(() => {
        setSlideDown(false);
        setSlideUp(true);
        setGoBackSlideRight(false);
        setGoBackSlideLeft(true);
        setPage(page - 1);
      }, 600)
      setTimeout(() => {
        setSlideUp(false);
        setGoBackSlideLeft(false);
      }, 1200)
    }
  }

  const goNext = () => {
    setGoNextSlideLeft(true);
    setSlideDown(true);
    setTimeout(() => {
      setSlideDown(false);
      setSlideUp(true);
      setGoNextSlideRight(true);
      setGoNextSlideLeft(false);
      setPage(page + 1);
    }, 600)
    setTimeout(() => {
      setSlideUp(false);
      setGoNextSlideRight(false);
    }, 1200)
  }

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [numOfIconInputs, setNumOfIconInputs] = useState(1);

  const [selectedShortcutDisplay, setSelectedShortcutDisplay] = useState(shortcutDisplay[0])
  const [shortcutIconInputs, setShortcutIconInputs] = useState([{
    key:numOfIconInputs
  }])
  const [linkInputs, setLinkInputs] = useState([
    { linkName: '', url: '', inputError: false },
  ]);

  const addLinkInput = () => {
    setLinkInputs([
      ...linkInputs,
      { linkName: '', url: '', inputError: false },
    ]);
  };

  const removeLinkInput = (index) => {
    const updatedInputs = [...linkInputs];
    updatedInputs.splice(index, 1);
    setLinkInputs(updatedInputs);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedInputs = [...linkInputs];
    updatedInputs[index][name] = value;
    setLinkInputs(updatedInputs);
  };

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
      <div className="mt-[30px] relative px-4">
        <Steps />
        
        <button className={`absolute left-[16px] top-[14px] ${page >= 1 ? 'fade-in' : 'fade-out'}`} onClick={goPrev}>
          <ArrowNarrowLeft color='#2F2F2F'/>
        </button>
      </div>

      {page === 0 && (
        <div className="px-4">
          <div className={`${goNextSlideLeft ? 'go-next-slide-left' : goNextSlideRight ? 'go-next-slide-right' : goBackSlideLeft ? 'go-back-slide-left' : goBackSlideRight ? 'go-back-slide-right' : ''}`}>
            <div className="mt-10 text-left">
              <h1 className="main-text-title">Welcome to Hitlink simple link in bi<img src={bioIcon} className="inline"/>.</h1>
              <p className="text-[#475467] text-para mt-[10px] mb-[30px]">รวมทุกสิ่งทุกอย่าง ที่คุณเป็น หรือ มี ไว้ในลิงก์เดียว สิ่งที่จะช่วยคุณแชร์ทุกสิ่งที่คุณสร้าง</p>

              <div className="flex rounded-md flex-row-reverse">
                <input
                  type='text'
                  name='link'
                  id='link'
                  className="form-input with-prefix inter"
                  placeholder='mylinkname'
                />
                <span className="input-addon form-prefix inter pl-3 pr-1">
                  hitlink.zaviago/
                </span>
              </div>
              <p className='text-[#475467] text-para mt-[6px] mb-5 flex items-center gap-x-[6px]'>
                <AlertCircle color='#475467' width='16' height='16' viewBox='0 0 24 24'/>
                ไม่สามารถแก้ไขในภายหลังได้
              </p>

              <button className="main-btn" onClick={goNext}>สร้างลิงก์ของคุณเลย !</button>
            </div>
          </div>
          <footer className={`footer-register ${slideDown ? 'slide-down-footer' : slideUp ? 'slide-up-footer' : ''}`}>
            <h3 className='mt-10 mb-[30px] flex justify-center items-center gap-x-1 text-[8px]'>
              Powered by <img src={zaviago} />
            </h3>
          </footer>
        </div>
      )}

      {page === 1 && (
        <div className="px-4">
          <div className={`${goNextSlideLeft ? 'go-next-slide-left' : goNextSlideRight ? 'go-next-slide-right' : goBackSlideLeft ? 'go-back-slide-left' : goBackSlideRight ? 'go-back-slide-right' : ''}`}>
            <div className="mt-10 text-left">
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
                    <div className='flex h-screen fixed top-0 w-full left-0 justify-center items-center' onClick={() => setShowEmojiPicker(false)}>
                      <div className="absolute z-10">
                        <EmojiPicker width='100%' height='300px' onEmojiClick={(emojiData) => {
                          setEmoji(true);
                          setSelectedEmoji(emojiData.unified)
                        }}/>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor='bio' className="mt-[6px] text-para text-[#344054]">คำอธิบาย <span className="required">*</span></label>
                  <textarea className="form-input with-shadow h-[78px] resize-none" placeholder='กรอกคำอธิบาย...' value={bio} id='bio' maxLength={80} onChange={(e) => setBio(e.target.value)}/>
                  <p className="text-para mt-[6px] text-right">{bio.length}/80</p>
                </div>
              </div>
            </div>
          </div>
          <footer className={`footer-register with-shadow ${slideDown ? 'slide-down-footer' : slideUp ? 'slide-up-footer' : ''}`}>
            <div className="m-4">
              <button className="main-btn" onClick={goNext}>ถัดไป</button>
            </div>
            <h3 className='mt-10 mb-[30px] flex justify-center items-center gap-x-1 text-[8px] mt-[10px]'>
              Powered by <img src={zaviago} />
            </h3>
          </footer>
        </div>
      )}

      {page === 2 && (
        <>
          <div className={`${goNextSlideLeft ? 'go-next-slide-left' : goNextSlideRight ? 'go-next-slide-right' : goBackSlideLeft ? 'go-back-slide-left' : goBackSlideRight ? 'go-back-slide-right' : ''}`}>
            <div className="px-4 mb-[30px]">
              <div className="mt-12 text-left">
                <h1 className="main-text-title">Add your social media link🔗</h1>
                <p className="text-[#475467] text-para mt-[10px]">เพิ่มลิงก์ตามที่คุณต้องการ โดยสามารถเพิ่มได้ มากที่สุดถึง 10 ลิงก์</p>
              </div>
            </div>

            <div className="overflow-y-auto px-4" style={{maxHeight:"calc(100vh - 380px)"}}>
              {linkInputs.map((input, index) => (
                <div key={index}>
                  <div className={`flex items-center${linkInputs.length > 1 ? ' gap-x-[10px]' : ''}`}>
                    <div className="flex flex-col gap-y-[6px] grow">
                      <input
                        type="text"
                        className="form-input with-shadow"
                        name="linkName"
                        placeholder="ชื่อลิงก์"
                        value={input.linkName}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                      <input
                        type="text"
                        className="form-input with-shadow"
                        name="url"
                        placeholder="www.example.com"
                        value={input.url}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                      {input.inputError && (
                        <p className="noto text-[#F04438] text-sm">
                          กรุณาระบุรูปแบบ Url ที่ถูกต้อง
                        </p>
                      )}
                    </div>
                    <div>
                      {linkInputs.length > 1 && (
                        <Trash01
                          color="#F04438"
                          onClick={() => removeLinkInput(index)}
                        />
                      )}
                    </div>
                  </div>
        
                  <hr className="border-gray-200 my-6" />
                </div>
              ))}
        
              <button onClick={linkInputs.length < 10 ? addLinkInput : null} className="main-btn no-bg">
                เพิ่มปุ่ม <span className='text-[#475467]'>({linkInputs.length}/10)</span>
              </button>
            </div>
          </div>

          <footer className={`footer-register with-shadow ${slideDown ? 'slide-down-footer' : slideUp ? 'slide-up-footer' : ''}`}>
            <div className="m-4">
              <button className="main-btn" onClick={goNext}>ดำเนินการต่อ</button>
            </div>
            <h3 className='mt-10 mb-[30px] flex justify-center items-center gap-x-1 text-[8px] mt-[10px]'>
              Powered by <img src={zaviago} />
            </h3>
          </footer>
        </>
      )}

      {page === 3 && (
        <>
          <div className={`${goNextSlideLeft ? 'go-next-slide-left' : goNextSlideRight ? 'go-next-slide-right' : goBackSlideLeft ? 'go-back-slide-left' : goBackSlideRight ? 'go-back-slide-right' : ''}`}>
            <div className="px-4 mb-[30px]">
              <div className="mt-12 text-left">
                <h1 className="main-text-title">Add shortcut icon</h1>
                <p className="text-[#475467] text-para mt-[10px]">เพิ่มไอคอนสำหรับใช้เป็นปุ่มลัด เพื่อช่วยให้ผู้เข้าชมของคุณไปยังลิงก์ที่ต้องการได้ไวขึ้น</p>
              </div>
            </div>

            <div className="overflow-y-auto" style={{height:"calc(100vh - 340px)"}}>
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
          </div>

          <footer className={`footer-register with-shadow ${slideDown ? 'slide-down-footer' : slideUp ? 'slide-up-footer' : ''}`}>
            <div className="m-4">
              <button className="main-btn" onClick={goNext}>เลือกเทมเพลต</button>
            </div>
            <h3 className='mt-10 mb-[30px] flex justify-center items-center gap-x-1 text-[8px] mt-[10px]'>
              Powered by <img src={zaviago} />
            </h3>
          </footer>
        </>
      )}

      {page === 4 && (
        <>
          <div className={`${goNextSlideLeft ? 'go-next-slide-left' : goNextSlideRight ? 'go-next-slide-right' : goBackSlideLeft ? 'go-back-slide-left' : goBackSlideRight ? 'go-back-slide-right' : ''}`}>
            <div className="px-4 mb-[30px]">
              <div className="mt-12 text-left">
                <h1 className="main-text-title">Select your style</h1>
                <p className="text-[#475467] text-para mt-[10px]">เลือกเทมเพลตที่บ่งบอกความเป็นคุณ โดยคุณ สามารถปรับแต่งหรือเปลี่ยนแปลงได้ในภายหลัง</p>
              </div>
            </div>

            <div className="overflow-y-auto grid grid-cols-2 gap-3 px-4 pb-4">
              {templates.map((temp, index) => 
                <button key={index} onClick={() => {
                  setNumTemplates(index);
                  setOpen(true)
                }}>
                  <img src={temp} width='100%'/>
                </button>
              )}
            </div>
          </div>
        </>
      )}

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                        <button className="absolute left-0" onClick={() => setOpen(false)}>
                          <ChevronLeft color='#667085'/>
                        </button>
                        เทมเพลต
                      </Dialog.Title>
                    </div>
                    <div className="mt-2">
                      <img src={selectedTemplate} className="mx-auto"/>
                    </div>
                    <div className='flex gap-x-2 justify-center mt-3'>
                      <img src={templateOne} width='60'/>
                      <img src={templateTwo} width='60'/>
                      <img src={templateThree} width='60'/>
                    </div>

                    <div className='px-4 mt-8'>
                      <h2 className='text-gray-900 text-2xl leading-8 font-bold'>Pastel classic Minimal</h2>
                      <p className='text-gray-600 leading-6 mt-1'>By zaviago</p>
                    </div>
                  </div>
                  <div className="p-4 flex">
                    <button
                      className="main-btn"
                      onClick={() => {
                        setOpen(false);
                        window.location.href = '/profile'
                      }}
                    >
                      ยืนยัน
                    </button>
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

export default Register;