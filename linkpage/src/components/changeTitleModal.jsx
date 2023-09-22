import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ChevronLeft } from "@untitled-ui/icons-react";

const ChangeTitleModal = ({open, isOpen}) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={isOpen}>
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
                      <button className="absolute left-0" onClick={isOpen}>
                        <ChevronLeft color='#667085'/>
                      </button>
                      เพิ่มหัวข้อปุ่ม
                    </Dialog.Title>
                  </div>

                  <div className="p-4">
                    <Dialog.Description as='p' className='text-gray-600 text-sm text-center'>
                      กรุณาเลือกไอคอนและระบุ Url ของไอคอน
                    </Dialog.Description>

                    <div className="flex gap-x-[10px] items-start mt-4">
                      <div className="flex flex-col gap-y-[6px] w-full">
                        <label htmlFor='btn-title' className="text-gray-700 font-medium text-sm mb-6">หัวข้อปุ่ม</label>
                        <textarea id='btn-title' className="form-input" style={{height:"80px"}}/>
                      </div>
                    </div>

                    <div className="pt-4 flex">
                      <button
                        className="main-btn"
                        onClick={isOpen}
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
  )
}

export default ChangeTitleModal