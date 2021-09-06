
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import './styles/matrix.css';


const Result = (props: any) => {

    console.log("res", props.mstate)

    const num1 = props.mstate;


    Object.keys(num1).forEach(function (el) {
        num1[el] = parseInt(num1[el])
    })
    const result = Object.values(num1);

    console.log("finin", result);


    const num2 = props.tstate;

    Object.keys(num2).forEach(function (el) {
        num2[el] = parseInt(num2[el])
    })
    const result2 = Object.values(num2);


    return (
        <div>
            <Grid item xs={5} md={2} className="martixNumFormMain">
                <Grid item xs={5} md={6}>
                    <Box>
                        {
                            result
                        }
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={5} md={2} className="martixNumFormMain">
                <Grid item xs={5} md={6}>
                    <Box>
                        {
                            result2
                        }
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}


const mapStateToPros = (state: any) => {
    console.log("setMath", state);
    return {
        mstate: state.mstate,
        tstate: state.tstate,
    }
}

export default connect(mapStateToPros)(Result);
