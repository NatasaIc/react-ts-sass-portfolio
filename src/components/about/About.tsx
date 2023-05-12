import "./About.scss";
import "../../App.scss";

export default function About() {
  return (
    <section className="section-about" id="about">
    <div className="u-center-text  u-margin-bottom-medium">
      <h2 className="heading-secondary heading-about">
        A little somthing about me
      </h2>
    </div>

    <div className="row">
      <div className="col-1-of-2">
        <p className="paragraph paragraph-about cutoff-text">
          I'm a web developer student at Medieinstitutet. The program lasts 2 years. 
         I will have knowledge in 
         HTML, CSS/SCSS, JavaScript, TypeScript, React, 
         Database, Git, Node.js and PHP.
         Currently in a state of improving and obtaining the necessary 
         skills for me to become the best developer possible.
         My philosophy has always been,
         self-editing, non-stop learning and humility are 
         key to my practice.<br /><br />
         I am applying for LIA internship for the following periods:<br />
         LIA 1: 2023-10-16 to 2023-12-24<br />
         LIA 2: 2024-02-05 to 2024-05-19<br /> <br />
         If you run a company or work for a company that is 
         looking for interns do not hesitate to get in touch.
        </p>
        <input type="checkbox" className="expand-btn"/>
      </div>
    </div>
</section>
  )
}
