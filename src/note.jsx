
export default function Note(props){
    return(
        <div className="note">
            <p>{props.key}</p>
            <h3>{props.heading}</h3>
            <p>{props.description}</p>
        </div>

    );
}