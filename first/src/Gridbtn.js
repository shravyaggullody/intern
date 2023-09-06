import styles from'./Button.module.css'
function Gridbtn(){
    return(
        <div className="btn-group">
                      <button type="button" className={`btn-sm btn-outline-secondary ${styles.btn1}`}>View</button>
                      <button type="button" className={`btn-sm btn-outline-secondary ${styles.btn2}`}>View</button>
        </div>
    );
}
export default Gridbtn;