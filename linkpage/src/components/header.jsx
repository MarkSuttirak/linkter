import bio from '../icons/icon.svg'
import { Menu02 } from '@untitled-ui/icons-react'

const Header = () => {
  return (
    <header className='px-4 py-3 flex items-center justify-between border-b border-b-gray-200 h-[64px]'>
      <div className='flex gap-x-[10px]'>
        <img src={bio} />
        <h1 className='text-gray-900 inter font-semibold text-xl'>hitlink</h1>
      </div>

      <button>
        <Menu02 />
      </button>
    </header>
  )
}

export default Header