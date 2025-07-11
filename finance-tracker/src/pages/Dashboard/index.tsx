import { useUser } from "@clerk/clerk-react";  
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";
import { useFinancialRecords } from "../../contexts/financial-record-context";
import { useMemo } from "react";

export const Dashboard = () => {
    const { user } = useUser();
    const { records} = useFinancialRecords();

    const totalMonthly = useMemo(() => {
        let totalAmount = 0;
        records.forEach((record) => {
            totalAmount += record.amount;
        });
        return totalAmount;
    }, [records] );

    return (
        <div className="dashboard-container">
            <h1>Welcome {user?.firstName}! Here are your finances:</h1>
            <FinancialRecordForm />
            <div className="TotalExpenses">
                Total Monthly Expenses: {totalMonthly}Rs
            </div>
            <FinancialRecordList />
        </div>
    );
}
