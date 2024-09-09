import DropdownWithCheckboxes from "@/components/Jobs/dropdown";
import Job from "@/components/Jobs/Job";
import { jobsfilter } from "@/data/jobsfilter";
const jobData = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,161,71,8,19,20,21,22,23,24,25]
export default function Jobs () {
    return(
        <>
            <div className="flex px-2 pt-6 pb-10 pl-20 bg-[#F1F5F9] justify-center">
                <div className="flex flex-col justi">
                    <div className="flex flex-row flex-wrap gap-4 p-4 ">
                        {jobsfilter.map((item) => (
                            <DropdownWithCheckboxes key={item.id} title={item.title} content={item.content}/>
                        ))}
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 p-4 my-10 gap-x-4 gap-y-8">
                        {jobData.map((item) => (
                            <Job key={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )

}