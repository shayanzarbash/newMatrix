import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import './styles/matrix.css';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 172,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

const Layout = (props: any) => {

    const classes = useStyles();

    //Row First
    const [rows, setRow] = useState({
        rowFirst: "",
        columnFirst: "",
        columnSecond: ""
    });

    const handleChangeRowFirst = (e: { target: { name: any; value: any; }; }) => {

        setRow({ ...rows, [e.target.name]: e.target.value });

        console.log("row", rows);

        props.dispatch({
            type: "setRow",
            payload: { ...rows, [e.target.name]: e.target.value }
        });

    };

    const onSubmitForm = (e: any) => {
        e.preventDefault();
        if (!rows.rowFirst) {
            alert("rowFirst is empty.")
        }
        else if (!rows.columnFirst) {
            alert("columnFirst or rowFirst is empty.")
        }
        else if (!rows.columnSecond) {
            alert("columnSecond is empty.")
        }
    }



    return (
        <>
            <Grid container className="containerMatrix">
                <form onSubmit={onSubmitForm} className="formMatrix">
                    <Grid item xs={6} md={5}>
                        <Box id="test" className="martixNum">
                            <Typography variant="h5" gutterBottom className="nameColMatrix">
                                Enter Numbers First Matrix
                            </Typography>

                            <Box className="martixFirst">
                                <TextField
                                    type="number"
                                    InputProps={{
                                        inputProps: {
                                            max: 9, min: 0
                                        }
                                    }}
                                    label="Row" onChange={handleChangeRowFirst} name="rowFirst" id="num1" value={rows.rowFirst}
                                />
                                <TextField
                                    type="number"
                                    InputProps={{
                                        inputProps: {
                                            max: 9, min: 0
                                        }
                                    }}
                                    label="Column" onChange={handleChangeRowFirst} name="columnFirst" id="num2" value={rows.columnFirst}
                                />
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={6} md={5}>
                        <Box id="test" className="martixNum">
                            <Typography variant="h5" gutterBottom className="nameColMatrix">
                                Enter Numbers Second Matrix
                            </Typography>
                            <Box className="martixFirst">
                                <TextField
                                    type="number"
                                    InputProps={{
                                        inputProps: {
                                            max: 99, min: 0
                                        }
                                    }}
                                    label="Row" onChange={handleChangeRowFirst} name="columnFirst" id="num3" value={rows.columnFirst}
                                />

                                <TextField
                                    type="number"
                                    InputProps={{
                                        inputProps: {
                                            max: 99, min: 0
                                        }
                                    }}
                                    label="Column" onChange={handleChangeRowFirst} name="columnSecond" id="num4" value={rows.columnSecond}
                                />
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={6} md={5}>
                        <Box>
                            <Button variant="contained" color="primary" type="submit" className="btnCheck">
                                Check
                            </Button>
                        </Box>
                    </Grid>
                </form>
            </Grid>
        </>
    )
}

const mapStateToPros = (state: any) => {
    console.log("ghghgh", state);
    return {
        rows: state.rows
    }
}

export default connect(mapStateToPros)(Layout);
