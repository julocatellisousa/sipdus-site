
export default function VideoSection() {
  return (
    <section
      id="video"
      className="video-section"
      aria-labelledby="video-title"
    >
      <div className="video-section__container">
        <header className="video-section__header">
          <span className="video-section__eyebrow">
            SIPDUS EM AÇÃO
          </span>

          <h2
            id="video-title"
            className="video-section__title"
          >
            Conheça o projeto
            <span> na prática.</span>
          </h2>

          <p className="video-section__description">
            Conheça o Sipdus, sua proposta de monitoramento
            não invasivo da glicemia e o desenvolvimento
            do protótipo.
          </p>
        </header>

        <div className="video-section__player">
          <iframe
            src="https://www.youtube-nocookie.com/embed/dQeLhbVrA38"
            title="Vídeo de apresentação do projeto Sipdus"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="video-section__footer">
          <span className="video-section__indicator">
            <span
              className="video-section__indicator-dot"
              aria-hidden="true"
            />
            Conheça o desenvolvimento do Sipdus
          </span>

          <a
            className="video-section__link"
            href="https://youtu.be/dQeLhbVrA38"
            target="_blank"
            rel="noopener noreferrer"
          >
            Assistir no YouTube
            <span aria-hidden="true"> ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
