import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Explora el HTML',
    description: (
      <>
        Navega y analiza la estructura de cualquier sitio web.
      </>
    ),
  },
  {
    title: 'Edita estilos en vivo',
    description: (
      <>
        Cambia colores, tamaños y estilos desde el navegador.
      </>
    ),
  },
  {
    title: 'Usa la consola JS',
    description: (
      <>
        Ejecuta comandos y depura código fácilmente.
      </>
    ),
  },
];

function Feature({ title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
       
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
