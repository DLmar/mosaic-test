const CompanySelector = ({ onSelect }: { onSelect: (ticker: string) => void }) => {
    const companies = ['AAPL', 'GOOGL', 'AMZN'];

    return (
        <select onChange={(e) => onSelect(e.target.value)} className="p-2 border rounded">
            {companies.map((ticker) => (
                <option key={ticker} value={ticker}>
                    {ticker}
                </option>
            ))}
        </select>
    );
};

export default CompanySelector;