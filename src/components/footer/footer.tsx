import { Link } from "react-router-dom"
import mailIcon from "@/assets/icons/mail.png"
import linkedinIcon from "@/assets/icons/linkedin.png"
import twitterIcon from "@/assets/icons/twitter.png"
import instagramIcon from "@/assets/icons/instagram.png"

const Footer = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 lg:px-0">
            <div className="text-center border-b border-[#FFFFFF33] pb-16">
                <p className="font-medium text-white/70">Thanks for reading</p>
                <p className="lg:text-[3rem] text-[2rem] mt-6 lg:max-w-[700px] max-w-[360px] mx-auto tracking-tight font-neue font-medium" style={{ lineHeight: '1.2' }}>I'd love to help you meet your business goals</p>
                <div className="flex flex-wrap items-center gap-4 justify-center mt-5">
                    <a href="https://calendly.com/femikolade6/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium border border-[#FFFFFF33] text-white transition-all duration-300 hover:bg-[]">Book a free call</a>
                    <Link to="/work" className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-foreground/60 hover:underline hover:text-white">See more work</Link>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start justify-between pt-14 pb-20">
                {/* Left side - Two columns */}
                <div className="flex gap-32">
                    {/* Connect with me column */}
                    <div className="space-y-4">
                        <h3 className="font-medium text-white/70 mb-6">Connect with me</h3>
                        <div className="space-y-4">
                            <a href="mailto:hey@femi.design" className="flex items-center gap-3 text-white hover:text-white/80 transition-colors">
                                <img src={mailIcon} alt="Mail" className="w-4 h-4" />
                                <span className="text-sm">hey@femi.design</span>
                            </a>
                            <a href="https://x.com/0x_femi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-white/80 transition-colors">
                                <img src={twitterIcon} alt="X" className="w-4 h-4" />
                                <span className="text-sm">@0x_femi</span>
                            </a>
                            <a href="https://www.linkedin.com/in/olufemi-kolade-johnson" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-white/80 transition-colors">
                                <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4" />
                                <span className="text-sm">Kolade Olufemi Johnson</span>
                            </a>
                            <a href="https://www.instagram.com/femi6.design" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-white/80 transition-colors">
                                <img src={instagramIcon} alt="Instagram" className="w-4 h-4" />
                                <span className="text-sm">femi6.design</span>
                            </a>
                        </div>
                    </div>

                    {/* Site column */}
                    <div className="space-y-4">
                        <h3 className="font-medium text-white/70 mb-6">Site</h3>
                        <div className="space-y-4">
                            <Link to="/" className="block text-white hover:text-white/80 transition-colors text-sm">Home</Link>
                            <Link to="/work" className="block text-white hover:text-white/80 transition-colors text-sm">Works</Link>
                            <Link to="/about" className="block text-white hover:text-white/80 transition-colors text-sm">About me</Link>
                            <Link to="/contact" className="block text-white hover:text-white/80 transition-colors text-sm">Contact</Link>
                        </div>
                    </div>
                </div>

                {/* Right side - Large vertical name */}
                <div className="lg:block hidden text-white/40 text-7xl lg:text-7xl font-medium tracking-tight leading-relaxed text-right font-neue">
                    <h2>Olufemi <br /> Kolade</h2>
                </div>

                
            </div>
            <h2 className="lg:hidden block text-white/40 text-7xl font-medium tracking-tight text-center font-neue">Olufemi <br /> Kolade</h2>
        </div>
    )
}

export default Footer