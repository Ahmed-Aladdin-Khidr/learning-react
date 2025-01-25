import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ inputs }) {
  const data = calculateInvestmentResults(inputs);
  const initialInvestment =
    data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;

  return (
      <table id="result">
        <thead>
          <tr>
            <th className="center">Year</th>
            <th className="center">Investment Value</th>
            <th className="center">Interest (Year)</th>
            <th className="center">Total Interest</th>
            <th className="center">Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            const totalInterest =
              item.valueEndOfYear -
              item.annualInvestment * item.year -
              initialInvestment;
            const totalAmountInvested = item.valueEndOfYear - totalInterest;
            return (
              <tr key={item.year}>
                <td className="center">{item.year}</td>
                <td className="center">
                  {formatter.format(item.valueEndOfYear)}
                </td>
                <td className="center">{formatter.format(item.interest)}</td>
                <td className="center">{formatter.format(totalInterest)}</td>
                <td className="center">
                  {formatter.format(totalAmountInvested)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    
  );
}
