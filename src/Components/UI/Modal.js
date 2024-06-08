import ReactDOM from "react-dom"
import classes from "./Modal.module.css";

function Backdrop ( props )
{
  return (
    <div className = { classes["backdrop"] } />
  )
}

function ModalOverlay ( props )
{
  return (
    <div className = { classes["modal"] } >
      <div className = { classes["content"] } > { props.children } </div>
    </div>
  )
}

const portal = document.getElementById ( "overlays" );

function Modal ( props )
{
  return (
    <>
      { ReactDOM.createPortal ( <Backdrop />, portal ) }
      { ReactDOM.createPortal ( <ModalOverlay> { props.children } </ModalOverlay>, portal ) }
    </>
  )
}

export default Modal;