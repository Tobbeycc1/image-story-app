import classes from '../styles/modal.module.css'
function Modal(props) {
    return(
        <div className={classes.modal} onClick={props.onClick} >

        </div>
    )
}
export default Modal