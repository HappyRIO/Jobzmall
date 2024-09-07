import { Avatar } from "@mui/material"

export default function Story() {
    return(
        <>
            {/* <div className="flex flex-col"> */}
                <div className="flex flex-col relative w-full bg-white rounded-lg my-4 shadow-lg">
                    <div className="absolute top-5 left-3 z-10 text-white text-sm">Hello JobzMall</div>
                    <video className="rounded-xl" controls loop>
                        <source src="/videos/story1.mp4" type="video/mp4" />
                    </video>
                    <div className="flex flex-row p-4 space-x-2 items-center">
                        <Avatar sx={{ width: 32, height: 32 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <div>
                            <div className="text-[#262626] text-sm"><b>Prima Shah</b> · Boston, MA, USA</div>
                            <div className="text-[#262626] text-sm">Project Management Student at Northeastern University</div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}