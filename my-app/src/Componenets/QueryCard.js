import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core'

export default function InvoiceCard( {query} ) {
    return (
        <div>
            <Card variant="outlined">
            <CardHeader 
                    title={query.title}
                    subheader={query.link}
                />
                <CardContent>
                    <Typography variant="body1">
                        Link description: {query.snippet}
                    </Typography>
                    <Typography variant="body1">
                        Query rank: {query.rank}  
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}