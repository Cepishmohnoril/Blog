import * as React from "react";
import { Admin, Resource } from "react-admin";
import { ArticleList } from "./view-formatters/articles";
import blogAdminProvider from './blog-admin-provider';

const dataProvider = blogAdminProvider('http://api.blog.local/admin');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="articles" list={ArticleList} />
    </Admin>
);

export default App;
