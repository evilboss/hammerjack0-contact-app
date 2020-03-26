import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from "./Header";
import AddContact from "../containers/AddContact";
import VisibleContactListList from "../containers/VisibleContactList";

const Router = () => (
    <BrowserRouter>
        <Header/>

        <Switch>
            <Route exact path="/">
                <AddContact/>
            </Route>
            <Route path="/contacts">
                <VisibleContactListList/>
            </Route>
        </Switch>
    </BrowserRouter>

);
export default Router;
