import Input from "./Input";

export default function UserInput({inputs, onChange}) {

    return (
        <div id="user-input">
            <div className="input-group">
                <Input
                    label="Initial Investment:"
                    id="initialInvestment"
                    value={inputs.initialInvestment}
                    onChange={onChange}
                />
                <Input
                    label="Annual Investment:"
                    id="annualInvestment"
                    value={inputs.annualInvestment}
                    onChange={onChange}
                />
            </div>
            <div className="input-group">
                <Input
                    label="Expected Return:"
                    id="expectedReturn"
                    value={inputs.expectedReturn}
                    onChange={onChange}
                />
                <Input label="Duration:" id="duration" value={inputs.duration} onChange={onChange}/>
            </div>
        </div>
    );
}