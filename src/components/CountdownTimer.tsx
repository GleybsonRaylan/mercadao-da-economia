import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const getNextSunday = () => {
      const now = new Date();
      const dayOfWeek = now.getDay();
      const daysUntilSunday = dayOfWeek === 0 ? 7 : 7 - dayOfWeek;
      const nextSunday = new Date(now);
      nextSunday.setDate(now.getDate() + daysUntilSunday);
      nextSunday.setHours(23, 59, 59, 999);
      return nextSunday;
    };

    const timer = setInterval(() => {
      const now = new Date();
      const target = getNextSunday();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) return;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const blocks = [
    { value: timeLeft.days, label: "Dias" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Seg" },
  ];

  return (
    <div className="flex items-center gap-2 justify-center">
      <span className="text-sm font-semibold text-foreground mr-1">⏰ Ofertas acabam em:</span>
      <div className="flex gap-1.5">
        {blocks.map((b) => (
          <div key={b.label} className="flex flex-col items-center">
            <span className="bg-primary text-primary-foreground font-bold text-sm w-10 h-10 rounded-lg flex items-center justify-center shadow-sm">
              {String(b.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] text-muted-foreground mt-0.5">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
