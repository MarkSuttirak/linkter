import { useState } from "react"

const ViewProfile = ({onGoBack}) => {
  const [name, setName] = useState('Olivia')
  const [surname, setSurname] = useState('Rhye')
  const [birthdate, setBirthdate] = useState('2023-05-20')
  const [email, setEmail] = useState('olivia@untitledui.com')
  return (
    <>
      <header className='px-4 py-3 flex items-center justify-start h-[64px]'>
        <div className='w-1/4 text-left'>
          <button onClick={onGoBack} className="text-[#FF4A00] font-bold">กลับ</button>
        </div>
        <div className='w-1/2 text-center'>
          <h2 className="text-gray-900 font-bold">โปรไฟล์ของฉัน</h2>
        </div>
      </header>
      <div className="p-4">
        <div className="text-left">
          <h1 className="main-text-title">My profile</h1>

          <div className="flex gap-y-4 flex-col mt-[30px]">
            <input
              type="text"
              name="name"
              className="form-input"
              value={name}
              readonly
            />
            <input
              type="text"
              name="surname"
              className="form-input"
              value={surname}
              readonly
            />
            <input
              type="text"
              name="birthdate"
              className="form-input"
              value={birthdate}
              readonly
            />
            <input
              type="text"
              name="email"
              className="form-input"
              value={email}
              readonly
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewProfile