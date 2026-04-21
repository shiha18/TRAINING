import { useState, useRef, FormEvent } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // EmailJS logic
    // NOTE: In a real app, these IDs would be from environment variables
    const SERVICE_ID = "service_training_ad"; // Placeholder
    const TEMPLATE_ID = "template_enquiry"; // Placeholder
    const PUBLIC_KEY = "user_placeholder_key"; // Placeholder

    try {
      // For demonstration, we'll simulate the success if keys are placeholders
      // If keys were real, we'd use: 
      // await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY);
      
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay
      
      setSuccess(true);
      if (formRef.current) formRef.current.reset();
    } catch (err) {
      setError("Failed to send enquiry. Please try again later or contact us via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <span className="text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Get In Touch</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-glow">Start Your <span className="blue-gradient-text italic font-serif">Journey</span> Today</h1>
            <p className="text-slate-400 text-lg">
              Have questions about our courses or need a custom training plan? Our team at shihama2004@gmail.com is ready to assist you.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel p-8 rounded-[2.5rem]">
              <h2 className="text-2xl font-bold text-white mb-8 italic font-serif text-glow">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <MapPin className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Our Location</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Hamdan Bin Mohammed Street, Al Danah, <br />
                      Abu Dhabi, United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <Phone className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Phone Number</h4>
                    <a href="tel:+919597946313" className="text-slate-400 text-sm hover:text-blue-400 transition-colors">+91 95979 46313</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <Mail className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Email Address</h4>
                    <a href="mailto:shihama2004@gmail.com" className="text-slate-400 text-sm hover:text-blue-400 transition-colors tracking-wide">
                      shihama2004@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="accent-gradient p-8 rounded-[2.5rem] text-white shadow-2xl shadow-blue-500/20">
              <h3 className="text-xl font-bold mb-6 text-glow">Business Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-white/70 text-sm">
                  <span className="flex items-center gap-2 italic"><Clock className="w-4 h-4" /> Mon - Fri:</span>
                  <span className="font-bold text-white">09:00 AM - 08:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-white/70 text-sm">
                  <span className="flex items-center gap-2 italic"><Clock className="w-4 h-4" /> Saturday:</span>
                  <span className="font-bold text-white">10:00 AM - 04:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-white/70 text-sm border-t border-white/10 pt-4">
                  <span className="flex items-center gap-2 italic"><Clock className="w-4 h-4" /> Sunday:</span>
                  <span className="font-bold text-white">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-12 rounded-[2.5rem]">
              {success ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="text-green-400 w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4 text-glow">Message Sent!</h2>
                  <p className="text-slate-400 text-lg mb-8">
                    Thank you for your enquiry. One of our counselors will contact you shortly.
                  </p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="text-blue-400 font-bold flex items-center gap-2 mx-auto hover:gap-3 transition-all"
                  >
                    Send another message <Send className="w-4 h-4" />
                  </button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-white mb-8 text-glow">Send an Enquiry</h2>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold ml-1">Full Name</label>
                        <input 
                          type="text" 
                          name="user_name"
                          required
                          placeholder="John Doe"
                          className="w-full bg-slate-900/50 border border-white/10 focus:ring-1 focus:ring-blue-400/50 rounded-xl px-5 py-4 text-white font-medium transition-all focus:outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold ml-1">Email Address</label>
                        <input 
                          type="email" 
                          name="user_email"
                          required
                          placeholder="john@email.com"
                          className="w-full bg-slate-900/50 border border-white/10 focus:ring-1 focus:ring-blue-400/50 rounded-xl px-5 py-4 text-white font-medium transition-all focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold ml-1">Phone Number</label>
                        <input 
                          type="tel" 
                          name="user_phone"
                          required
                          placeholder="+971 -- --- ----"
                          className="w-full bg-slate-900/50 border border-white/10 focus:ring-1 focus:ring-blue-400/50 rounded-xl px-5 py-4 text-white font-medium transition-all focus:outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold ml-1">Select Course</label>
                        <select 
                          name="course_interest"
                          required
                          className="w-full bg-slate-900/50 border border-white/10 focus:ring-1 focus:ring-blue-400/50 rounded-xl px-5 py-4 text-white font-medium transition-all focus:outline-none appearance-none cursor-pointer"
                        >
                          <option value="">Choose a course</option>
                          <option value="CRM Mastery">CRM Mastery</option>
                          <option value="Network Security">Network Security</option>
                          <option value="Supply Chain">Supply Chain Management</option>
                          <option value="Data Analytics">Data Analytics</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold ml-1">Your Message</label>
                      <textarea 
                        name="message"
                        required
                        rows={4}
                        placeholder="Tell us about your career goals..."
                        className="w-full bg-slate-900/50 border border-white/10 focus:ring-1 focus:ring-blue-400/50 rounded-xl px-5 py-4 text-white font-medium transition-all focus:outline-none resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={loading}
                      className="w-full bg-white text-slate-950 font-bold py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-blue-50 transition-all shadow-xl disabled:opacity-50"
                    >
                      {loading ? (
                        <div className="w-6 h-6 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Enquiry 
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    
                    <div className="text-center pt-4">
                      <p className="text-slate-500 text-xs">
                        Interested in immediate support? 
                        <a href="https://wa.me/919597946313" className="text-[#25D366] font-bold inline-flex items-center gap-1 ml-1">
                          WhatsApp Us
                        </a>
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 rounded-[3rem] overflow-hidden grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 h-[400px] border border-slate-100 shadow-xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14526.471545648584!2d54.36391484857448!3d24.4640578652601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e661605151515%3A0x1c1c1c1c1c1c1c1c!2sHamdan%20Street%2C%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1650000000000!5m2!1sen!2sae" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
