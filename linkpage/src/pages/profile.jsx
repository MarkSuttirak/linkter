import readyToUse from '../icons/ready-to-use.png'
import { Fragment, useState, useRef, useEffect } from 'react'
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
import templateNine from '../templates/template-nine.png'
import templateTen from '../templates/template-ten.png'
import QRCode from 'react-qr-code';setModifiedSVG
import { Facebook, Instagram, XTwitter, Tiktok, GoogleHangouts, Messenger, WhatsApp, Youtube, Gmail, LinkedIn, Kakaotalk, Line, WeChat, Tinder, Reddit, Clubhouse, Discord, Snapchat, Threads, Twitch, OnlyFans } from '../icons/social-media'
import { Spotify, YoutubeMusic, Signal, Soundcloud, AppleMusic, Telegram, AppleFacetime, GoogleMaps, Pinterest, Giphy, Dropbox, Onedrive, WeTransfer, Patreon, Blogger, Deviantart, Invision, Behance, Dribbble, GoogleDrive } from '../icons/other-icons'
import { Amazon, Lazada, Shopee, TiktokShop, Linemyshop, Ebay, Shopify } from '../icons/shopping-icons';
import LoadingSave from '../components/loadingSave';

const shortcutDisplay = [
  { id: 1, title: 'ด้านบนของลิงก์', img: UpperLink},
  { id: 2, title: 'ด้านล่างของลิงก์', img: LowerLink},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Profile = () => {
  const [template, setTemplate] = useState('1');
  const [linkColor, setLinkColor] = useState('#000000');
  const [modifiedSVG, setModifiedSVG] = useState(null);
  const [bio, setBio] = useState('')
  const [openReady, setOpenReady] = useState(false)
  const [openAccountMenu, setOpenAccountMenu] = useState(false);
  const [openEdit, setOpenEdit] = useState(false)
  const [mylink, setMylink] = useState('hitlink.mylinkname');

  const [name, setName] = useState('Olivia');
  const [updateName, setUpdateName] = useState(name);
  const [btnTitle, setBtnTitle] = useState('');
  const [updateBtnTitle, setUpdateBtnTitle] = useState(btnTitle);
  const [btnTitleWhenSaved, setBtnTitleWhenSaved] = useState('');

  const [image, setImage] = useState(false)
  const [emoji, setEmoji] = useState(false)
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [imgPath, setImagepath] = useState([]);
  const [editTemplate, setEditTemplate] = useState(false);

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

  const templates = [templateOne, templateTwo, templateThree, templateFour, templateFive, templateSix, templateSeven, templateEight, templateNine, templateTen];
  const [numTemplates, setNumTemplates] = useState(0);
  const [numSubTemplates, setSubNumTemplates] = useState(1);

  const [selectedShortcutDisplay, setSelectedShortcutDisplay] = useState(shortcutDisplay[0])
  const [numOfIconInputs, setNumOfIconInputs] = useState(0);
  const [shortcutIconInputs, setShortcutIconInputs] = useState([{
    key:numOfIconInputs
  }])

  const [mainIconColour, setMainIconColour] = useState('#2F2F2F')

  const socialIcons = [
    (<Facebook color={mainIconColour}/>), (<Instagram color={mainIconColour}/>), (<XTwitter color={mainIconColour}/>), (<Tiktok color={mainIconColour}/>), (<Youtube color={mainIconColour}/>), (<Gmail color={mainIconColour}/>), (<LinkedIn color={mainIconColour}/>), (<Kakaotalk color={mainIconColour}/>), (<GoogleHangouts color={mainIconColour}/>), (<Line color={mainIconColour}/>),
    (<WeChat color={mainIconColour}/>), (<Messenger color={mainIconColour}/>), (<Tinder color={mainIconColour}/>), (<Reddit color={mainIconColour}/>), (<Clubhouse color={mainIconColour}/>), (<Discord color={mainIconColour}/>), (<WhatsApp color={mainIconColour}/>), (<Snapchat color={mainIconColour}/>), (<Threads color={mainIconColour}/>), (<Twitch color={mainIconColour}/>), (<OnlyFans color={mainIconColour}/>)
  ]

  const shoppingIcons = [
    (<Amazon color={mainIconColour}/>), (<Lazada color={mainIconColour}/>), (<Shopee color={mainIconColour}/>), (<TiktokShop color={mainIconColour}/>), (<HomeSmile color={mainIconColour}/>), (<Ebay color={mainIconColour}/>), (<Shopify color={mainIconColour}/>), (<Globe02 color={mainIconColour}/>), (<Linemyshop color={mainIconColour}/>)
  ]

  const otherIcons = [
    (<YoutubeMusic color={mainIconColour}/>), (<Signal color={mainIconColour}/>), (<Soundcloud color={mainIconColour}/>), (<Spotify color={mainIconColour}/>), (<AppleMusic color={mainIconColour}/>), (<Telegram color={mainIconColour}/>), (<AppleFacetime color={mainIconColour}/>), (<GoogleMaps color={mainIconColour}/>), (<Pinterest color={mainIconColour}/>),
    (<Giphy color={mainIconColour}/>), (<Dropbox color={mainIconColour}/>), (<Onedrive color={mainIconColour}/>), (<WeTransfer color={mainIconColour}/>), (<Patreon color={mainIconColour}/>), (<Blogger color={mainIconColour}/>), (<Deviantart color={mainIconColour}/>), (<Invision color={mainIconColour}/>), (<Behance color={mainIconColour}/>), (<Dribbble color={mainIconColour}/>), (<GoogleDrive color={mainIconColour}/>)
  ]

  // Link Inputs

  const [isSaving, setIsSaving] = useState(false);
  const [linkInputListsWhenSaved, setLinkInputListsWhenSaved] = useState([]);
  const [linkInputLists, setLinkInputLists] = useState([])
  const [IconInputListsWhenSaved, setIconInputListsWhenSaved] = useState([]);
  const [iconInputLists, setIconInputLists] = useState([])

  const linkNameRef = useRef(null)
  const linkUrlRef = useRef(null)
  const [linkNameError, setLinkNameError] = useState(false)
  const [linkNameErrorText, setLinkNameErrorText] = useState('')
  const [linkUrlError, setLinkUrlError] = useState(false)
  const [linkUrlErrorText, setLinkUrlErrorText] = useState('')

  const saveData = () => {
    setIsSaving(true);

    setTimeout(() => {
      goPrevTo('');
      setLinkInputListsWhenSaved(linkInputLists);
      setBtnTitleWhenSaved(btnTitle);
    }, 1000)
    setTimeout(() => {
      setIsSaving(false)
    }, 1500)
  }

  const cancelData = () => {
    goPrevTo('');
    setTimeout(() => {
      setBtnTitle(btnTitleWhenSaved);
      setLinkInputLists(linkInputListsWhenSaved)
    }, 1500)
  }

  const [linkInputs, setLinkInputs] = useState([
    { linkName: '', url: '' },
  ]);

  const addLinkInput = () => {
    setLinkInputs([
      ...linkInputs,
      { linkName: '', url: '' },
    ]);
  };

  const removeLinkInput = (index) => {
    const updatedInputs = [...linkInputs];
    updatedInputs.splice(index, 1);
    setLinkInputs(updatedInputs);
    setLinkInputLists(updatedInputs)
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedInputs = [...linkInputs];
    updatedInputs[index][name] = value;
    setLinkInputs(updatedInputs);
  };

  const saveLinkInputs = () => {
    setLinkInputLists([...linkInputs]);
  };

  // Icon Inputs

  const IconInput = ({ icon }) => {
    const [iconInputs, setIconInputs] = useState([
      {icon: icon, url: ''}
    ]);
  
    const addIconInput = () => {
      setIconInputs([...iconInputs, {}]);
    };
  
    const removeIconInput = (index) => {
      const updatedInputs = [...iconInputs];
      updatedInputs.splice(index, 1);
      setIconInputs(updatedInputs);
    };

    return (
      <>
        <div>
          {iconInputs.map((input, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center gap-x-[10px]">
                <div className="flex flex-col gap-y-[6px] grow">
                  <div className="flex rounded-md flex-row-reverse">
                    <input
                      type="text"
                      name="icon-link"
                      className="form-input with-prefix"
                      placeholder="ชื่อลิงก์"
                    />
                    <span className="input-addon form-prefix">{input.icon}</span>
                  </div>
                </div>
                <div>
                  <Trash01 color="#F04438" onClick={() => removeIconInput(index)} />
                </div>
              </div>
            </div>
          ))}

          <button onClick={addIconInput}>Add</button>
        </div>
      </>
    );
  };

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

  const titleHTML = useRef(null)
  const handleButtonClick = (templatenumber) => {
    setTemplate(templatenumber)
    // You can set the new template here
    const value = Number(templatenumber);
    changelinkColor(tabLinkColor[value - 1][0])
    fetch(zaviago)
    .then(response => response.text())
    .then(svgData => {
      // Modify the SVG data here
      modifySVGColor(svgData, tabLinkColor[value - 1][1]);
    })
    .catch(error => {
      console.error('Error loading SVG:', error);
    });
  };

  const generateImagePaths = (id) => {
    const imageFolder = `./src/templates/template${id}`;
    const imagePaths = [];
  
    for (let i = 1; i <= 4; i++) {
      const imagePath = `${imageFolder}/${i}.png`;
      imagePaths.push(imagePath);
    }
  
    return imagePaths;
  }

  // Function to modify SVG fill color
  const modifySVGColor =  (svgString, newFillColor)  => {
    // Use DOMParser to parse the SVG string
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(svgString, 'image/svg+xml');

    // Modify the fill attribute of the relevant SVG elements
    const elementsToModify = xmlDoc.querySelectorAll('[fill]');
    elementsToModify.forEach((element) => {
      element.setAttribute('fill', newFillColor);
    });

    // Serialize the modified SVG back to a string
    const modifiedSVGString = new XMLSerializer().serializeToString(xmlDoc);
    setModifiedSVG(modifiedSVGString);
  }
  const tabLinkColor = [
    ['#04C900' ,'#000000'],
    ['#C90000', '#000000'],
    ['#0050C9','#000000'],
    ['#000000','#000000'],
    ['#FFFFFF','#FFFFFF'],
    ['#FFFFFF','#FFFFFF'],
    ['#000463','#000463'],
    ['#FFFFFF','#FFFFFF'],
    ['#9E6BEC','#9E6BEC'],
    ['#59267A','#59267A'],
    ['#FFFFFF','#FFFFFF'],
    ['#FFFFFF','#FFFFFF'],
    ['#F5804B','#F5804B'],
    ['#FFDF00','#383838'],
    ['#E9C0E9','#E9C0E9'],
    ['#FFFFFF','#FFFFFF'],
    ['#000000','#000000'],
    ['#FFFFFF','#FFFFFF'],
    ['#1D232F','#1D232F'],
    ['#062CD3','#062CD3'],
    ['#E15CFF','#E15CFF'],
    ['#FFFFFF','#FFFFFF'],
    ['#FFFFFF','#FFFFFF'],
    ['#FFFFFF','#FFFFFF'],
    ['#FFFFFF','#FFFFFF'],
    ['#181818','#000000'],
    ['#1DB2FF','#1DB2FF'],
    ['#FFFFFF','#FFFFFF'],
    ['#3461FF','#3461FF'],
    ['#625A50','#625A50'],
    ['#FFFFFF','#FFFFFF'],
    ['#FFFFFF','#FFFFFF'],
    ['#663800','#663800'],
    ['#393752','#393752'],
    ['#FFFFFF','#FFFFFF'],
    ['#000000','#000000'],
    ['#FFFFFF','#FFFFFF'],
    ['#FFFFFF','#FFFFFF'],
    ['#FFFFFF','#FFFFFF'],
    ['#FFFFFF','#FFFFFF'],
  ]
  
  useEffect(() => {
    const initialTemplateNumber = '1';
    handleButtonClick(initialTemplateNumber);
    }, []);

  const changelinkColor = (color) => {
    setLinkColor(color)
  }

  return (
    <>
      <header className="border-b border-b-gray-200">
        <div className={`${goNextSlideLeft ? 'go-next-slide-left' : goNextSlideRight ? 'go-next-slide-right' : goBackSlideLeft ? 'go-back-slide-left' : goBackSlideRight ? 'go-back-slide-right' : ''}`}>
          {page === 'edit' ? (
            <header className='px-4 py-3 flex items-center h-[64px]'>
              <div className='w-1/3 text-left'>
                <button onClick={cancelData} className="text-[#FF4A00] font-bold">ยกเลิก</button>
              </div>
              <div className='w-1/3 text-center'>
                <h2 className="text-gray-900 font-bold">แก้ไข</h2>
              </div>
              <div className='w-1/3 text-right flex justify-end'>
                {isSaving ? (
                  <LoadingSave />
                ) : (
                  <button className="text-[#FF4A00] font-bold text-right w-1/3" onClick={saveData}>บันทึก</button>
                )}
              </div>
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
              <h2 className="font-bold noto">{btnTitle}</h2>
            </section>

            <section className="px-4 py-3 border-b border-b-[#EAECF0]" onClick={() => setOpenAddButtonModal(true)}>
              <div className="flex justify-end">
                <Edit05 color='#FF4A00' viewBox='0 0 24 24' width='16' height='16'/>
              </div>
              <div className="mt-3 flex flex-col gap-y-4">
                {linkInputLists.map((link) => 
                  <div className="flex items-center gap-x-2">
                    <button href={link.url} className="p-4 bg-[#F2C27A] text-[#AC6625] rounded-[999px] h-[52px] noto w-full">{link.linkName}</button>
                  </div>
                )}
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
            <h2 ref={titleHTML} className=" font-bold noto">{btnTitleWhenSaved}</h2>

            <div className="mt-4 flex flex-col gap-y-4">
              {linkInputListsWhenSaved.map((link) => 
                <div className="flex items-center gap-x-2">
                  <a href={'https://' + link.url} className="p-4 bg-[#F2C27A] text-[#AC6625] rounded-[999px] h-[52px] noto w-full">{link.linkName}</a>
                </div>
              )}
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
                        {addBtnMenuActive === 3 && <>
                          <button className="absolute left-0" onClick={() => {setAddBtnMenuActive(1); setAddShortcut(false);setSubNumTemplates(1) }}>
                            <ChevronLeft color='#667085'/>
                          </button>
                          เทมเพลต
                        </>}
                      </Dialog.Title>
                    </div>

                    {addBtnMenuActive === 0 && (
                      <div className="p-4">
                        <Dialog.Description as='p' className='text-gray-600 text-sm text-center'>
                          กรุณาเลือกไอคอนและระบุ Url ของไอคอน
                        </Dialog.Description>

                        <div className="mt-4">
                          <div className="overflow-y-auto" style={{maxHeight:"calc(100vh - 380px)"}}>
                            {linkInputs.map((input, index) => (
                              <div key={index}>
                                <div className={`flex items-center${linkInputs.length > 1 ? ' gap-x-[10px]' : ''}`}>
                                  <div className="flex flex-col gap-y-[6px] grow">
                                    <input
                                      type="text"
                                      className="form-input with-shadow"
                                      name="linkName"
                                      placeholder="ชื่อลิงก์"
                                      ref={linkNameRef}
                                      value={input.linkName}
                                      onChange={(e) => handleInputChange(index, e)}
                                    />
                                    {linkNameError && (
                                      <p className="noto text-[#F04438] text-sm">
                                        {linkNameErrorText}
                                      </p>
                                    )}
                                    <input
                                      type="text"
                                      className="form-input with-shadow"
                                      name="url"
                                      placeholder="www.example.com"
                                      ref={linkUrlRef}
                                      value={input.url}
                                      onChange={(e) => handleInputChange(index, e)}
                                    />
                                    {linkUrlError && (
                                      <p className="noto text-[#F04438] text-sm">
                                        {linkUrlErrorText}
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

                            <div className="pt-4 flex">
                              <button
                                className="main-btn"
                                onClick={() => {
                                  if (linkNameRef.current.value === ""){
                                    setLinkNameError(true);
                                    setLinkNameErrorText('กรุณากรอกชื่อลิงก์')
                                  } else {
                                    setLinkNameError(false);
                                  }

                                  if (linkUrlRef.current.value === ""){
                                    setLinkUrlError(true)
                                    setLinkUrlErrorText('กรุณากรอก Url')
                                  } else if (linkUrlRef.current.value.includes('.com') === false){
                                    setLinkUrlError(true);
                                    setLinkUrlErrorText('กรุณาระบุ Url ที่ถูกต้อง') 
                                  } else {
                                    setLinkUrlError(false)
                                  }

                                  if (!linkNameError || !linkUrlError){
                                    saveLinkInputs()
                                    setOpenAddButtonModal(false)
                                    setTimeout(() => {
                                      setSelectCustomise(false)
                                    }, 400)
                                  }
                                }}
                              >
                                ยืนยัน
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {addBtnMenuActive === 1 && (
                      <div className="overflow-y-auto grid grid-cols-2 gap-3 p-4" style={{height:"calc(100vh - 200px)"}}>
                        {templates.map((temp, indexTemp) => 
                          <button key={indexTemp} onClick={() => {    
                            setNumTemplates(indexTemp)            
                            setImagepath(generateImagePaths(indexTemp+1));
                            setEditTemplate(true);
                            setAddBtnMenuActive(3);
                            setAddShortcut(true);
                          }}>
                            <img src={temp} width='100%'/>
                          </button>
                        )}
                      </div>
                    )}

                    {addBtnMenuActive == 3 && (
                      <div className="grid grid-rows-7 gap-1 place-item-center bg-white " style={{height:"calc(100vh - 200px)"}}>
                        <div className='row-span-3 flex items-center justify-center'>
                          <button  className='h-75 flex items-center justify-center' onClick={() => {
                              }}>
                                <img className='w-40 h-75 flex-shrink-0 rounded-2xl border border-gray-300 bg-[lightgray] bg-center bg-cover bg-no-repeat' src={imgPath[numSubTemplates-1]} width='100%'/>
                              </button>
                        </div>
                        <div className='row-span-2 grid grid-cols-4 gap-1 m-4'>
                              {imgPath.map((path,Subindex) => 
                              <button className={`rounded-md bg-[lightgray] w-12 h-20 flex items-center justify-center bg-center bg-cover bg-no-repeat border border-[${tabLinkColor[((numTemplates)*4) + (Subindex )][0]}]`}  key={Subindex} onClick={() => {
                                setSubNumTemplates(Subindex + 1)
                              }}>
                                <img className={`rounded-md bg-[lightgray] w-12 h-20 flex items-center justify-center bg-center bg-cover bg-no-repeat border border-[${tabLinkColor[((numTemplates)*4) + (Subindex )][0]}]`} src={path} width='100%'/>
                              </button>
                            )}
                          </div>
                        <div className='flex flex-col mt-7 m-4'>
                          <div className='self-stretch text-gray-900 font-Eventpop font-bold text-2xl leading-[25px] tracking-[0.5px]'>Pastel classic Minimal</div>
                          <div className='text-gray-600 font-inter text-base font-normal leading-6 '>By zaviago</div>
                        </div>
                        <div className='flex item-center justify-center shadow-md '>
                          <button onClick={() => {
                            handleButtonClick((numTemplates*4) + numSubTemplates);
                            setAddBtnMenuActive(1); 
                            setAddShortcut(false);
                            setSubNumTemplates(1);
                            setOpenAddButtonModal(false);
                          }
                            } className='main-btn w-288 h-12 p-2 mt-6 m-4'>ยืนยัน</button>
                        </div>
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
                        <button className="absolute left-0" onClick={() => {setOpenChangeTitle(false);setUpdateBtnTitle(btnTitle)}}>
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
                              setBtnTitle("")
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
                          <input type='text' className="form-input with-shadow" id='username' placeholder="กรุณากรอกชื่อของคุณ" defaultValue={name}/>
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