import Image from "next/image";


export function Card({heading,text}) {
    return <div className="work_card text-center px-4 py-4 md:px-5 md:py-5">
        <h1 className="font-semibold text-[20px] md:text-4xl md:mb-6">{heading}</h1>
        <p className="md:text-2xl  text-[12px]">
        Zero pressure to purchase anything, this is purely an informational call for us to put together the perfect package. 
        Schedule this using the unlock button.
        </p>
    </div>
} 

export function MyImage({src}){
    return <>
        <Image
            className="hidden md:block order-2 md:order-1"
            src={src}
            width={317}
            height={317}
        />
        <Image
            className="md:hidden order-2 md:order-1"
            src={src}
            width={120}
            height={120}
        />
    </>
}

export default function  HowitWorks(){
    return <section className="mt-10 md:mt-0">
        <div className="container md:mx-auto md:w-[1200px] mb-10 md:mb-0 md:py-20">
            <div className="text-center mb-10 md:mb-20">
                <h1 className=" text-2xl md:text-5xl md:mb-4 font-extrabold">How it works</h1>
                <h6 className="text-[14px] md:text-2xl font-extrabold">
                    Elevate your business in <span className="text-colorTwo">4 easy steps</span>
                </h6>
            </div>
            <div className="px-3 md:px-0 space-y-6 md:space-y-12">
                <div className="flex justify-center md:justify-start   gap-4 md:gap-60">
                    <div  className="w-[60%] md:mt-7 md:w-[45%]">
                        <Card heading="1. Discovery call"/>
                    </div>
                    <MyImage src="/work-image1.png"/>
                </div>

                <div className="flex justify-center  gap-4 md:justify-evenly md:gap-60">
                    <MyImage src="/work-image2.png"/>
                    <div className="order-1 md:mt-7 md:order-2 w-[60%] md:w-[45%]">
                        <Card heading="2. Follow-up call"/>
                    </div>
                </div>

                <div className="flex justify-center md:justify-start  gap-4 md:gap-60">
                    <div className="w-[60%] md:mt-7 md:w-[45%]">
                        <Card heading="3. Agreement"/>
                    </div>
                    <MyImage src="/work-image3.png"/>
                </div>

                <div className="flex justify-center gap-4 md:justify-evenly md:gap-60">
                    <MyImage src="/work-image4.png"/>
                    <div className="order-1 md:mt-7 md:order-2 w-[60%] md:w-[45%]">
                        <Card heading="4. Plan & Execute"/>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
}