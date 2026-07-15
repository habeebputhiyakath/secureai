'use client';
import { motion } from 'framer-motion';
import { ScanFace, Car, AlertTriangle, Activity, BarChart, Flame } from 'lucide-react';

export default function AIFeatures() {
  return (
    <section className="relative py-[120px] lg:py-[160px] bg-slate-950 overflow-hidden min-h-[900px] flex items-center">
      
      {/* Background Gradient & Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-900/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
        {/* Grid lines */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ 
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '80px 80px' 
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center flex flex-col items-center mb-[80px]">
          <span className="text-[12px] uppercase tracking-widest font-bold text-blue-500 mb-4">Core Technology</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] max-w-[700px] text-white mb-6"
          >
            Powered by Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Deep Learning</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[18px] leading-[1.8] max-w-[650px] text-slate-400"
          >
            Our neural networks process streams in real-time, instantly converting raw video into actionable intelligence without relying on cloud processing.
          </motion.p>
        </div>

        {/* Futuristic Dashboard Mockup */}
        <div className="relative w-full h-[600px] flex justify-center items-center">
          
          {/* Central Brain/Core Graphic */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute w-[500px] h-[500px] border border-blue-500/20 rounded-full flex items-center justify-center border-dashed opacity-50"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="absolute w-[650px] h-[650px] border border-indigo-500/10 rounded-full flex items-center justify-center opacity-30"
          />
          
          <div className="absolute w-48 h-48 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full blur-[60px] opacity-40 animate-pulse" />

          {/* Floating Widgets */}
          
          {/* Object Detection */}
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 lg:left-32 w-64 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-[24px] p-6 shadow-2xl"
          >
            <div className="flex items-center space-x-4 mb-4">
              <ScanFace className="w-6 h-6 text-blue-400" />
              <span className="text-white font-bold text-[16px]">Face Detection</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full mb-2">
              <div className="w-[98%] bg-blue-500 h-full rounded-full" />
            </div>
            <span className="text-[14px] font-medium text-slate-400">Confidence: 98.4%</span>
          </motion.div>

          {/* Vehicle Recognition */}
          <motion.div 
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-4 lg:left-24 w-72 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-[24px] p-6 shadow-2xl"
          >
             <div className="flex items-center space-x-4 mb-5">
              <Car className="w-6 h-6 text-indigo-400" />
              <span className="text-white font-bold text-[16px]">Vehicle Analytics</span>
            </div>
            <div className="flex justify-between text-[14px] text-slate-300 mb-2">
              <span>Make</span><span className="text-white font-bold">Toyota</span>
            </div>
            <div className="flex justify-between text-[14px] text-slate-300">
              <span>Color</span><span className="text-white font-bold">Silver</span>
            </div>
          </motion.div>

          {/* Real-time Alerts */}
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/4 right-4 lg:right-20 w-72 bg-slate-900/80 backdrop-blur-xl border border-red-500/30 rounded-[24px] p-6 shadow-2xl"
          >
             <div className="flex items-center space-x-4 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              <span className="text-white font-bold text-[16px]">Behavior Alert</span>
            </div>
            <p className="text-[14px] leading-[1.8] text-red-200">Loitering detected at Sector 7G.</p>
            <span className="text-[12px] font-medium tracking-widest uppercase text-slate-500 mt-4 block">Just now</span>
          </motion.div>

          {/* Heat Maps */}
          <motion.div 
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-10 right-10 lg:right-32 w-64 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-[24px] p-6 shadow-2xl"
          >
             <div className="flex items-center space-x-4 mb-4">
              <Flame className="w-6 h-6 text-orange-400" />
              <span className="text-white font-bold text-[16px]">Density Map</span>
            </div>
            <div className="w-full h-16 bg-gradient-to-r from-blue-500 via-green-500 to-red-500 rounded-lg opacity-80" />
          </motion.div>

          {/* Detection Timeline */}
          <motion.div 
            animate={{ y: 0 }} // Removed scaling bounce
            className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-slate-900/90 backdrop-blur-2xl border border-slate-700 rounded-[24px] p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] flex items-center justify-between"
          >
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 rounded-[16px] bg-emerald-500/10 flex items-center justify-center">
                <Activity className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-[18px] mb-1">Live Event Stream</h4>
                <p className="text-slate-400 text-[14px] font-medium">24 events / minute</p>
              </div>
            </div>
            {/* Animated mini bar chart */}
            <div className="flex items-end space-x-2 h-12">
              {[40, 70, 45, 90, 65, 80].map((h, i) => (
                <motion.div 
                  key={i}
                  animate={{ height: [`${h}%`, `${Math.max(20, h - 30)}%`, `${h}%`] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                  className="w-2.5 bg-emerald-500 rounded-t-sm opacity-80" 
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
