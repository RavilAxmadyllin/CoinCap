import React, {useEffect, useState} from 'react'
import {coinAPI} from '../api/coincapAPI'
import {Button, Table, TableBody, TableCell, TableHead, TableRow, Typography} from '@material-ui/core'

export function ListMarkets() {
    const [rows, setRows] = useState<Array<any>>([])
    const [limit, setLimit] = useState(10)
    useEffect(() => {
        coinAPI.getMarket(limit).then((data: any) => {
            setRows(data.data)
        })
    }, [limit])
    const addMarketHandler = () => {
        setLimit(prev => prev + 5)
    }
    return (
        <>
            <Typography variant={'h6'}>
                List of Market
            </Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Top Pair </TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Price Quote </TableCell>
                        <TableCell>Price USD </TableCell>
                        <TableCell>Trades(24Hr) </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows && rows.map((row: any) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.baseSymbol}/{row.quoteSymbol}</TableCell>
                            <TableCell>{row.quoteId}</TableCell>
                            <TableCell>${Number(row.priceQuote).toFixed(2)}</TableCell>
                            <TableCell>${Number(row.priceUsd).toFixed(2)}</TableCell>
                            <TableCell>{row.tradesCount24Hr / 100}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div>
                <Button color="primary" onClick={addMarketHandler}>
                    See more orders
                </Button>
            </div>
        </>
    )

}
