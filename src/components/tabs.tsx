import { Tabs_Data } from "@/const/tab-data";
import Image from "next/image";
import React from "react";

export default function Tabs() {
    const [openTab, setOpenTab] = React.useState(1);
    const handleFaq = (id: any) => {
        if (openTab === id) {
            return setOpenTab(id)
        }
        setOpenTab(id)
    }
    return (
        <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-10 relative z-10 items-center'>
            <div className=''>
                <h1 className='md:text-[78px] text-5xl leading-none font-bold mb-8 axiformaBold'>
                    Everyone is a winner at Ride.
                </h1>
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <ul className="flex mb-0 list-none flex-wrap flex-row gap-0 border-b-[6px] border-[#7EB72E]" role="tablist">
                            {Tabs_Data.map((item: any, idx: number) => {
                                return <li key={idx} className="text-center">
                                    <span className={"md:w-[12rem] w-[9rem] block py-[14px] md:px-[30px] px-[9px] rounded-tl-md rounded-tr-md md:text-2xl text-sm font-normal cursor-pointer  " +
                                        (openTab === item.id
                                            ? "text-white bg-[#99C12A]"
                                            : "text-[#272727] bg-white hover:bg-[#99C12A] hover:text-white")
                                    }
                                        onClick={() => handleFaq(item.id)}
                                        data-toggle="tab"
                                        role="tablist">
                                        {item.title}
                                    </span>
                                </li>
                            })}
                        </ul>
                        <div className="relative flex flex-col min-w-0 mt-5">
                            <div className="py-5 flex-auto">
                                <div className="tab-content tab-space">
                                    {Tabs_Data.map((item: any, idx: number) => {
                                        return <div key={idx} className={openTab === item.id ? "block" : "hidden"} id="link1">
                                            <ul className="grid gap-3">
                                                {item.content?.map((item: any, _idx: number) => {
                                                    return <li key={_idx} className="md:text-4xl text-2xl font-normal text-[#272727] flex items-center gap-3">
                                                        <span className="bg-gradient-to-r from-[#ADCF45] to-[#7EB72E] md:h-[14px] h-[7px] md:min-w-[33px] min-w-[20px] rounded-md"></span>  {item.para}
                                                    </li>
                                                })}
                                            </ul>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:bg-none bg-[url("/images/bg3.svg")] bg-right bg-no-repeat bg-contain'>
                {Tabs_Data.map((item: any, idx: number) => {
                    return <div key={idx} className={openTab === item.id ? "block" : "hidden"} id="link1">
                        <Image src={item?.img} alt={item?.title} width={830} height={643} />
                    </div>
                })}

            </div>
        </div>
    );
}