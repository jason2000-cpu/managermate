import Image from "next/image"

export default function BannerSection(){
    return (
        <section id="home" className="flex  py-24 space-x-24 pl-4">
          <div className="flex flex-col justify-center items-center space-y-4">
            <span className="font-bold text-3xl text-[#094190]">MANAGER MATE</span>
            <h1 className="font font-serif text-xl tracking-wider">Your Ultimate Solution for Seamless and Efficient</h1>
            <span className="text-xl font-bold italic">Line Management</span>
          </div>
          <div>
            <Image src={'/static/images/banner2.jpg'} height={900} width={1000} alt="banner" />
          </div>
        </section>
    )
}