export default function Bar({datum}) {
    const style = {
        background: "black",
        position: "relative",
        display: "inline-block",
        width:`${datum.count*100}px`,
        height: "1em"
    }
    return (
        <div>
            <span className="bar-text">{datum.animal}, {datum.count}</span>
            <span style={style}></span>
        </div>
    )
}