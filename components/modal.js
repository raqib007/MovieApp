import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.closeButton = null;
  }

  submitForm = () => {
    this.closeModal();
  };

  closeModal = () => {
    this.closeButton.click();
  };

  render() {
    return (
      <React.Fragment>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Create Movie
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create Movie
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">{this.props.children}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  ref={(ele) => (this.closeButton = ele)}
                >
                  Close
                </button>
                {this.props.hasSubmit && (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={submitForm}
                  >
                    Save changes
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// const Modal = (props) => {
//   const submitForm = () => {
//     closeButton.click();
//   };

//   let closeButton = null;

//   return (
//     <React.Fragment>
//       <button
//         type="button"
//         className="btn btn-primary"
//         data-toggle="modal"
//         data-target="#exampleModal"
//       >
//         Create Movie
//       </button>

//       <div
//         className="modal fade"
//         id="exampleModal"
//         tabIndex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//                 Create Movie
//               </h5>
//               <button
//                 type="button"
//                 className="close"
//                 data-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">{props.children}</div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-dismiss="modal"
//                 ref={(ele) => (closeButton = ele)}
//               >
//                 Close
//               </button>
//               {props.hasSubmit && (
//                 <button
//                   type="button"
//                   className="btn btn-primary"
//                   onClick={submitForm}
//                 >
//                   Save changes
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

export default Modal;
