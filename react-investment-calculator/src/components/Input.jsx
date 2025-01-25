export default function Input({id, label, value, onChange}) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="number" id={id} value={value} onChange={onChange} />
        </div>
    );
}