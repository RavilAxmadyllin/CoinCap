import React, {useEffect, useState} from 'react'
import {coinAPI} from '../api/coincapAPI'
import {Button, Link, Table, TableBody, TableCell, TableHead, TableRow, Typography} from '@material-ui/core'
import LinkIcon from '@material-ui/icons/Link'

export function ListExchanges() {
    const [rows, setRows] = useState<Array<any>>([])
    const [limit, setLimit] = useState(10)
    useEffect(() => {
        coinAPI.getExchange(limit).then((data: any) => {
            setRows(data.data)
        })
    }, [limit])
    const addOrderHandler = () => {
        setLimit(prev => prev + 10)
    }
    return (
        <>
            <Typography variant={'h6'}>
                List of Exchanges
            </Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Rank</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>percent </TableCell>
                        <TableCell align="right">Trade</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows && rows.map((row: any) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.rank}</TableCell>
                            <TableCell style={{flexGrow: 1}}>{row.name}</TableCell>
                            <TableCell>{Number(row.percentTotalVolume).toFixed(2)}%</TableCell>
                            <TableCell align="right">
                                <Link href={row.exchangeUrl}>
                                    <LinkIcon/>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <div>
                    <Button color="primary" onClick={addOrderHandler}>
                        See more orders
                    </Button>
                </div>
            </Table>

        </>
    )
}
