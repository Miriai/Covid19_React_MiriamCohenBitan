import {useEffect, useState} from "react";
import axios from 'axios';
import {DataGrid} from '@mui/x-data-grid';
import {Button, Stack} from "@mui/material";


const columns = [
    {field: 'FirstName', headerName: 'First Name', width: 100},
    {field: 'LastName', headerName: 'Last Name', width: 100},
    {field: 'BirthDay', headerName: 'Date Of Birth', width: 100},
    {field: 'Address', headerName: 'Address', width: 100},
    {field: 'City', headerName: 'City', width: 100},
    {field: 'ZipCode', headerName: 'Zip Code', width: 130},
    {field: 'LandLine', headerName: 'LandLine Phone', width: 130},
    {field: 'Phone', headerName: 'Cellular Phone', width: 130},
    {field: 'isInfected', headerName: 'Had Covid Before', width: 130},
    {field: 'isDiabetes', headerName: 'Diabetes', width: 130},
    {field: 'isCardio', headerName: 'Cardio', width: 130},
    {field: 'isAllergic', headerName: 'Allergies', width: 130},
    {field: 'otherInput', headerName: 'Other Conditions', width: 130}
]

const url = 'http://127.0.0.1:8000/personalDetails'



export default function Summary(props) {

    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
        try {
            const result = await axios(url);
            setData(result.data);
        } catch (error) {
            setIsError(true)
        }
        setIsLoading(false)
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (<>
        <Button onClick={fetchData} variant="contained">Refresh</Button>
        {isError && <div>Something went wrong ...</div>}
        {isLoading ? (
            <div className="alert alert-warning">Loading ...</div>
        ) : (
            <div style={{height: 400, width: "auto"}}>
                <DataGrid rows={Object.values(data)} getRowId={(row) => row.Id} columns={columns}
                          disableSelectionOnClick/>
            </div>
        )}
        <a href='http://localhost:8000/Excel' className='btn btn-primary'>Export To Excel</a>
    </>)
}