import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Company } from '../types/company.types';

interface CompanyInfoWidgetProps {
    ticker: string;
    sortField: string;
}

const CompanyInfo = ({ ticker, sortField }: CompanyInfoWidgetProps) => {
    const [company, setCompany] = useState<Company | null>(null);

    useEffect(() => {
        axios.get('companies-lookup.json').then((response) => {
            const companyData = response.data.find((comp: Company) => comp.ticker === ticker);
            setCompany(companyData);
        });
    }, [ticker]);

    if (!company) return <div>Loading..</div>;

    const filteredData = (() => {
        switch (sortField) {
            case 'name':
                return <p><strong>Name:</strong> {company.name}</p>;
            case 'legal_name':
                return <p><strong>Legal Name:</strong> {company.legal_name}</p>;
            case 'stock_exchange':
                return <p><strong>Stock Exchange:</strong> {company.stock_exchange}</p>;
            case 'short_description':
                return <p><strong>Short Description:</strong> {company.short_description}</p>;
            case 'long_description':
                return <p><strong>Long Description:</strong> {company.long_description}</p>;
            case 'web':
                return <p><strong>Website:</strong> <a href={`https://${company.company_url}`} target="_blank" rel="noopener noreferrer">{company.company_url}</a></p>;
            case 'business_address':
                return <p><strong>Business Address:</strong> {company.business_address}</p>;
            case 'business_phone':
                return <p><strong>Business Phone:</strong> {company.business_phone_no}</p>;
            case 'employees':
                return <p><strong>Employees:</strong> {company.employees}</p>;
            case 'sector':
                return <p><strong>Sector:</strong> {company.sector}</p>;
            case 'industry_category':
                return <p><strong>Industry Category:</strong> {company.industry_category}</p>;
            case 'industry_group':
                return <p><strong>Industry Group:</strong> {company.industry_group}</p>;
            default:
                return (
                    <div>
                        <p><strong>Name:</strong> {company.name}</p>
                        <p><strong>Legal Name:</strong> {company.legal_name}</p>
                        <p><strong>Stock Exchange:</strong> {company.stock_exchange}</p>
                        <p><strong>Short Description:</strong> {company.short_description}</p>
                        <p><strong>Long Description:</strong> {company.long_description}</p>
                        <p><strong>Website:</strong> <a href={`https://${company.company_url}`} target="_blank" rel="noopener noreferrer">{company.company_url}</a></p>
                        <p><strong>Business Address:</strong> {company.business_address}</p>
                        <p><strong>Business Phone:</strong> {company.business_phone_no}</p>
                        <p><strong>Employees:</strong> {company.employees}</p>
                        <p><strong>Sector:</strong> {company.sector}</p>
                        <p><strong>Industry Category:</strong> {company.industry_category}</p>
                        <p><strong>Industry Group:</strong> {company.industry_group}</p>
                    </div>
                );
        }
    })();

    return (
        <div className="p-4 h-full overflow-y-auto border border-gray-300 rounded shadow-md">
            {filteredData}
        </div>
    );
};

export default CompanyInfo;
