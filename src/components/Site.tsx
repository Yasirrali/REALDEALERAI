import { motion } from "motion/react";
import { MessageSquare, Bot, Zap, TrendingUp, Users, CheckCircle, Car, Key, Gauge, ShieldCheck, MapPin, Search } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Markdown from "react-markdown";

export function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center transition-all">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-brand-lime rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(204,255,0,0.3)]">
          <Car className="text-brand-dark w-6 h-6" />
        </div>
        <span className="font-display font-bold text-2xl tracking-tighter text-white">RealDealerAI</span>
      </div>
      
      <div className="hidden md:flex items-center gap-12 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
        <a href="/" className="hover:text-brand-lime transition-colors">Home</a>
        
        <div 
          className="relative group"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <button className="flex items-center gap-1 hover:text-brand-lime transition-colors cursor-pointer outline-none">
            Services
          </button>
          
          <motion.div 
            initial={{ opacity: 0, y: 10, pointerEvents: 'none' }}
            animate={isServicesOpen ? { opacity: 1, y: 0, pointerEvents: 'auto' } : {}}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[800px]"
          >
            <div className="glass-dark border border-white/10 rounded-[40px] p-10 grid grid-cols-2 gap-8 shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
              <div className="space-y-6">
                <p className="text-[10px] font-black tracking-[3px] text-brand-lime uppercase">Autonomous Agents</p>
                <div className="grid gap-4">
                  {[
                    { t: "Voice AI Lisa", d: "High-cadence qualification & appointment booking", icon: <Bot className="w-5 h-5" color="#ccff00" /> },
                    { t: "Multi-Agent System", d: "Gen-AI agents working in sync for peak ops", icon: <Users className="w-5 h-5" color="#ccff00" /> },
                    { t: "Chat Intelligence", d: "24/7 engagement via web, SMS, and WhatsApp", icon: <MessageSquare className="w-5 h-5" color="#ccff00" /> }
                  ].map((s, i) => (
                    <a key={i} href="#" className="flex gap-4 p-4 hover:bg-white/5 rounded-2xl transition-all border border-transparent hover:border-white/5">
                      <div className="shrink-0 pt-1">{s.icon}</div>
                      <div>
                        <p className="text-white font-bold text-sm mb-1">{s.t}</p>
                        <p className="text-white/40 text-xs font-medium lowercase tracking-normal">{s.d}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-[10px] font-black tracking-[3px] text-brand-orange uppercase">Dealer Infrastructure</p>
                <div className="grid gap-4">
                  {[
                    { t: "CRM Deep-Sync", d: "Native data flow for VinSolutions & Elead", icon: <Zap className="w-5 h-5" color="#fa8019" /> },
                    { t: "Inventory Intel", d: "Real-time showroom tracking & reporting", icon: <TrendingUp className="w-5 h-5" color="#fa8019" /> },
                    { t: "Trust Audits", d: "Verified compliance and ethical alignment", icon: <ShieldCheck className="w-5 h-5" color="#fa8019" /> }
                  ].map((s, i) => (
                    <a key={i} href="#" className="flex gap-4 p-4 hover:bg-white/5 rounded-2xl transition-all border border-transparent hover:border-white/5">
                      <div className="shrink-0 pt-1">{s.icon}</div>
                      <div>
                        <p className="text-white font-bold text-sm mb-1">{s.t}</p>
                        <p className="text-white/40 text-xs font-medium lowercase tracking-normal">{s.d}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <a href="#contact" className="hover:text-brand-lime transition-colors">Contact</a>
      </div>

      <button className="bg-brand-lime text-brand-dark px-6 py-2.5 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-brand-lime/20">
        Agent Login
      </button>
    </nav>
  );
}

export function Hero() {
  return (
    <section className="relative pt-40 pb-24 flex flex-col items-center text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full bg-brand-lime/5 blur-[120px] rounded-full -z-10" />
      
      <div className="section-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-lime text-xs font-bold uppercase tracking-[0.2em] mb-8">
            The World's Most Advanced Dealer CRM
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.95] mb-8 tracking-tighter text-white">
            Your Showroom.<br />
            <span className="text-brand-lime italic">Driven by AI.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Automate your entire sales pipeline. From the first click to the final handshake, our AI agents handle every lead with perfection.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-brand-lime text-brand-dark px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-tight hover:scale-105 transition-all shadow-2xl hover:shadow-brand-lime/30">
              Transform My Dealership
            </button>
            <button className="w-full sm:w-auto glass px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all border-white/20">
              Watch Inventory Demo
            </button>
          </div>
        </motion.div>
      </div>

      <div className="section-container mt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-[40px] p-8 md:p-12 border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)]"
        >
          <div className="grid md:grid-cols-4 gap-12 text-center md:text-left">
            {[
              { val: "99.8%", label: "Lead Response Rate", color: "text-brand-lime" },
              { val: "1.2s", label: "Avg Response Time", color: "text-brand-orange" },
              { val: "22%", label: "Appointment Lift", color: "text-white" },
              { val: "24/7", label: "Showroom Coverage", color: "text-brand-lime" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2 border-l border-white/10 pl-6 first:border-0 first:pl-0">
                <div className={`text-4xl font-black font-display ${stat.color}`}>{stat.val}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function InventorySection() {
  return (
    <section id="inventory" className="py-24 bg-brand-dark overflow-hidden relative border-y border-white/5">
      <div className="section-container">
        <div className="mb-20 text-center">
          <div className="inline-block px-4 py-1 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[10px] font-black uppercase tracking-[4px] mb-6">
            Featured Showroom
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6">Hot Inventory.</h2>
          <p className="text-white/40 text-xl font-medium max-w-2xl mx-auto">Browse our latest arrivals. Every vehicle is integrated with our AI system for instant inquiry handling and smart scheduling.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
           {[
             { 
               car: "2024 Ford F-150 Lariat", 
               price: "$68,450", 
               specs: ["5.0L V8", "4WD", "Brand New"],
               image: <Car className="w-12 h-12" />,
               badge: "Smart Price"
             },
             { 
               car: "2023 Tesla Model Y", 
               price: "$42,900", 
               specs: ["Dual Motor", "Long Range", "12k Miles"],
               image: <Zap className="w-12 h-12" />,
               badge: "Top Pick"
             },
             { 
               car: "2024 RAM 1500 TRX", 
               price: "$96,200", 
               specs: ["6.2L Supercharged", "Crew Cab", "Elite Trim"],
               image: <Car className="w-12 h-12" />,
               badge: "Limited"
             }
           ].map((item, i) => (
             <motion.div 
               key={i}
               whileHover={{ y: -12 }}
               className="bg-white/5 border border-white/10 rounded-[48px] p-10 group hover:bg-white/10 transition-all shadow-2xl relative overflow-hidden"
             >
               <div className="absolute top-8 right-8 px-4 py-1 bg-brand-lime text-brand-dark text-[10px] font-black uppercase tracking-widest rounded-full">
                  {item.badge}
               </div>

               <div className="mb-8 p-6 bg-brand-dark rounded-3xl w-fit group-hover:text-brand-lime transition-colors">
                  {item.image}
               </div>

               <h3 className="text-3xl font-black text-white mb-2 tracking-tight">{item.car}</h3>
               <p className="text-brand-lime text-2xl font-black mb-8">{item.price}</p>
               
               <div className="flex flex-wrap gap-3 mb-10">
                  {item.specs.map((spec, si) => (
                    <div key={si} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-white/50 uppercase tracking-widest">
                      {spec}
                    </div>
                  ))}
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                  <button className="py-4 bg-brand-lime text-brand-dark text-[10px] font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all">
                    Drive Now
                  </button>
                  <button className="py-4 glass border-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all">
                    Details
                  </button>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}

export function MAGSSection() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden border-b border-white/5">
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-black uppercase tracking-widest">
              Advanced Technology
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-black leading-tight tracking-tighter text-white">
              MAGS: Multi-Agent Generative System
            </h2>
            <p className="text-xl text-white/60 leading-relaxed font-medium">
              Beyond basic automation, our MAGS lets dealerships deploy specialized AI agents that work together to handle conversations, qualify leads, and assist customers 24/7.
            </p>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <p className="text-lg font-bold text-white mb-2 italic">"Finally, a system that handles your clients automatically saving you hours and working non stop."</p>
              <div className="flex items-center gap-2 text-brand-lime text-xs font-bold uppercase tracking-widest">
                <Zap className="w-4 h-4" />
                Replies in seconds
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {[
               { t: "Works 24/7", d: "Always available to answer questions day or night" },
               { t: "Never misses a lead", d: "Captures and responds to every potential customer automatically" },
               { t: "Books test drives", d: "Schedules appointments without manual follow-up" },
               { t: "CRM Integration", d: "Syncs conversations and activity directly into your CRM" }
             ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white/5 border border-white/5 rounded-2xl"
                >
                  <h4 className="text-white font-black uppercase tracking-tighter mb-2">{item.t}</h4>
                  <p className="text-white/40 text-xs font-medium leading-relaxed">{item.d}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AISection() {
  return (
    <>
    <section id="about" className="py-24 bg-brand-lime">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-brand-dark"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-dark/10 border border-brand-dark/10 text-brand-dark text-xs font-bold uppercase tracking-widest mb-8">
              Dealership Operations
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-black leading-[0.95] mb-8 tracking-tighter">
              A Dealership Engine That Never Sleeps.
            </h2>
            <p className="text-xl text-brand-dark/80 leading-relaxed font-semibold mb-10">
              Each AI agent is fully customizable and trained for your dealership operations helping you respond faster and deliver better customer experiences. 
            </p>
            
            <div className="grid gap-4">
              {[
                { title: "Instantly Responds", desc: "No more waiting. Customers get answers in seconds, not hours." },
                { title: "Qualifies Customers", desc: "Asks key questions to identify serious buyers instantly." },
                { title: "No Micromanaging", desc: "Every call, task, and follow-up is tracked automatically. Managers stay informed without the stress." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-brand-dark/5 rounded-3xl border border-brand-dark/5">
                  <div className="w-12 h-12 bg-brand-dark text-brand-lime rounded-2xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg uppercase tracking-tight">{item.title}</h4>
                    <p className="text-brand-dark/60 text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square bg-brand-dark rounded-[60px] overflow-hidden shadow-2xl p-12">
               <Bot className="w-full h-full text-brand-lime opacity-10 absolute inset-0 -rotate-12 scale-150" />
               <div className="relative z-10 h-full flex flex-col justify-center">
                 <div className="space-y-6">
                    <div className="p-6 glass rounded-3xl border-l-8 border-brand-lime">
                       <p className="text-xs font-bold text-brand-lime uppercase tracking-widest mb-2">Automated Follow-up</p>
                       <p className="text-lg font-medium text-white italic">"While your team sleeps, RealDealerAI keeps the conversation going via SMS, email, and chat."</p>
                    </div>
                    <div className="p-6 bg-brand-orange rounded-3xl self-end max-w-[80%] ml-auto text-brand-dark shadow-xl">
                       <p className="text-xs font-black uppercase tracking-widest mb-2">RealDealerAI</p>
                       <p className="text-sm font-bold font-display">"Every lead re-engaged. No more 'I forgot' or 'I missed it.' We bring dead leads back to life."</p>
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section id="lisa" className="py-32 bg-white text-brand-dark overflow-hidden">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative"
           >
             <div className="aspect-[4/5] bg-brand-dark rounded-3xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-orange to-transparent opacity-20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center text-white">
                   <div className="relative mb-8">
                      <div className="w-32 h-32 bg-white/10 rounded-full animate-ping absolute inset-0" />
                      <div className="w-32 h-32 bg-brand-orange rounded-full flex items-center justify-center relative shadow-[0_0_40px_rgba(250,128,25,0.4)]">
                         <Users className="w-12 h-12 text-white" />
                      </div>
                   </div>
                   <h3 className="text-4xl font-black mb-4 uppercase tracking-tighter">AI Voice Lisa</h3>
                   <p className="text-white/70 font-medium">Handles incoming calls, qualifies leads by credit/inventory, and books appointments directly.</p>
                </div>
                <div className="absolute bottom-6 left-6 right-6 glass-dark p-6 rounded-2xl">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-2 h-2 bg-brand-lime rounded-full animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-[3px]">Voice Qualification</span>
                   </div>
                   <div className="space-y-4">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/40">
                         <span>Engagement</span>
                         <span>98%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: "98%" }}
                           transition={{ duration: 1.5 }}
                           className="h-full bg-brand-orange" 
                         />
                      </div>
                   </div>
                </div>
             </div>
           </motion.div>

           <div className="space-y-8">
             <div className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-black uppercase tracking-widest">
               Voice AI Agent
             </div>
             <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95]">
               Lisa Qualifies Leads While You Sleep.
             </h2>
             <p className="text-xl text-brand-dark/70 font-semibold leading-relaxed">
               Talk with DealerAI Voice Lisa: (877) 769-1914. Finally, a system that handles your clients automatically saving you hours and working non stop.
             </p>
             <div className="flex items-center gap-6 p-8 bg-brand-dark text-white rounded-[40px] shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center shrink-0 shadow-lg">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase tracking-[3px] text-brand-orange">Voice Hotline</p>
                   <p className="text-3xl font-black">(877) 769-1914</p>
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-brand-dark overflow-hidden border-t border-white/5">
      <div className="section-container">
        <div className="text-center max-w-4xl mx-auto space-y-10">
          <h2 className="font-display text-5xl md:text-7xl font-black leading-[0.95] text-white tracking-tighter">
            Grow your pipeline, not your stress levels.
          </h2>
          <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-medium">
            Discover how our smart automation tools help you capture more leads, book more appointments, and close deals faster — all without adding extra work to your day.
          </p>
          <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <h3 className="text-3xl font-black text-brand-lime uppercase tracking-tighter">Want to see how it works?</h3>
            <button className="bg-brand-orange text-white px-12 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-orange/20">
              Get A Demo
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export function Features() {
  const features = [
    {
      title: "Replies in seconds",
      desc: "Instantly responds to every inquiry so customers never wait. No more missed opportunities.",
      icon: <Zap className="w-10 h-10 text-brand-lime" />,
    },
    {
      title: "Works 24/7",
      desc: "Always available to answer questions day or night. Your showroom is open around the clock.",
      icon: <MessageSquare className="w-10 h-10 text-brand-orange" />,
    },
    {
      title: "Never misses a lead",
      desc: "Captures and responds to every potential customer automatically, ensuring total coverage.",
      icon: <Users className="w-10 h-10 text-white" />,
    },
    {
      title: "Books test drives",
      desc: "Schedules test drives and appointments automatically without manual follow-up needed.",
      icon: <CheckCircle className="w-10 h-10 text-brand-lime" />,
    },
    {
      title: "Integrates with CRM",
      desc: "Syncs conversations, leads, and activity directly into your CRM. Zero manual data entry.",
      icon: <Zap className="w-10 h-10 text-brand-orange" />,
    },
    {
      title: "Qualifies instantly",
      desc: "Asks key questions to identify serious buyers and qualifies them based on your criteria.",
      icon: <TrendingUp className="w-10 h-10 text-white" />,
    }
  ];

  return (
    <section id="features" className="py-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 blur-[100px] rounded-full" />
      <div className="section-container relative z-10">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">Multi-Agent AI Built for Car Dealerships.</h2>
          <p className="text-xl text-white/50 max-w-2xl font-medium">Finally, a system that handles your clients automatically, saving you hours and working non stop.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-12 bg-white/5 border border-white/5 rounded-[48px] hover:bg-white/10 transition-all shadow-xl"
            >
              <div className="mb-8">{f.icon}</div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{f.title}</h3>
              <p className="text-white/60 leading-relaxed font-medium">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Hi! I\'m RealDealerAI. Want to see how I qualify leads for your dealership?' }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = { role: 'user' as const, text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: input, 
          history: messages.map(m => ({ 
            role: m.role, 
            parts: [{ text: m.text }] 
          })) 
        }),
      });
      
      const data = await response.json();
      if (data.text) {
        setMessages(prev => [...prev, { role: 'model', text: data.text }]);
      } else {
        throw new Error(data.error || "Failed to get reply");
      }
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having a little engine trouble. Please try again later!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="w-[350px] md:w-[450px] h-[600px] bg-brand-dark rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.8)] mb-6 flex flex-col overflow-hidden border border-white/10"
        >
          <div className="p-8 bg-brand-lime text-brand-dark flex justify-between items-center">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-brand-dark rounded-2xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-brand-lime" />
               </div>
               <div>
                 <span className="block font-black text-xl tracking-tighter uppercase">RealDealerAI</span>
                 <div className="flex items-center gap-2 text-[10px] text-brand-dark font-black uppercase tracking-widest opacity-60">
                    <span className="w-1.5 h-1.5 bg-brand-dark rounded-full animate-pulse" />
                    Online
                 </div>
               </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:scale-110 transition-transform">
               <Zap className="w-6 h-6 rotate-45" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-6">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-[32px] text-sm font-medium ${
                  m.role === 'user' 
                    ? 'bg-brand-lime text-brand-dark' 
                    : 'bg-white/5 text-white border border-white/5'
                }`}>
                  <Markdown>{m.text}</Markdown>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-5 rounded-[32px]">
                  <div className="flex gap-2">
                    <span className="w-2 h-2 bg-brand-lime rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-brand-lime rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 bg-brand-lime rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-8 bg-black/20 flex gap-3">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-medium focus:outline-none focus:border-brand-lime transition-all"
            />
            <button 
              type="submit"
              disabled={isTyping}
              className="bg-brand-lime text-brand-dark px-6 rounded-2xl disabled:opacity-50 hover:scale-105 transition-all font-black uppercase text-xs tracking-widest"
            >
              Send
            </button>
          </form>
        </motion.div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 bg-brand-lime text-brand-dark rounded-[30px] flex items-center justify-center shadow-2xl hover:scale-110 transition-all active:scale-95 shadow-brand-lime/20"
      >
        {isOpen ? <Zap className="w-10 h-10 rotate-45" /> : <MessageSquare className="w-10 h-10" />}
      </button>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="py-32 bg-brand-dark border-t border-white/5">
      <div className="section-container flex flex-col md:flex-row justify-between items-start gap-20">
        <div className="space-y-8 max-w-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-lime rounded-xl flex items-center justify-center">
              <Bot className="text-brand-dark w-6 h-6" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter">RealDealerAI</span>
          </div>
          <p className="text-white/40 leading-relaxed font-medium">
            Revolutionizing car dealership retail with high-performance AI agents. Built for scale, trained for precision.
          </p>
          <div className="bg-brand-lime p-8 rounded-3xl inline-block shadow-2xl shadow-brand-lime/10">
             <p className="text-[10px] uppercase font-black text-brand-dark/40 tracking-widest mb-2">Dealership Support</p>
             <p className="text-3xl font-black text-brand-dark tracking-tighter">(877) 769-1914</p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-20">
           <div className="space-y-6">
              <p className="text-white font-black uppercase tracking-widest text-[10px]">Platform</p>
              <div className="space-y-4 text-white/40 text-sm font-semibold">
                <a href="#" className="block hover:text-brand-lime transition-colors">Voice AI Lisa</a>
                <a href="#" className="block hover:text-brand-lime transition-colors">CRM Integration</a>
                <a href="#" className="block hover:text-brand-lime transition-colors">Chat Agents</a>
                <a href="#" className="block hover:text-brand-lime transition-colors">Pricing</a>
              </div>
           </div>
           <div className="space-y-6">
              <p className="text-white font-black uppercase tracking-widest text-[10px]">Company</p>
              <div className="space-y-4 text-white/40 text-sm font-semibold">
                <a href="#" className="block hover:text-white transition-colors">About Us</a>
                <a href="#" className="block hover:text-white transition-colors">Showcase</a>
                <a href="#" className="block hover:text-white transition-colors">Documentation</a>
                <a href="#" className="block hover:text-white transition-colors">Privacy</a>
              </div>
           </div>
        </div>
      </div>
      <div className="section-container mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
        <p>© 2026 RealDealerAI. All Dealerships Reserved.</p>
        <p>Engineered for conversion.</p>
      </div>
    </footer>
  );
}
