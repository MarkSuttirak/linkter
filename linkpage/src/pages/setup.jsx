import React, {useState} from 'react'
import bioIcon from '../icons/bio.svg'
import { Image01, AlertCircle, FaceSmile, ArrowNarrowLeft, Trash01, XClose, ChevronDown, ChevronLeft } from '@untitled-ui/icons-react'
import zaviago from '../icons/zaviago-com.svg'
import { Dialog, Transition, RadioGroup } from '@headlessui/react'
import DotsVertical from "../icons/dotsVertical";
import UpperLink from '../icons/upperLink'
import LowerLink from '../icons/lowerLink'
import Line from "../icons/other/line";
import { InputGroup, InputLeftAddon, Input } from "@chakra-ui/react";



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
                      สมัครใช้งานผ่านไลน์ <Line></Line>
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
              </div>
              
            )}
            {page === 1 && (
                <div className="px-4 w-screen " style={{ height: 'calc(100vh - 60px)' }}>
                    <div className={`${goNextSlideLeft ? 'go-next-slide-left' : goNextSlideRight ? 'go-next-slide-right' : goBackSlideLeft ? 'go-back-slide-left' : goBackSlideRight ? 'go-back-slide-right' : ''}`}>
                        <div className="inline-flex flex-col items-start space-y-6">
                            <h1>ยืนยันตัวตน</h1>
                            <p>กรุณายืนยันตัวตนผ่านเบอร์มือถือ โดยรหัสจะส่งไปยัง SMS ของคุณ</p>
                        </div>
                        <div className="inline-flex flex-col items-start space-y-16 w-full space-y-10 mt-12">
                            <p></p>
                          
                            <button className="main-btn">รับรหัส OTP</button>
                        </div>
                    </div>
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
                </div>
            )}
        </>
    )
}

export default Setup;