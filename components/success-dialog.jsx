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
              src="https://s3-alpha-sig.figma.com/img/0dd5/96b1/6fa87c1a3f037a37a60e6530c19df272?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WXlVl9lhHsIxEnZe5Rgm5XXGgZ9fwJchcVvakOVmBZZQKY11guIi0r~WX06Dg~HeF2o4BHq9H1x2KDt7Pk-Mo3XAVsogJ6eZvnYZ-sciE8YESnjYcEEL-eH9mBa4fj~8HbhWJqa3akMBF6~7OWbwMYLG8kDJuuywIctmoUXFvH~wo-f9wsaBXBywt53z6H88l8zriiy7PT-Almel8frCCVdskpTwRA6L4-QsmzJrKpOgs19s1U5HOmK1CPdvY~1YHZh1B3pqCdilvoRNdrebuRHfc5ZanLHFilQF6jb4EAfyCRUotAReww16FFrzB7WIaJZBaMt659tFwcvnF53gQA__"
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
