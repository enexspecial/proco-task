import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, 
        CardActions, 
        CardContent, 
        Button,
        Typography, 
        Table, 
        TableBody, 
        TableContainer,
        TableHead,
        TableCell,
        TableRow,
        Paper
        } from '@material-ui/core'



const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    table: {
      minWidth: 650,
    },
  });
  

export const DataList = () => {

  const classes = useStyles();

  return (
      <div>
         <Card className="classes.root">
             <Typography className={classes.title} >User List</Typography>
             <CardContent>
               <TableContainer>
                 <Table className={classes.table} aria-label="data table">
                 <TableHead>
                  <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>Edit</TableCell>
                    <TableCell>Delete</TableCell>
                  </TableRow>
                </TableHead>

                 </Table>

               </TableContainer>

             </CardContent>
         </Card>
      </div>
  );
};
