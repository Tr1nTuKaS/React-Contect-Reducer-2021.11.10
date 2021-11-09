import css from './HeroSection.module.css';
import Button from '../../components/ui/button/Button';

function HeroSecion() {
  return (
    <section className={css.section}>
      <div className={css.center}>
        <h1>Welcome to our Page</h1>
        <p>Read our blog</p>
        <div className={css.ctrl}>
          <Button>btn1</Button>
          <Button>btn2</Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSecion;
