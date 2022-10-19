import styles from './Preloader.module.css';

const Preloader = ({
   size = '100px',
   thickness = '7px',
   color = '#fff',
   duration = '1.2s'
}) => {
    return (
        <div
            className={styles.preloader}
            style={{
                borderColor: color,
                width: size,
                height: size,
                borderRadius: size,
                borderWidth: thickness,
                animationDuration: duration
            }}
        >

        </div>
    );
};

export default Preloader;