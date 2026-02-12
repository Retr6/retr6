import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Message sent! (placeholder)");
  };

  return (
    <section className="flex flex-col justify-center min-h-screen p-10 lg:p-14">
      <div className="space-y-10 max-w-md animate-fade-in">
        <p className="text-sm-header text-muted-foreground uppercase tracking-widest">contact</p>

        <h2 className="text-main-header lowercase text-foreground">
          let's create something great together.
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-body text-muted-foreground lowercase">
              name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              placeholder="your name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-body text-muted-foreground lowercase">
              email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              placeholder="you@email.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-body text-muted-foreground lowercase">
              message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
              placeholder="tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-body font-medium text-primary-foreground transition-all duration-300 hover:opacity-90"
          >
            send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
