import { CopyIcon } from "lucide-react";
import { useState } from "react";
import linkedinIcon from "@/assets/icons/linkedin.png";
import twitterIcon from "@/assets/icons/twitter.png";
import layersIcon from "@/assets/icons/layers.png";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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
    } catch (error) {
      console.error("Failed to copy email", error);
    }
  };

  return (
    <section className="py-4 px-6">
      <div className="space-y-6 w-full animate-fade-in">

        <h2 className="text-[22px] font-medium text-white">
          Contact Me
        </h2>

        <p className="text-body text-white/70 max-w-xl tracking-tight leading-relaxed">
          Feel free to reach out if you’d like to collaborate — or just chat about design, gym, crypto, startups, or even astronomy!
        </p>

        {/* Email + copy */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-lg text-white">{emailAddress}</span>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1 rounded-full bg-[#26282C] px-5 py-2 text-xs font-medium text-white shadow-[0_-1px_0_0_#393C42] transition-all duration-300 hover:opacity-90"
          >
            <CopyIcon className="h-4 w-4 mr-1" />
            Copy
          </button>
        </div>

        {/* Social icons */}
        <div className="!mt-12">
        <h3 className="text-md font-medium text-white/70 mb-2">Social Media</h3>
        <div className="flex items-center gap-5">
          <a
            href="#"
            aria-label="LinkedIn"
            className="lex items-center justify-center rounded-full hover:scale-110 transition-all duration-300"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="X"
            className="flex items-center justify-center rounded-full hover:scale-110 transition-all duration-300"
          >
            <img src={twitterIcon} alt="X" className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="flex items-center justify-center rounded-full hover:scale-110 transition-all duration-300"
          >
            <img src={layersIcon} alt="Instagram" className="h-5 w-5" />
          </a>
        </div>
        </div>


      </div>
    </section>
  );
};

export default Contact;
