type Props = {
    heading?: string
    children?: any
    primaryButton: any
    secondaryButton?: any
    setShowModal: Function
    className?: string
    showLine?: boolean
}

const defaultProps = {
    heading: '',
    children: undefined,
    primaryButton: null,
    secondaryButton: null,
    setShowModal: () => {},
    className: '',
    showLine: true,
}

function Modal(props: Props) {
    const { heading, children, secondaryButton, primaryButton, setShowModal, className, showLine } =
        props

    return (
        <div>
            <div
                onClick={() => setShowModal(false)}
                className="cursor-pointer fixed left-0 top-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] z-[100]"
            ></div>
            <div
                className={`fixed bottom-0 left-0 right-0 top-auto md:top-[50%] md:left-[50%] md:right-auto md:bottom-auto md:-translate-y-2/4 md:-translate-x-2/4 md:min-h-[200px] md:min-w-[400px] md:max-w-[600px] bg-white z-[100] rounded pt-4 pb-4 xxxxl:pt-6 xxxxl:pb-6 ${className}`}
            >
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 justify-between px-6 xxxxl:px-6">
                        <div className="text-lg lg:text-2xl xxxxl:text-[32px] font-bold">
                            {heading || 'Confirm modal'}
                        </div>
                        <span className="icon cursor-pointer" onClick={() => setShowModal(false)}>
                            <svg
                                width="28"
                                height="27"
                                viewBox="0 0 28 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M22.0461 20.6012C22.1227 20.6778 22.1834 20.7686 22.2248 20.8686C22.2662 20.9686 22.2875 21.0758 22.2875 21.184C22.2875 21.2923 22.2662 21.3994 22.2248 21.4994C22.1834 21.5994 22.1227 21.6903 22.0461 21.7668C21.9696 21.8434 21.8787 21.9041 21.7787 21.9455C21.6787 21.9869 21.5716 22.0082 21.4633 22.0082C21.3551 22.0082 21.2479 21.9869 21.1479 21.9455C21.0479 21.9041 20.9571 21.8434 20.8805 21.7668L14.0495 14.9348L7.21854 21.7668C7.06397 21.9214 6.85433 22.0082 6.63574 22.0082C6.41714 22.0082 6.2075 21.9214 6.05293 21.7668C5.89836 21.6123 5.81152 21.4026 5.81152 21.184C5.81152 20.9654 5.89836 20.7558 6.05293 20.6012L12.8849 13.7702L6.05293 6.93925C5.89836 6.78468 5.81152 6.57503 5.81152 6.35644C5.81152 6.13784 5.89836 5.9282 6.05293 5.77363C6.2075 5.61906 6.41714 5.53223 6.63574 5.53223C6.85433 5.53223 7.06397 5.61906 7.21854 5.77363L14.0495 12.6056L20.8805 5.77363C21.0351 5.61906 21.2447 5.53223 21.4633 5.53223C21.6819 5.53223 21.8916 5.61906 22.0461 5.77363C22.2007 5.9282 22.2875 6.13784 22.2875 6.35644C22.2875 6.57503 22.2007 6.78468 22.0461 6.93925L15.2141 13.7702L22.0461 20.6012Z"
                                    fill="#252525"
                                />
                            </svg>
                        </span>
                    </div>
                    {showLine && <div className="h-[1px] bg-[#BCBCBC]"></div>}
                    {children && (
                        <div>
                            <div className="py-3 px-6 xxxxl:px-[32px]">{children || ''}</div>
                            {showLine && <div className="h-[1px] bg-[#BCBCBC]"></div>}
                        </div>
                    )}
                    {(secondaryButton || primaryButton) && (
                        <div className="flex justify-end items-end gap-3 pt-4 px-6 xxxxl:px-[32px]">
                            {secondaryButton}
                            {primaryButton}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

Modal.defaultProps = defaultProps

export default Modal
