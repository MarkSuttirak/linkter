import React, {useState, useEffect} from 'react'
import bioIcon from '../icons/bio.svg'
import { Image01, AlertCircle, FaceSmile, ArrowNarrowLeft, Trash01, XClose, ChevronDown, ChevronLeft } from '@untitled-ui/icons-react'
import zaviago from '../icons/zaviago-com.svg'
import { Dialog, Transition, RadioGroup } from '@headlessui/react'
import DotsVertical from "../icons/dotsVertical";
import UpperLink from '../icons/upperLink'
import LowerLink from '../icons/lowerLink'
import Line from "../icons/other/line";
import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isPossiblePhoneNumber } from 'react-phone-number-input'
import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    SimpleGrid,
    Card,
    CardBody,
    Icon,
  } from '@chakra-ui/react';
import { transform } from 'framer-motion'



const shortcutDisplay = [
    { id: 1, title: 'ด้านบนของลิงก์', img: UpperLink},
    { id: 2, title: 'ด้านล่างของลิงก์', img: LowerLink},
]

function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}


const Setup = () => {
    const [open, setOpen] = useState(false)

    const [page, setPage] = useState(0);


    const [goNextSlideLeft, setGoNextSlideLeft] = useState(false);
    const [goNextSlideRight, setGoNextSlideRight] = useState(false);
    const [goBackSlideLeft, setGoBackSlideLeft] = useState(false);
    const [goBackSlideRight, setGoBackSlideRight] = useState(false);

    const [slideDown, setSlideDown] = useState(false);
    const [slideUp, setSlideUp] = useState(false);
    const [valuePhone, setValuePhone] = useState('')
    const [OTP, setOTPValue] = useState('')
    const [error, setError] = useState('');
    const handleOTPChange = (event) => {
        let inputValue = event.target.value;
        if (inputValue > 999999) {
            inputValue = inputValue.slice(0,6); // Truncate the input value
        }
        if (inputValue == 111111){
            setError('กรุณาระบุรูปแบบ Url ที่ถูกต้อง');
            setCooldown(20)
        }else{
            setError(undefined)
        }
        setOTPValue(inputValue)
    }
  
    const [cooldown, setCooldown] = useState(0);

    const [isSelected, setIsSelected] = useState(0);

  

    
    const cardData = [
    { id: 1, mainIcon :'🛒', secondaryIcon : ['🛒','🛍','💈'] , animation :['']},
    { id: 2, mainIcon :'🪩', secondaryIcon : ['🎬','🪩','🗺','✨'] , animation :[''] },
    { id: 3, mainIcon :'🎨' ,mainIconAnimation :'rotate(-45.741deg)', secondaryIcon : ['🎤', '🎨' ,'📸'] , animation :[''] },
    { id: 4, mainIcon :'👩‍💻', secondaryIcon : [ '✍️','✉️' ,'👩‍💻'] , animation :[''] },
    ];


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

    useEffect(() => {
    if (error) {
        setCooldown(20);
    }
    }, [error]);

    // Utilisez useEffect pour gérer le cooldown
    useEffect(() => {
        let countdownInterval;

        // Démarrez le cooldown si l'erreur est vraie
        if (error && cooldown > 0) {
        countdownInterval = setInterval(() => {
            setCooldown((prevCooldown) => prevCooldown - 1);
        }, 1000);
        }

        // Lorsque le cooldown atteint 0, effacez l'intervalle
        if (cooldown === 0) {
        clearInterval(countdownInterval);
        }

        // Nettoyez l'intervalle lorsqu'un composant est démonté
        return () => {
        clearInterval(countdownInterval);
        };
    }, [error, cooldown]);

    return (
        <>
            <div id='return-button' className="h-[60px] relative px-4">
                <button className={`absolute left-[16px] top-[15px] ${page >= 1 ? 'fade-in' : 'fade-out'}`} onClick={goPrev}>
                <ArrowNarrowLeft color='#2F2F2F'/>
                </button>
            </div>
            {page === 0 && (
                <div className="px-4 w-screen " style={{ height: 'calc(100vh - 60px)' }}>
                <div className={`${goNextSlideLeft ? 'go-next-slide-left' : goNextSlideRight ? 'go-next-slide-right' : goBackSlideLeft ? 'go-back-slide-left' : goBackSlideRight ? 'go-back-slide-right' : ''}`}>
                  <div className="inline-flex flex-col items-start space-y-6"> {/* Utilisez space-y-[x] pour l'espacement vertical */}
                    <div className="flex justify-center items-center "> {/* Utilisez space-x-[x] pour l'espacement horizontal */}
                      <img src={bioIcon} className="" />
                      <h2 className="text-gray-900 font-inter font-semibold text-xl leading-8px">hitlink</h2>
                    </div>
              
                    <div className="mt-3 text-left space-y-4">
                      <h1 className="text-eventpop text-3xl font-bold leading-9 tracking-tight" style={{ color: '#101828' }}>
                        Welcome to Hitlink simple link in bi<img src={bioIcon} className="inline" />.
                      </h1>
                      <p className="text-eventpop text-base font-normal leading-6" style={{ color: '#475467' }}>
                        รวมทุกอย่างที่เป็นคุณไว้ในลิงก์เดียว เพื่อให้ผู้- ติดตามของคุณสามารถคอนเนคกับคุณได้ทุกที่
                      </p>
                    </div>
                  </div>
              
                  <div className="inline-flex flex-col items-start space-y-16 w-full space-y-10 mt-12"> {/* Utilisez space-y-[x] pour l'espacement vertical */}
                    <button className="flex w-full h-[45px] px-4 py-2 justify-center items-center rounded-lg border border-solid border-green-500 bg-green-500 shadow-xs text-[#FFF] text-eventpop text-sm font-semibold leading-6 transition-transform transform hover:scale-105 active:scale-95" onClick={goNext}>
                      สมัครใช้งานผ่านไลน์  <Line ></Line>
                    </button>
                    <div className="w-full h-[1px] bg-[#D1D5DB] flex justify-center items-center">
                      <p className="w-[40px] text-[#475467] text-center font-Eventpop text-10 font-normal font-[400] leading-[24px] bg-[#FFFFFF]">
                        หรือ
                      </p>
                    </div>
                    <div className="w-full flex justify-center items-center inline-flex space-x-2"> {/* Utilisez space-x-[x] pour l'espacement horizontal */}
                      <p className="text-[#475467] text-center font-Eventpop text-12 font-normal font-[400] leading-[24px]">
                        มีบัญชีอยู่แล้วหรือเปล่า ?
                      </p>
                      <a href="" className="pl-2 text-[#0793F7] font-Eventpop text-12 font-normal leading-[24px]">
                        ลงชื่อเข้าใช้งาน
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
            )}
            {page === 1 && (
                <div className="px-4 w-screen " style={{ height: 'calc(100vh - 60px)' }}>
                    <div className={ `space-y-10  ${goNextSlideLeft ? 'go-next-slide-left' : goNextSlideRight ? 'go-next-slide-right' : goBackSlideLeft ? 'go-back-slide-left' : goBackSlideRight ? 'go-back-slide-right' : ''}`}>
                        <div className="mt-3 text-left space-y-4">
                            <h1 className="text-eventpop text-3xl font-bold leading-9 tracking-tight" style={{ color: '#101828' }} >ยืนยันตัวตน</h1>
                            <p className="text-eventpop text-base font-normal leading-6" style={{ color: '#475467' }} >กรุณายืนยันตัวตนผ่านเบอร์มือถือ โดยรหัสจะส่งไปยัง SMS ของคุณ</p>
                        </div>
                        <div className="inline-flex flex-col items-start space-y-3 w-full ">
                            <p className="text-eventpop text-base font-normal leading-6" style={{ color: '#475467' }} >กรุณากรอกเบอร์มือถือ</p>
                            <PhoneInput 
                                className="rounded-lg border border-solid border-gray-300 bg-white w-full h-10 p-2"
                                defaultCountry='TH'
                                placeholder="0885423475"
                                value={valuePhone}
                                onChange={setValuePhone}
                                error={valuePhone ? (isPossiblePhoneNumber(valuePhone) ? undefined : 'Invalid phone number') : 'Phone number required'}/>
                            <button className="main-btn" onClick={goNext}>รับรหัส OTP</button>
                        </div>
                    </div>
                </div>
            )}
            {page === 2 && (
                <div className="px-4 w-screen " style={{ height: 'calc(100vh - 60px)' }}>
                    <div className={ `space-y-10  ${goNextSlideLeft ? 'go-next-slide-left' : goNextSlideRight ? 'go-next-slide-right' : goBackSlideLeft ? 'go-back-slide-left' : goBackSlideRight ? 'go-back-slide-right' : ''}`}>
                        <div className="mt-3 text-left space-y-4">
                            <h1 className="text-eventpop text-3xl font-bold leading-9 tracking-tight" style={{ color: '#101828' }} >รหัสยืนยันตัวตน 6 หลัก</h1>
                            <p className="text-eventpop text-base font-normal leading-6" style={{ color: '#475467' }} >รหัส OTP ส่งไปยัง SMS ของคุณแล้ว</p>
                        </div>
                        <div className="inline-flex flex-col items-start space-y-3 w-full ">
                            <p className="text-eventpop text-base font-normal leading-6" style={{ color: '#475467' }} >กรุณาระบุรหัส 6 หลักที่ได้รับ</p>
                            <FormControl isInvalid={!!error}>
                                <Input errorBorderColor='#FDA29B' value={OTP} onChange={handleOTPChange} placeholder='123456' maxLength={6}  type='number' id="otp"  className="rounded-lg border border-solid border-gray-300 bg-white w-full h-10 p-2"/>
                                <FormErrorMessage>{error}</FormErrorMessage>
                            </FormControl>
                            <button className="main-btn" onClick={goNext}>รับรหัส OTP</button>
                        </div>
                        {!!error && (<p className="text-gray-400 text-center font-eventpop text-sm font-normal leading-5" >OTP will send again within 0:{cooldown}</p>)}
                    </div>
                </div>
            )}
            {page === 3 && (
                <div className="overflow-y-scroll px-4 w-screen" style={{ height: 'calc(100vh - 60px)' }}>
                    <div  className={ `space-y-10  ${goNextSlideLeft ? 'go-next-slide-left' : goNextSlideRight ? 'go-next-slide-right' : goBackSlideLeft ? 'go-back-slide-left' : goBackSlideRight ? 'go-back-slide-right' : ''}`}>
                        <div className="mt-3 text-left space-y-4">
                            <h1 className="text-eventpop text-3xl font-bold leading-9 tracking-tight" style={{ color: '#101828' }} >ตั้งค่าบัญชีของคุณ</h1>
                            <p className="text-eventpop text-base font-normal leading-6" style={{ color: '#475467' }} >บอกเราสักเล็กน้อยว่าคุณเป็นใคร เพื่อให้เราสามารถนำเสนอสิ่งที่ดีที่สุดให้กับคุณ :)</p>
                        </div>
                        <div className="inline-flex flex-col items-start space-y-3 w-full ">
                            <FormControl >
                                <FormLabel>ชื่อ</FormLabel>
                                <Input type='text' placeholder='จอน' errorBorderColor='#FDA29B' className="rounded-lg border border-solid border-gray-300 bg-white w-full h-10 p-2"/>
                                
                                <FormLabel>นามสกุล</FormLabel>
                                <Input type='text' placeholder='สโนว์' errorBorderColor='#FDA29B' className="rounded-lg border border-solid border-gray-300 bg-white w-full h-10 p-2"/>
                          
                                <FormLabel>วัน-เดือน-ปีเกิด</FormLabel>
                                <Input type='date'  errorBorderColor='#FDA29B' className="rounded-lg border border-solid border-gray-300 bg-white w-full h-10 p-2"/>
                             
                                <FormLabel>Email</FormLabel>
                                <Input type='text'  placeholder='your@email.com' errorBorderColor='#FDA29B' className="rounded-lg border border-solid border-gray-300 bg-white w-full h-10 p-2"/>
                           
                            </FormControl>
                        </div>
                        <div className="inline-flex flex-col items-start space-y-5 w-full ">
                            <h1 className="text-eventpop text-3xl font-bold leading-9 tracking-tight" style={{ color: '#101828' }} >รูปแบบการใช้งาน</h1>
                            <SimpleGrid className='w-full h-full' columns={2} spacing={4}>
                                {cardData.map((card, index) => (
                                    <Card 
                                    key = {index + 1}
                                    onClick={() => {setIsSelected(index +1 )}}
                                    style={isSelected == index +1 ? {borderWidth : '1px', borderColor : 'var(--Primery, #FF4A00)',background: 'var(--BG, #FFE9DD)'} : {}}
                                    width="100%" 
                                    height="100%"
                                    flexShrink={0} >
                                    <CardBody>
                                    { isSelected == 0 ? <div style={{fontSize: "4em", transform : `${card.mainIconAnimation ? card.mainIconAnimation : ''}`}} >{card.mainIcon}</div> : null}
                                    {isSelected > 0 ? <div>{card.secondaryIcon.map((icon) => <div>{icon}</div>)}</div> : null}
                                    <p className="text-gray-700 font-Eventpop text-14 font-bold leading-20">ร้านค้าหรือธุรกิจ</p>
                                    </CardBody>
                                    </Card>
                                ))}
                            </SimpleGrid>  
                            <button className="main-btn" onClick={goNext}>เริ่มสร้างลิงก์ของคุณเลย !</button>
                        </div>
                    </div>
                   
                </div>
            )}
             <footer
                className={`flex justify-center items-center space-x-1 footer-register ${
                    slideDown ? 'slide-down-footer' : slideUp ? 'slide-up-footer' : ''
                }`}
                style={{ height: '5rem' }}
                >
                <h3 className="h-full flex items-center text-[8px] pb-7">
                    Powered by <img src={zaviago} className="ml-1" />
                </h3>
            </footer>
        </>
    )
}

export default Setup;