import { useState } from 'react';
import './sequenceDetail.css';
import dynamic from '../../assets/Images/Group.png';
import tickCircle from '../../assets/Images/tick-circle.png';
import closedCircle from '../../assets/Images/close-circle.png';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const data = [
    {
        date: '12-06-2025',
        time: '13:28 PM',
        name: 'John Doe',
        type: '1',
        path: '-----------',
        operator: '-----------',
        operation: '-----------'
    },
    {
        date: '12-06-2025',
        time: '13:28 PM',
        name: 'John Doe',
        type: '1',
        path: '-----------',
        operator: '-----------',
        operation: '-----------'
    },
    {
        date: '12-06-2025',
        time: '13:28 PM',
        name: 'John Doe',
        type: '1',
        path: '-----------',
        operator: '-----------',
        operation: '-----------'
    },
    {
        date: '12-06-2025',
        time: '13:28 PM',
        name: 'John Doe',
        type: '1',
        path: '-----------',
        operator: '-----------',
        operation: '-----------'
    },
    {
        date: '12-06-2025',
        time: '13:28 PM',
        name: 'John Doe',
        type: '1',
        path: '-----------',
        operator: '-----------',
        operation: '-----------'
    },
    {
        date: '12-06-2025',
        time: '13:28 PM',
        name: 'John Doe',
        type: '1',
        path: '-----------',
        operator: '-----------',
        operation: '-----------'
    },
    {
        date: '12-06-2025',
        time: '13:28 PM',
        name: 'John Doe',
        type: '1',
        path: '-----------',
        operator: '-----------',
        operation: '-----------'
    }
];


const SequenceDetail = () => {
    const [activeTab, setActiveTab] = useState('dynamic');

    const handleTabClick = (tab: any) => {
        setActiveTab(tab);
    };

    return (
        <div className="container">
            <ul className="nav nav-tabs d-flex">
                <li className="nav-item flex-fill">
                    <button
                        className={`nav-link w-100 d-flex justify-content-center align-items-center gap-3 ${activeTab === 'dynamic' ? 'active' : ''}`}
                        onClick={() => handleTabClick('dynamic')}
                    >
                        <img src={dynamic} />
                        <span className='nav-heading'>Dynamic Status</span>
                    </button>
                </li>
                <li className="nav-item flex-fill">
                    <button
                        className={`nav-link w-100 d-flex justify-content-center align-items-center gap-3 ${activeTab === 'open' ? 'active' : ''}`}
                        onClick={() => handleTabClick('open')}
                    >
                        <img src={tickCircle} />
                        <span className='nav-heading'>Open Status</span>
                    </button>
                </li>
                <li className="nav-item flex-fill">
                    <button
                        className={`nav-link w-100 d-flex justify-content-center align-items-center gap-3 ${activeTab === 'closed' ? 'active' : ''}`}
                        onClick={() => handleTabClick('closed')}
                    >
                        <img src={closedCircle} />
                        <span className='nav-heading'>Closed Status</span>
                    </button>
                </li>
            </ul>

            <div className="tab-content border-top-0 mt-5 shadow-sm" style={{ transition: 'opacity 0.3s ease-in-out' }}>
                {activeTab === 'dynamic' && (
                    <div className="tab-pane fade show active">
                        <div className="accordion" id="dynamicAccordion">
                            <div className="accordion-item">                               
                                <h2 className="accordion-header" id="dynamic-headingOne">
                                    <button className="accordion-button custom-button" type="button" data-bs-toggle="collapse" data-bs-target="#dynamic-collapseOne" aria-expanded="true">
                                        <span className='accordion-heading'>Dynamic Status</span>
                                    </button>
                                </h2>
                                <div id="dynamic-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#dynamicAccordion">
                                    <div className="accordion-body">
                                        <DataTable
                                            value={data}
                                            stripedRows
                                        >
                                            <Column header="Date" field='date'></Column>
                                            <Column header="Time" field='time'></Column>
                                            <Column header="Name" field='name'></Column>
                                            <Column header="Type" field='type'></Column>
                                            <Column header="Path" field='path'></Column>
                                            <Column header="Operator" field='operator'></Column>
                                            <Column header="Operation" field='operation'></Column>
                                        </DataTable>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'open' && (
                    <div className="tab-pane fade show active">
                        <div className="accordion" id="openAccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="open-headingOne">
                                    <button className="accordion-button custom-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#open-collapseOne">
                                         <span className='accordion-heading'>Open Status</span>
                                    </button>
                                </h2>
                                <div id="open-collapseOne" className="accordion-collapse collapse" data-bs-parent="#openAccordion">
                                    <div className="accordion-body">
                                        <DataTable
                                            value={data}
                                            stripedRows
                                        >
                                            <Column header="Date" field='date'></Column>
                                            <Column header="Time" field='time'></Column>
                                            <Column header="Name" field='name'></Column>
                                            <Column header="Type" field='type'></Column>
                                            <Column header="Path" field='path'></Column>
                                            <Column header="Operator" field='operator'></Column>
                                            <Column header="Operation" field='operation'></Column>
                                        </DataTable>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'closed' && (
                    <div className="tab-pane fade show active">
                        <div className="accordion" id="closedAccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="closed-headingOne">
                                    <button className="accordion-button custom-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#closed-collapseOne">
                                         <span className='accordion-heading'>Closed Status</span>
                                    </button>
                                </h2>
                                <div id="closed-collapseOne" className="accordion-collapse collapse" data-bs-parent="#closedAccordion">
                                    <div className="accordion-body">
                                      <DataTable
                                            value={data}
                                            stripedRows
                                        >
                                            <Column header="Date" field='date'></Column>
                                            <Column header="Time" field='time'></Column>
                                            <Column header="Name" field='name'></Column>
                                            <Column header="Type" field='type'></Column>
                                            <Column header="Path" field='path'></Column>
                                            <Column header="Operator" field='operator'></Column>
                                            <Column header="Operation" field='operation'></Column>
                                        </DataTable>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}

export default SequenceDetail
