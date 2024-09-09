import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Image from 'next/image';

export default function Job () {
    return(
        <>
            <div className="flex flex-col bg-white rounded-2xl p-4 hover:-translate-y-2 transition-transform max-w-[272px]">
                <div className="flex flex-row justify-between items-center">
                    <div ><Image className='rounded-full' src={"/image/logo/aviva.png"} alt='' width={72} height={72}/></div>
                    <div className="bg-slate-200 text-slate-600 rounded-full font-semibold text-sm px-4 py-2 h-fit">Full-time</div>
                </div>
                <div className="mt-4 text-xl font-medium text-[#262626]">Finance Allocation Manager</div>
                <div className="mt-0.5 line-clamp-1 text-sm text-[#737373]">Aviva</div>
                <div className="mt-0.5 line-clamp-1 text-sm text-[#737373] mb-5">Markham, ON, Canada</div>
                {/* <div className='flex space-x-5'></div> */}
                <div className="flex items-center mb-2">
                    <AccessTimeFilledIcon sx={{ color: '#A3A3A3' }} fontSize='small'/>
                    <div className="ml-1.5 text-xs text-[#737373]">2 Days Ago</div>
                </div>
                <div className="flex items-center mb-2">
                    <MonetizationOnIcon sx={{ color: '#A3A3A3' }} fontSize='small' />
                    <div className="ml-1.5 text-xs text-[#737373]">Depends on Experience</div>
                </div>
                <div className="flex items-center mb-2">
                    <SignalCellularAltIcon sx={{ color: '#A3A3A3' }} fontSize='small' />
                    <div className="ml-1.5 text-xs text-[#737373]">Senior Level</div>
                </div>
            </div>
        </>
    )
}