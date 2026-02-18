import { CopyIcon, CheckIcon } from "lucide-react";
import { useState } from "react";
import linkedinIcon from "@/assets/icons/linkedin.png";
import twitterIcon from "@/assets/icons/twitter.png";
import layersIcon from "@/assets/icons/layers.png";
import instagramIcon from "@/assets/icons/instagram.png";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);
  const emailAddress = "hey@femi.design";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Message sent! (placeholder)");
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email", error);
    }
  };

  return (
    <section className="lg:py-4 py-12 lg:px-6 px-4">
      <div className="space-y-6 w-full animate-fade-in">

        <h2 className="text-[22px] font-medium text-white">
          Contact Me
        </h2>

        <p className="text-body text-white/70 max-w-xl tracking-tight leading-relaxed">
          Feel free to reach out if you’d like to collaborate — or just chat about design, gym, crypto, startups, or even astronomy!
        </p>

        {/* Email + copy */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${emailAddress}`}
            className="text-lg text-white hover:text-white/80 transition-colors cursor-pointer"
          >
            {emailAddress}
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1 rounded-full bg-[#26282C] px-5 py-2 text-xs font-medium text-white shadow-[0_-1px_0_0_#393C42] transition-all duration-300 hover:opacity-90"
          >
            {copied ? (
              <>
                <CheckIcon className="h-4 w-4 mr-1" />
                Copied
              </>
            ) : (
              <>
                <CopyIcon className="h-4 w-4 mr-1" />
                Copy
              </>
            )}
          </button>
        </div>

        {/* Social icons */}
        <div className="!mt-12">
        <h3 className="text-md font-medium text-white/70 mb-2">Social Media</h3>
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/olufemi-kolade-johnson"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center rounded-full hover:scale-110 transition-all duration-300"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6" />
          </a>
          <a
            href="https://x.com/0x_femi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="flex items-center justify-center rounded-full hover:scale-110 transition-all duration-300"
          >
            <img src={twitterIcon} alt="X" className="h-6 w-6" />
          </a>
          <a
            href="https://layers.to/femi6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Layers"
            className="flex items-center justify-center rounded-full hover:scale-110 transition-all duration-300"
          >
            <img src={layersIcon} alt="Layers" className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/femi6.design"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center rounded-full hover:scale-110 transition-all duration-300"
          >
            <img src={instagramIcon} alt="Instagram" className="h-6 w-6" />
          </a>
        </div>
        </div>


      </div>
    </section>
  );
};

export default Contact;
