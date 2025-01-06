import { IconBrandReact, IconDiamond , IconBrandTailwind } from '@tabler/icons-react';
const RegisterStart = () => {
    return (
      <div className='bg-slate-100 flex-col rounded-lg h-[8rem]'>
          <div className="headerregister">CodeWithHorn</div>
              <div className='text-[1.1rem] pt-1 text-center'>Register Made Simple</div>
              <div className='pt-2 text-center flex gap-3 justify-center'>
                  <IconBrandReact stroke={2} className='text-[#00cbce]'/>
                  <IconDiamond stroke={2} className='text-[#0f17bf]'/>
                  <IconBrandTailwind stroke={2} className='text-[#00efef]' />
          </div>
      </div>
    )
  }
  
export type RicardoProp = {
  gifUrl : string;
  img : string
  isGifAvailable : boolean
}  

const Registercomplete = ({gifUrl , img ,  isGifAvailable} : RicardoProp) => {

  return (
    <>
        <div className='relative bg-slate-100 flex-col  rounded-lg h-[18rem] mt-[12rem] p-5 px-7 w-[28rem]'>
            <span id="confettiReward" className="absolute top-1/2 left-1/2" />
            <span id="balloonsReward" className="absolute top-1/2 left-1/2"/>
            <div className="headerregistercomplete">Registration Complete</div>
            {isGifAvailable ? (
              <iframe src={gifUrl} className='mt-4 mx-auto' />
            ) : (
              <img src={img} className='mt-4 mx-auto h-[10rem]'></img>
            )}
            
        </div>
    </>
  )
}

export {RegisterStart , Registercomplete}


