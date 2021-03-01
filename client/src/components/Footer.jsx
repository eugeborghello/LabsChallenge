import s from './Styles/Footer.module.css'

function Footer() {
  return (
    <div className={s.footerContainer}>
      <div className={s.footer}>
        <div className={s.usedTechnologies}>
          <p>Herramientas utilizadas:</p>
          <div className="list">
            <ul>
              <li>React</li>
              <li>Axios</li>
            </ul>
          </div>
          <div className={s.list}>
            <ul>
              <li>Express</li>
              <li>NodeJS</li>
              
            </ul>
          </div>
          <div className={s.list}>
            <ul>
              <li>Material-UI</li>
            </ul>
          </div>
        </div>
        <div className={s.container1}>
          <div className={s.infoDevs}>
            <p>Trabajo realizado por: </p>
            <div className={s.us}>
              María Eugenia Borghello
              <a >
                <img  />
              
                <img  />
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;