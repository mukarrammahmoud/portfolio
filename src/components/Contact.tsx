import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionWrapper from './SectionWrapper';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Contact: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.contact-anim', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      });
    },
    { scope: container }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Message sent! (This is a demo)');
  };

  return (
    <SectionWrapper id="contact" className="mb-20">
      <div ref={container} className="grid md:grid-cols-2 gap-12 lg:gap-24">
        <div>
          <h2 className="contact-anim text-sm font-bold text-primary tracking-widest uppercase mb-4">Get in Touch</h2>
          <h3 className="contact-anim text-3xl md:text-4xl font-bold mb-6">Let's work together</h3>
          <p className="contact-anim text-muted-foreground text-lg mb-8">
            I'm currently available for freelance projects and open to full-time opportunities. 
            If you have a project that needs some creative touch, let's chat.
          </p>

          <div className="space-y-6">
            <div className="contact-anim flex items-center gap-4">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:mukarramalmatiany@gmail.com" className="font-medium hover:text-primary transition-colors">mukarramalmatiany@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-anim flex items-center gap-4">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Remote / Worldwide</p>
              </div>
            </div>

            <div className="contact-anim flex items-center gap-4">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-primary">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a href="tel:+967779629928" className="font-medium hover:text-primary transition-colors">+967779629928</a>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-anim bg-card border border-border p-8 rounded-2xl shadow-sm space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="john@example.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea 
              id="message" 
              rows={4}
              className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              placeholder="Tell me about your project..."
              required
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            Send Message
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
