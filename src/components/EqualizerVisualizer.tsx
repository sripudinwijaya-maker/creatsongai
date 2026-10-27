import React, { useMemo } from 'react';
interface Props { isBusy: boolean; isPlaying?: boolean; }
export const EqualizerVisualizer: React.FC<Props> = ({isBusy,isPlaying}) => {
 const bars = useMemo(()=>Array.from({length:42}).map((_,i)=>({id:i,lo:0.12+Math.random()*0.22,hi:0.5+Math.random()*0.5,d:1+Math.random()*1.4,delay:-Math.random()*2})),[]);
 const active=isBusy||isPlaying;
 return <div className="flex items-end gap-1 h-12 w-full overflow-hidden my-4 select-none px-1" aria-hidden="true">{bars.map(bar=><span key={bar.id} className="flex-1 min-w-[2px] max-w-[14px] h-full rounded-t-sm eq-bar transition-opacity duration-300" style={{background:'linear-gradient(to top, var(--accent), var(--accent2))',opacity:active?0.95:0.45,boxShadow:active?'0 0 10px var(--glow)':'none',['--lo' as any]:bar.lo.toFixed(2),['--hi' as any]:bar.hi.toFixed(2),['--d' as any]:`${(active?bar.d*0.38:bar.d).toFixed(2)}s`,['--delay' as any]:`${bar.delay.toFixed(2)}s`}} />)}</div>;
};