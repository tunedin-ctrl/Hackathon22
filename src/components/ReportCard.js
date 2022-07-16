import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { Typography, Button } from '@material-ui/core'
import {getCurrentDate} from './getCurrentDate'
import '../pages/wrapper.css'

export default function ReportCard( {report, handleReport} ) {
    return (
        <div className='wrapper'>
            <Card variant="outlined">
                <CardHeader
                    title={report.report_name}
                    subheader={getCurrentDate()}
                />
                <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                    Id: {report.report_id}
                </Typography>
                <Button size="small" fullWidth variant="contained" color="primary" onClick={() => handleReport(report.report_id)}>
                    View Report
                </Button>
                    
                </CardContent>
            </Card>
        </div>
    )
}