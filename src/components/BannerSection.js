import Image from "next/image"

export default function BannerSection(){
    return (
        <section id="home" className="flex justify-between">
          <div className="flex flex-col justify-center items-center space-y-4">
            <span className="font-bold text-3xl text-[#094190]">MANAGER MATE</span>
            <h1 className="font font-serif text-xl tracking-wider">Your Ultimate Solution for Seamless and Efficient</h1>
            <span className="text-xl font-bold italic">Line Management</span>
          </div>
          <div className="w-[60rem] h-[46rem] relative">
            <Image 
              src={'/static/images/banner2.jpg'} 
              fill
              className="object-contain"
              alt="banner" priority={true} 

              />
          </div>
        </section>
    )
}