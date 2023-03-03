#!/usr/bin/env node
//console.log("Welcome to the Brain Games!");
import {nameQuestion} from "../src/cli.js";
let name = nameQuestion();
console.log("Hello, " + name);
