function HeroBanner() {
  return(
    <section className="hero-banner">
      <h1 className="hero-title">{title}</h1>
      <p className="hero-subtitle">{subtitle}</p>
      <div className="flex center">
        {buttons.map((btn, index) => (
          <a
            key={index}
            href={btn.link}
            className={` ${
              btn.type === 'primary' ? 'primary' : 'secondary'
            }`}
          >
            {btn.label}
          </a>
        ))}
      </div>
    </section>
  );
}
export default HeroBanner;