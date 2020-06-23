import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const ArticleList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
        </Datagrid>
    </List>
);
