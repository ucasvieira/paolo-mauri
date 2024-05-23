
export default function VideoComponent({ fileName, className, style, children }: any) {

    return (
        <div className={className}>
            <video width="100%" height="100%" loop muted autoPlay controlsList="nofullscreen" playsInline src={fileName} style={style} className={className}></video>
            {children}
        </div>
    )
}