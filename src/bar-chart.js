import Bar from "./bar"

export default function BarChart({data}) {
        data = data.sort((a,b)=> {
            return b.count - a.count
        })
        const bars = [];
        for (let i = 0; i < data.length; i++) {
            // note: we are adding a key prop here to allow react to uniquely identify each
            // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
            const d = data[i];
            bars.push(<Bar key={i} datum={d} />);
        }
        return <div>{bars}</div>;
}