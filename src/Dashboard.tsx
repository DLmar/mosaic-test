import { useState } from 'react';
import { Mosaic, MosaicWindow } from 'react-mosaic-component';
import 'react-mosaic-component/react-mosaic-component.css';
import CompanyInfo from "./components/CompanyInfo";

const Dashboard = () => {
    const [sortFields, setSortFields] = useState<{ [key: string]: string }>({
        AAPL: 'all',
        GOOGL: 'all',
        AMZN: 'all',
    });

    const handleSortChange = (id: string, sortField: string) => {
        setSortFields((prevState) => ({
            ...prevState,
            [id]: sortField,
        }));
    };

    return (
        <div className="h-screen">
            <Mosaic<string>
                renderTile={(id, path) => (
                    <MosaicWindow<string>
                        path={path}
                        title="Company info"
                        toolbarControls={
                                <div className="ml-4">
                                    <select
                                        id={`sortField-${id}`}
                                        value={sortFields[id]}
                                        onChange={(e) => handleSortChange(id, e.target.value)}
                                        className="border border-gray-300 rounded p-1"
                                    >
                                        <option value="all">All</option>
                                        <option value="name">Name</option>
                                        <option value="legal_name">Legal Name</option>
                                        <option value="stock_exchange">Stock Exchange</option>
                                        <option value="short_description">Short Description</option>
                                        <option value="long_description">Long Description</option>
                                        <option value="web">Website</option>
                                        <option value="business_address">Business Address</option>
                                        <option value="business_phone">Business Phone</option>
                                        <option value="employees">Employees</option>
                                        <option value="sector">Sector</option>
                                        <option value="industry_category">Industry Category</option>
                                        <option value="industry_group">Industry Group</option>
                                    </select>
                                </div>
                        }
                    >
                        <CompanyInfo ticker={id} sortField={sortFields[id]} />
                    </MosaicWindow>
                )}
                initialValue={{
                    direction: 'row',
                    first: 'AAPL',
                    second: {
                        direction: 'column',
                        first: 'GOOGL',
                        second: 'AMZN',
                    },
                }}
                className="h-full w-full"
            />
        </div>
    );
};

export default Dashboard;
