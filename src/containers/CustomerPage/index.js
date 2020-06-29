import React from 'react';
import Customer from '../../components/Customer'
import CustomerAdd from '../../components/CustomerAdd'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080,
  }
})

class CustomerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      customers: []
    }
  }
  async componentDidMount() {
    let response = await fetch(process.env.REACT_APP_BACKEND_URL+"/customers");
    if (!response.ok) {
      return
    }
    let customers = await response.json()
    this.setState({ loading: false, customers: customers })
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper>
          <Table>
            <TableHead className={classes.root}>
              <TableRow className={classes.table}>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers.map(c => { return (  <Customer key = {c.id} id = {c.id} image = {c.image} name = {c.name} birthday = {c.birth} gender = {c.gender} job = {c.job} />  )})}  
            </TableBody>
          </Table>
        </Paper>
        <CustomerAdd />
      </div>
    );
  };
};

export default withStyles(styles)(CustomerPage);
