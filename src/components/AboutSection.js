import Image from "next/image";
import Link from "next/link";
import { GiCheckMark } from "react-icons/gi";


export default function AboutSection(){
    return (
        <section id="about" className="space-y-4">
            <h1 className="text-3xl font-light">About</h1>
            <div className="mx-16">
                <div className="flex space-x-56 justify-center h-96">
                    <div className="flex flex-col space-y-16">
                        <div className="flex flex-col space-y-4">
                            <h1 className="text-xl font-semibold">Welcome to Manager Mate</h1>
                            <span>Your ultimate solution for seamless and efficient line management.</span>
                            <span>Our platform is designed to help you streamline processes, optimize workflows,<br /> and enhance productivity.</span> 
                            <span>
                            Whether you're managing a small team or overseeing large operations, <br />
                            Manager Mate provides the tools you need to succeed.
                            </span>
                        </div>
                        <Link href={'/auth/signup'} className="border w-1/2 h-[2.5rem] font-semibold bg-[#5f53b2] rounded text-white flex justify-center items-center">Get Started</Link>
                    </div>
                    <div>
                        <h1 className="font-semibold text-lg">Why Choose Manager Mate</h1>
                        <div className="flex flex-col justify-between h-64 mt-6">
                            <span className="flex items-center space-x-2">
                                <GiCheckMark size={30} />
                                <h1>User-Friendly Interface: <br /> Navigate with ease and get things done faster.</h1>
                            </span>
                            <span className="flex items-center space-x-2">
                                <GiCheckMark  size={30}/>
                                <h1>Comprehensive Features: <br /> From task management to performance tracking, we've got you covered.</h1>
                            </span>
                            <span className="flex items-center space-x-2">
                                <GiCheckMark size={30} />
                                <h1>Real-Time Insights: <br /> Make informed decisions with up-to-date data and analytics.</h1>
                            </span>
                            <span className="flex items-center space-x-2">
                                <GiCheckMark size={30} />
                                <h1>Collaboration Made Easy: <br /> Improve communication and teamwork with integrated collaboration tools.</h1>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}