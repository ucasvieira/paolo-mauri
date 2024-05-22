export default function VideoComponent({ fileName, className }) {

    return (
        <video width="100%" height="100%" loop muted autoPlay preload="none" src={fileName} className={className}></video>
    )
}