import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import '../index.css';
import { connect } from 'react-redux';


function Matrix(props: any) {

    const [mstate, setMState] = useState({});

    const onInputchangesOne = (e: { target: { name: any; value: any; }; }) => {
        setMState({ ...mstate, [e.target.name]: e.target.value });

        console.log("setMath", mstate);

        props.dispatch({
            type: "setMathOne",
            payload: { ...mstate, [e.target.name]: e.target.value }
        });
    }


    const [tstate, setTState] = useState({});

    const onInputchangesTwo = (e: { target: { name: any; value: any; }; }) => {
        setTState({ ...tstate, [e.target.name]: e.target.value });

        console.log("setMathTwo", tstate);

        props.dispatch({
            type: "setMathTwo",
            payload: { ...tstate, [e.target.name]: e.target.value }
        });
    }

    const handleReset = (e: any) => {
        setMState({});
        setTState({});
    }


    const onSubmitForm = (e: any) => {
        e.preventDefault();
        setOpen(true);
    }

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };


    const { rowFirst, columnFirst, columnSecond } = props.rows;



    const gridMaxOne = {
        display: 'grid',
        gridGap: '12px',
        gridTemplateColumns: `repeat(${rowFirst}, 23%)`,
        gridTemplateRows: `repeat(${columnFirst}, 65px)`,
        gridAutoFlow: 'column',
    };

    const gridMaxTwo = {
        display: 'grid',
        gridGap: '12px',
        gridTemplateColumns: `repeat(${columnFirst}, 27%)`,
        gridTemplateRows: `repeat(${columnSecond}, 65px)`,
        gridAutoFlow: 'column',
    };


    return (
        <>
            <form onSubmit={onSubmitForm} >
                <Grid container spacing={2} className="matrixForm">
                    <Grid item xs={5} md={5} className="martixNumForm">
                        <Grid item xs={5} md={6}>
                            <div id="testi" style={gridMaxOne}>
                                {[...Array(rowFirst * columnFirst)].map((ke, val) => < TextField
                                    type="number"
                                    InputProps={{
                                        inputProps: {
                                            max: 99, min: 0
                                        }
                                    }
                                    }
                                    label="Array1" name={`myvalues${val}`} onChange={onInputchangesOne} value={ke}
                                />)}
                            </div>
                        </Grid>
                    </Grid>

                    <Grid item xs={5} md={5} className="martixNumForm">
                        <Grid item xs={5} md={5}>
                            <div id="testi" style={gridMaxTwo}>
                                {[...Array(columnFirst * columnSecond)].map((key, value) => < TextField
                                    type="number"
                                    InputProps={{
                                        inputProps: {
                                            max: 99, min: 0
                                        }
                                    }
                                    }
                                    label="Array2" name={`myvalues${value}`} onChange={onInputchangesTwo} value={key}
                                />)}
                            </div>
                        </Grid>
                    </Grid>

                    <Grid item xs={5} md={12}>
                        <Box className="gpButton">
                            <Box className="oneButton">
                                <Button variant="contained" color="primary" type="submit">
                                    multiply
                                </Button>
                            </Box>
                            <Box className="oneButton">
                                <Button variant="contained" color="secondary" type="reset" onClick={handleReset}>
                                    Reset
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}


const mapStateToPros = (state: any) => {
    console.log("inf", state.rows);
    return {
        rows: state.rows
    }
}

export default connect(mapStateToPros)(Matrix);