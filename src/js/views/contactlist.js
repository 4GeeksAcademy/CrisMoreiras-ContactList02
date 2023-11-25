import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import {Contact} from "./views/contact";



export const ContactList = () => {
	return (
        <>
		<Contact />
        </>
	);
};