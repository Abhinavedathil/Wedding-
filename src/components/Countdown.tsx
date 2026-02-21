import { useEffect, useState } from "react";



interface CountdownProps {
    targetDate: Date;
    title?: string;
}



const Countdown = ({ targetDate, title = "Counting the Moments" }: CountdownProps) => {

    const [timeLeft, setTimeLeft] = useState({

        days: 0,

        hours: 0,

        minutes: 0,

        seconds: 0,

    });



    useEffect(() => {

        const timer = setInterval(() => {

            const now = new Date().getTime();

            const diff = targetDate.getTime() - now;



            if (diff <= 0) {

                clearInterval(timer);

                return;

            }



            setTimeLeft({

                days: Math.floor(diff / (1000 * 60 * 60 * 24)),

                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),

                minutes: Math.floor((diff / (1000 * 60)) % 60),

                seconds: Math.floor((diff / 1000) % 60),

            });

        }, 1000);



        return () => clearInterval(timer);

    }, [targetDate]);



    const items = [

        { label: "Days", value: timeLeft.days },

        { label: "Hours", value: timeLeft.hours },

        { label: "Minutes", value: timeLeft.minutes },

        { label: "Seconds", value: timeLeft.seconds },

    ];



    return (

        <section className="invite-card">

            <h2 className="section-title">{title}</h2>



            <div className="countdown-cards">

                {items.map((item) => (

                    <div key={item.label} className="count-card">

                        <div className="count-value">

                            {String(item.value).padStart(2, "0")}

                        </div>

                        <div className="count-label">{item.label}</div>

                    </div>

                ))}

            </div>

        </section>

    );

};



export default Countdown;