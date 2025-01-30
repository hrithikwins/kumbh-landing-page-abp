'use client'

import { useEffect, useRef } from 'react'

// interface SuccessDialogProps {
//   open: boolean
//   onClose: () => void
// }

export function SuccessDialog({ open, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog) {
      if (open) {
        dialog.showModal()
      } else {
        dialog.close()
      }
    }
  }, [open])

  const handleClose = () => {
    // dialogRef.current.close();
    onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className="bg-transparent/60 h-full w-full flex justify-center items-center p-4"
      onClick={handleClose}
    >
      <div
        className="bg-[#fff5e3] p-8 max-w-md rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <img
              src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/mahadev-success.gif"
              alt="Success checkmark"
              className="w-32 h-32 object-contain mb-4"
            />
          </div>
          <h2 className="text-[#6a302f] text-3xl font-medium">
           har har mahadev
          </h2>
          <p className="text-[#6a302f] text-lg font-inter">
            Your advertisement enquiry has been submitted successfully. We'll contact you soon.
          </p>
          <button
            type="button"
            className="w-full text-[#6a302f] text-xl font-medium"
            onClick={handleClose}
          >Close</button>
        </div>
      </div>
    </dialog>
  )
}
