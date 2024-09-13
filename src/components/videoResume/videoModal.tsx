"use client"
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import UploadInstead from './uploadInstead';

interface VideoModalProps {
    subtitle: string
    click: boolean
    setClick: React.Dispatch<React.SetStateAction<boolean>>;
  }

const VideoModal:React.FC<VideoModalProps> = ({ subtitle, click }) => {

    return(
        <>
            <div className={`flex flex-col max-md:flex-auto w-full h-full max-w-3xl mx-auto overflow-hidden shadow sm:my-2 lg:mt-4 sm:px-10 sm:py-6 rounded-2xl bg-[#262626] md:order-2 order-1 translate-y-[850px]`}
                style={{
                    transitionProperty: 'transform',
                    transitionDuration: '150ms',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: click ? 'translateY(20rem)' : 'translateY(0px)',
                }}
            >
                <div className=' max-sm:p-6'>
                    <div className="mb-0 text-xl sm:text-2xl max-w-[96%] text-white font-bold">{subtitle}</div>
                    <div className="flex items-center mt-2">
                        <AccessTimeFilledIcon/>
                        <div className="ml-1.5 text-[#A3A3A3] text-[13px]">Time limit: 90 seconds</div>
                    </div>
                </div>
                <div className='relative flex flex-auto w-full h-full max-md:pb-10 md:h-[387px]'>
                    <div className='relative'>
                        <div className='absolute1 flex flex-col items-center justify-center flex-auto w-full h-full bg-black rounded-xl overflow-hidden'>
                            <div className='px-2 mb-4 text-center text-white text-sm z-10'>We have detected that you are blocking the use of webcam. Please enable it and refresh the page to continue, or upload below.</div>
                            <div className='z-10'><UploadInstead/></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoModal;