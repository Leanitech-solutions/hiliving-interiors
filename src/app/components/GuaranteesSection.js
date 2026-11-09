import Image from "next/image";

export default function GuaranteesSection() {
  const items = [
    {
      title: "On-Time Delivery",
      icon: "/images/figma/guarantee-clock.png",
    },
    {
      title: "Quality Assurance",
      icon: "/images/figma/guarantee-shield.png",
    },
    {
      title: "No Hidden Costs",
      icon: "/images/figma/guarantee-wallet.png",
    },
    {
      title: "Dedicated Support",
      icon: "/images/figma/guarantee-handshake.png",
    },
    {
      title: "Customized Designs",
      icon: "/images/figma/guarantee-pen.png",
    },
  ];

  return (
    <section className="figma-guarantees-strip" id="guarantees">
      <div className="figma-guarantees-flex">
        {items.map((g, idx) => (
          <div key={idx} className="figma-guarantee-col" id={`guarantee-${idx}`}>
            <div className="figma-guarantee-icon-box">
              <Image
                src={g.icon}
                alt={g.title}
                width={66}
                height={66}
                style={{ width: "54px", height: "54px", objectFit: "contain" }}
              />
            </div>
            <span className="figma-guarantee-title">{g.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
