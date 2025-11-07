import { Textarea } from "@/components/ui/textarea"
import Mail from "../assets/mail.png"
import Phone from "../assets/phone-call.png"
import LocationPin from "../assets/location-pin.png"
import { useState } from "react"

export default function ContactSection() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleName = (e) => {
        setName(e.target.value)
        console.log("Name:", e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        console.log("Email:", e.target.value)
    }

    const handleMessage = (e) => {
        setMessage(e.target.value)
        console.log("Message:", e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Submitted! \nName: ${name} \nEmail: ${email} \nMessage: ${message}`)
    }

    return (
        <>
            <div id="contact" className="w-full min-h-screen p-24">
                <div className="flex flex-col text-center">
                    <h1 className="text-white uppercase text-2xl md:text-3xl font-medium mt-12 md:mt-12">CONTACT</h1>
                    <div className=" flex flex-col md:flex-row gap-x-32 md:mt-16 justify-center">
                        <div className="text-center md:text-start">
                            <p className="text-white mt-3 md:w-lg">I'm always excited to collaborate on meaningful projects and explore new opportunities!</p>
                            <p className="text-white flex gap-x-5 mt-8 md:mt-8"><img src={Mail}/>edrick.calzar@cvsu.edu.ph</p>
                            <p className="text-white flex gap-x-5 mt-4 md:mt-4"><img src={Phone}/>+63 966 537 1527</p>
                            <p className="text-white flex gap-x-5 mt-4 md:mt-4"><img src={LocationPin}/>Cavite, Philippines</p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col mt-6 md:mt-0 gap-y-4 md:gap-y-4">
                            <input 
                                type="text"
                                value={name}
                                onChange={handleName} 
                                placeholder="Your Name" 
                                className="text-white border border-gray-300 w-full md:w-lg h-12 rounded-md px-3 font-light"
                            />
                            <input 
                                type="text"
                                value={email} 
                                onChange={handleEmail} 
                                placeholder="Your Email" 
                                className="text-white border border-gray-300 w-full md:w-lg h-12 rounded-md px-3 font-light"
                            />
                            <Textarea
                                type="text" 
                                value={message}
                                onChange={handleMessage} 
                                placeholder="Your Message"
                                className="text-white border-gray-300 w-full md:w-lg h-32 rounded-md"
                            />
                            <button className="bg-green-500 py-2 md:w-28 rounded-md text-white text-sm font-medium hover:bg-green-600 transisition-all duration-300 ease-in-out cursor-pointer md:mb-0 mb-12">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </>
        
    )
}