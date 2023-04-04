import './About.scss';
import '../../App.scss';

export default function About() {
  return (
    <>
    <section className='section-about'>
    <div className='u-center-text  u-margin-bottom-big'>
      <h2 className='heading-secondary'>
        About me
      </h2>
    </div>

    <div className='row'>
      <div className='col-1-of-2'>
        <h3 className='heading-tertiary'>Lorem ipsum dolor sit</h3>
        <p className='paragraph'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Ipsum temporibus totam minima nostrum blanditiis 
          similique facere soluta? Dicta, obcaecati aspernatur, 
          ipsa rem deleniti, inventore architecto odio corrupti 
          soluta blanditiis corporis. ipsa rem deleniti, inventore architecto odio corrupti 
          soluta blanditiis corporis.
        </p>

        <h3 className='heading-tertiary u-margin-bottom-small'>Lorem ipsum dolor sit</h3>
        <p className='paragraph'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Ipsum temporibus totam minima nostrum blanditiis 
          similique facere soluta? Dicta, obcaecati aspernatur, 
          ipsa rem deleniti, inventore architecto odio corrupti 
          soluta blanditiis corporis. ipsa rem deleniti, inventore architecto odio corrupti 
          soluta blanditiis corporis.
        </p>
      </div>
    </div>
</section>
</>
  )
}
