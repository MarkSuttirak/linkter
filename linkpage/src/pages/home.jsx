import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/20/solid'
import Facebook from '../icons/social/facebook';
import Instagram from '../icons/social/instagram';
import XTwitter from '../icons/social/XTwitter';
import Tiktok from '../icons/social/tiktok'
import Spotify from '../icons/other/spotify'
import zaviago from '../icons/zaviago-com.svg'
import { Link } from 'react-router-dom';

const Home = () => {
  document.body.style.background = 'radial-gradient(98.68% 123.45% at 14.69% 6.95%, #C7CCFF 0%, #B5D2FF 100%)'
  const [image, setImage] = useState(false)
  const [emoji, setEmoji] = useState(false)

  const buttons = [
    {
      link: '/',
      text: 'I am not sure why this button is not set as elipses.'
    },
    {
      link: '/',
      text: 'Lorem Ipsum is simply dummy text of the printing'
    },
    {
      link: '/',
      text: 'Button Test'
    },
    {
      link: '/',
      text: 'Button'
    },
  ]

  const socialIcons = [
    (<Facebook />), (<Instagram />), (<XTwitter />), (<Tiktok />), (<Spotify />), (<Facebook />), (<Instagram />), (<XTwitter />), (<Tiktok />), (<Spotify />)
  ]

  const [username, setUsername] = useState('John Walker');
  return (
    <div className="pt-[44px] p-4">
      <div className='w-[96px] m-auto relative'>
        {image ? (
          <div className="w-[96px] h-[96px] rounded-full bg-[#737373] flex items-center justify-center text-[50px] text-white font-bold">
            <img src='' />
          </div>
        ) : (
          <label htmlFor='uploadImg'>
            <div className="w-[96px] h-[96px] rounded-full bg-[#737373] flex items-center justify-center text-[50px] text-white font-bold">
              {username[0]}
            </div>

            <input type='file' id='uploadImg' name='profile-img' className='hidden'/>
          </label>
        )}

        {emoji ? (
          <div className='w-7 h-7 bg-[#2665D6] rounded-full absolute bottom-0 right-0 flex justify-center items-center'>
            👵
          </div>
        ) : (
          <div className='w-7 h-7 bg-[#2665D6] rounded-full absolute bottom-0 right-0 flex justify-center items-center'>
            <PlusIcon width='24' color='white'/>
          </div>
        )}
      </div>

      <div>
        <h1 className='mt-6 text-xl font-bold'>{username} in the your purple areas</h1>
        <p className='mt-[18px] text-base tracking-[-0.2px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is Lorem industry</p>
      </div>

      <div className='mt-[34px]'>
        <h2 className='font-bold mb-4'>Header</h2>
        <div className='flex flex-col gap-y-4'>
          {buttons.map((button) => 
            <Link to={button.link} className='border border-black rounded-full bg-white text-black p-4 text-sm font-medium box-border tracking-[-0.2px] leading-[20px]'>
              {button.text.length > 40 ? (
                <>{button.text.substring(0, 40)}...</>
              ) : (
                <>{button.text}</>
              )}
            </Link>
          )}
        </div>
      </div>

      <div className='mt-12'>
        <div className='flex gap-x-4 gap-y-8 justify-center flex-wrap'>
          {socialIcons.map((icon) => 
            <button className='flex justify-center' style={{width:"calc(20% - 16px)"}}>{icon}</button>
          )}
        </div>
      </div>

      <h3 className='mt-10 mb-[30px] flex justify-center items-center gap-x-1 text-[8px]'>
        Powered by <img src={zaviago} />
      </h3>
    </div>
  )
}

export default Home;