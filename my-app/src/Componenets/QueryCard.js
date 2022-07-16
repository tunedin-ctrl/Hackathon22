import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import { DeleteOutlined } from '@material-ui/icons'
import { Typography, Button } from '@material-ui/core'

export default function InvoiceCard( {invoice, handleDelete, handleRender, loading} ) {
    return (
        <div>
            <Card variant="outlined">
            <CardHeader onSubmit={handleRender}
                    action={
                        <IconButton onClick={() => handleDelete(invoice.invoice_id)}>
                            <DeleteOutlined/>
                        </IconButton>
                    }
                    title={invoice.filename}
                    subheader={invoice.time_stamp}
                />
                <CardContent>
                    <Typography variant="body1">
                        Invoice Id: {invoice.invoice_id}
                    </Typography>
                    <Typography variant="body1">
                        Filesize: {parseInt(invoice.filesize/1000+0.5)} kb 
                    </Typography>
                    <Button size="small" fullWidth variant="contained" color="primary" onClick={() => handleRender(invoice.invoice_id)}>
                    View Invoice
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}