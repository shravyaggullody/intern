import styles from './Button.module.css';
function Button(){
    return(
        <button className={`btn-lg btn-block ${styles.btn1}`} type="submit">Continue to checkout</button>
    );
}
export default Button;