import "../Assets/Styles/Contact.css";
import githubIcon from "../Assets/Icons/githubIcon.svg";
import linkedinIcon from "../Assets/Icons/linkedinIcon.svg";
import xingIcon from "../Assets/Icons/xingIcon.svg";

function Contact() {
  return (
    <section id='contact' className="contactContainer">
      <h2>Contact</h2>
      <a href="mailto:agustingramajo@gmail.com">agustingramajo@gmail.com</a>
      <p>Or contact me through my social networks</p>
      <div className='socialNetworks'>
        <div>
          <a href="https://github.com/Agustingrm" target="_blank" rel="noreferrer noopener">
            <img src={githubIcon} alt="Github Icon" class="icon" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/agustingrm" target="_blank" rel="noreferrer noopener">
            <img src={linkedinIcon} alt="Linkedin Icon" class="icon" />
          </a>
        </div>
        <div>
          <a href="https://www.xing.com/profile/AgustinAndres_GramajoGaitan/" target="_blank" rel="noreferrer noopener">
            <img src={xingIcon} alt="XingIcon" class="icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
